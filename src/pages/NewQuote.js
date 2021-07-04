import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  return (
    <>
      <h1 className='text-center text-2xl md:text-5xl text-green-600 font-nova font-bold underline py-2 my-4'>
        Add a New Quote
      </h1>

      <QuoteForm />
    </>
  );
};

export default NewQuote;
