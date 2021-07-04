import QuoteItem from "./QuoteItem";

const QuoteItems = (props) => {
  const content = props.quotes.map((el) => (
    <QuoteItem key={el.id} id={el.id} text={el.text} author={el.author} />
  ));

  return (
    <div className='flex flex-wrap flex-col lg:flex-row justify-between '>
      {content}
    </div>
  );
};

export default QuoteItems;
