// a reducer fn with SEND, SUCCESS, ERROR
// http fn will take a reqFn & status, initially false
// on the state, status is pending || null
// a fn w/ useCallback which will have an async fn
// it will depend on reqFn
// async fn will SEND first
// it will await the reqFn w/ the data
// on try, SUCCESS & resData
// on catch, ERROR & error message
// return an obj w/ callback FN & the state
// exp http

import { useCallback, useReducer } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        status: "pending",
        data: null,
        error: null,
      };

    case "SUCCESS":
      return {
        status: "completed",
        data: action.responseData,
        error: null,
      };

    case "ERROR":
      return {
        status: "completed",
        data: null,
        error: action.errorMessage,
      };

    default:
      return state;
  }
};

const useHttp = (requestFunction, initStatus = false) => {
  const [httpState, dispatch] = useReducer(reducerFn, {
    status: initStatus ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (data) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(data);
        dispatch({ type: "SUCCESS", responseData });
      } catch (err) {
        // console.log({ err });
        // console.log(err.message);
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
