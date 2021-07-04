import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/useHttp";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (data) => sendRequest(data);

  return (
    <>
      <h1 className='text-center text-2xl md:text-5xl text-green-600 font-nova font-bold underline py-2 my-4'>
        Add a New Quote
      </h1>

      <QuoteForm isLoading={status === "pending"} addQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;
