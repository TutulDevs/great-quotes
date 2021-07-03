import { useRef } from "react";

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
    console.table(obj);

    // send to FB
  };

  return (
    <form onSubmit={submitHandler} className='bg-gray-00 max-w-xl mx-auto p-2'>
      <div className='mb-3 text-xl'>
        <label htmlFor='author' className='block mb-1'>
          Author:
        </label>
        <input
          ref={authorRef}
          type='text'
          name='author'
          id='author'
          required
          className='w-full py-2 px-3 rounded border border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100'
        />
      </div>
      <div className='mb-3 text-xl'>
        <label htmlFor='text' className='block mb-1'>
          Quote:
        </label>
        <textarea
          ref={textRef}
          name='text'
          id='text'
          required
          className='w-full h-20 py-2 px-3 rounded border border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100'></textarea>
      </div>

      <div className='text-xl'>
        <button className='float-right my-4 px-6 py-2 rounded-lg bg-green-600 text-white duration-300 hover:bg-green-400'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
