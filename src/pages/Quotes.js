import NoQuoteFound from "../components/quotes/NoQuoteFound";
import { useEffect } from "react";
import QuoteItems from "../components/quotes/Quoteitems";
import useHttp from "../hooks/useHttp";
import { getAllQuotes } from "../lib/api";
import Loader from "../components/UI/Loader";

const Quotes = () => {
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;
  if (status === "pending") content = <Loader />;
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
    content = <NoQuoteFound />;
  if (error)
    content = <p className='text-center text-xl text-red-400'>{error}</p>;
  if (status === "completed" && loadedQuotes && loadedQuotes.length > 0)
    content = <QuoteItems quotes={loadedQuotes || []} />;

  return content;
};

export default Quotes;
