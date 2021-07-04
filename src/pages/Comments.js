import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";

const DUMMY = [
  { id: "c1", comment: "This is a comment" },
  { id: "c2", comment: "This is another comment" },
];

const Comments = () => {
  return (
    <div className='my-2'>
      <CommentForm />

      <CommentList comments={DUMMY} />
    </div>
  );
};

export default Comments;
