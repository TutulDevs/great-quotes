import { useRef } from "react";
import Loader from "../UI/Loader";

const QuoteForm = (props) => {
  const authorRef = useRef();
  const textRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAuthor = authorRef.current.value;
    const enteredText = textRef.current.value;

    const obj = {
      author: enteredAuthor,
      text: enteredText,
    };

    // send to Parent
    props.addQuote(obj);
  };

  return (
    <form onSubmit={submitHandler} className='bg-gray-00 max-w-xl mx-auto p-2'>
      <div className='mb-3 text-xl'>
        <label htmlFor='author' className='block mb-1 dark:text-gray-300'>
          Author:
        </label>
        <input
          ref={authorRef}
          type='text'
          name='author'
          id='author'
          required
          className='w-full py-2 px-3 rounded border bg-green-50 border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200'
        />
      </div>
      <div className='mb-3 text-xl'>
        <label htmlFor='text' className='block mb-1 dark:text-gray-300'>
          Quote:
        </label>
        <textarea
          ref={textRef}
          name='text'
          id='text'
          required
          className='w-full h-20 py-2 px-3 rounded border bg-green-50 border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200'></textarea>
      </div>

      <div className='text-xl float-right flex justify-center items-center'>
        <div className='transform scale-75 mr-4'>
          {props.isLoading && <Loader />}
        </div>

        <button className='my-4 px-6 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
