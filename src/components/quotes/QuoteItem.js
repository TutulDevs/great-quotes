import { Link, useLocation } from "react-router-dom";

const QuoteItem = (props) => {
  const location = useLocation();

  return (
    <div className='flex-1 min-w-max m-2 p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center rounded-lg bg-green-400'>
      <div className='flex-1'>
        <h1 className='text-2xl lg:text-3xl mb-2'>{props.text}</h1>
        <p className='italic font-semibold text-gray-600 text-xl'>
          {props.author}
        </p>
      </div>

      <Link
        to={`${location.pathname}/${props.id}`}
        className='self-end sm:self-auto ml-2 px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-500'>
        View Fullpage
      </Link>
    </div>
  );
};

export default QuoteItem;
