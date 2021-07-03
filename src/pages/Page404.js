import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className='text-xl min-h-50 flex flex-col justify-center items-center'>
      <p>The Page is not Found!</p>

      <Link
        to='/'
        className='my-4 px-4 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
        Go to Home
      </Link>
    </div>
  );
};

export default Page404;
