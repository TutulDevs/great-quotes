import QuoteItem from "./QuoteItem";

const QuoteItems = (props) => {
  const content = props.quotes.map((el) => (
    <QuoteItem key={el.id} id={el.id} text={el.text} author={el.author} />
  ));

  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>{content}</div>
  );
};

export default QuoteItems;
