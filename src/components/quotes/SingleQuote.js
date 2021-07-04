const SingleQuote = (props) => {
  return (
    <figure
      className='w-full max-w-xl min-h-50 my-8 mx-auto p-4 md:p-8 bg-green-800 text-white flex flex-col justify-center items-center rounded-xl relative 
    bg-gradient-to-br from-green-300 via-green-500 to-green-900'>
      <h1 className='font-nova text-center text-4xl lg:text-6xl'>
        {props.text}
      </h1>
      <figcaption className='italic text-2xl opacity-75 font-bold absolute bottom-6 right-10'>
        {props.author}
      </figcaption>
    </figure>
  );
};

export default SingleQuote;
