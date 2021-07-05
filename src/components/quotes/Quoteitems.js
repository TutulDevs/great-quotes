import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";

// sorting helper function
const sortingHelper = (arr, asc) => {
  return arr.sort((arrA, arrB) => {
    if (asc) return arrA.id > arrB.id ? 1 : -1;
    else return arrA.id < arrB.id ? 1 : -1;
  });
};

const QuoteItems = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // check the sorting state
  const isSortingAsc = queryParams.get("sort") === "desc";

  const sortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? "asc" : "desc"}`,
    });
  };

  const sortedQuotes = sortingHelper(props.quotes, isSortingAsc);

  const content = sortedQuotes.map((el) => (
    <QuoteItem key={el.id} id={el.id} text={el.text} author={el.author} />
  ));

  return (
    <>
      <div className='mb-4 py-2 border-b-2 border-green-200'>
        <button
          onClick={sortingHandler}
          type='button'
          className='border border-green-300 bg-green-200 rounded px-2 py-1 text-md focus:ring focus:ring-green-400'>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>

      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>{content}</div>
    </>
  );
};

export default QuoteItems;
