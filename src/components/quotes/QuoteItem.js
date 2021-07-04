import { Link, useLocation } from "react-router-dom";

const QuoteItem = (props) => {
  const location = useLocation();

  return (
    <div className='relative p-4 rounded-lg bg-green-400'>
      <h1 className='text-2xl lg:text-3xl mb-2'>{props.text}</h1>
      <p className='italic font-semibold text-gray-600 text-xl mb-4'>
        {props.author}
      </p>

      <Link
        to={`${location.pathname}/${props.id}`}
        className='absolute bottom-2 right-2 px-2 sm:px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-500'>
        View Fullpage
      </Link>
    </div>
  );
};

export default QuoteItem;
