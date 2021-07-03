import { Link } from "react-router-dom";

const NoQuoteFound = () => {
  return (
    <div className='text-xl min-h-50 flex flex-col justify-around items-center'>
      <h1 className='font-bold font-nova text-4xl'>No Quotes Found.</h1>

      <Link
        to='/new-quote'
        className='my-4 px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
        Add a New Quote
      </Link>
    </div>
  );
};

export default NoQuoteFound;
