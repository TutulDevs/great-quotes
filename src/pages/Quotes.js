//import NoQuoteFound from "../components/quotes/NoQuoteFound";
import QuoteItems from "../components/quotes/Quoteitems";

const DUMMY = [
  { id: "q1", author: "Max", text: "This is a quote." },
  { id: "q2", author: "Tutul", text: "This is another quote." },
];

const Quotes = () => {
  return <QuoteItems quotes={DUMMY} />;
};

export default Quotes;
