const CommentForm = () => {
  return (
    <form className='w-full md:w-80 my-2 mx-auto text-md flex flex-col items-center'>
      <textarea
        placeholder='Write you comment'
        className='w-full mb-4 py-2 px-4 rounded-lg border border-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100'></textarea>
      <button className='px-8 py-2 rounded-lg bg-green-600 text-white text-xl duration-300 hover:bg-green-400'>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
