import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const param = useParams();

  return <p>Quote Id: {param.quoteId}</p>;
};

export default QuoteDetail;
