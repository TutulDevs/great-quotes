import { useParams, Link, Route, useRouteMatch } from "react-router-dom";
import SingleQuote from "../components/quotes/SingleQuote";
import Comments from "./Comments";

const DUMMY = [
  { id: "q1", author: "Max", text: "This is a quote." },
  { id: "q2", author: "Tutul", text: "This is another quote." },
];

const QuoteDetail = () => {
  const param = useParams();
  const matchingRoute = useRouteMatch();

  const selectedQuote = DUMMY.find((el) => el.id === param.quoteId);

  return (
    <>
      <SingleQuote quote={selectedQuote} />

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

//{`${location.pathname}/comments`}
