import { useEffect } from "react";
import { useParams, Link, Route, useRouteMatch } from "react-router-dom";
import SingleQuote from "../components/quotes/SingleQuote";
import useHttp from "../hooks/useHttp";
import { getSingleQuote } from "../lib/api";
import Comments from "./Comments";
import Loader from "../components/UI/Loader";
import NoQuoteFound from "../components/quotes/NoQuoteFound";

const QuoteDetail = () => {
  const {
    sendRequest,
    data: loadedData,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  const param = useParams();
  const { quoteId } = param;
  const matchingRoute = useRouteMatch();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let content;
  if (status === "pending") content = <Loader />;
  if (error)
    content = <p className='text-center text-xl text-red-400'>{error}</p>;
  if (status === "completed" && !loadedData.text) content = <NoQuoteFound />;
  if (status === "completed")
    content = <SingleQuote author={loadedData.author} text={loadedData.text} />;

  return (
    <>
      {content}

      <Route path={matchingRoute.path} exact>
        <div className='grid place-items-center py-2'>
          <Link
            to={`${matchingRoute.url}/comments`}
            className='px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`${matchingRoute.path}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
