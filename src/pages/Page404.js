import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className='text-xl min-h-50 flex flex-col justify-evenly items-center'>
      <h1 className='text-2xl md:text-4xl font-bold dark:text-gray-200'>
        The Page is not Found!
      </h1>

      <Link
        to='/'
        className='px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
        Go to Home
      </Link>
    </div>
  );
};

export default Page404;
