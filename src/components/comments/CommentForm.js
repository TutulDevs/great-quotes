import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { addComment } from "../../lib/api";
import Loader from "../UI/Loader";

const CommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentRef = useRef();

  const param = useParams();
  const { quoteId } = param;
  const { onAddComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddComment();
    }
  }, [status, error, onAddComment]);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredComment = commentRef.current.value.trim();
    if (enteredComment === "") {
      alert("Enter a valid comment");
      return;
    }

    const obj = {
      quoteId,
      commentText: { text: enteredComment },
    };

    // send to FB
    sendRequest(obj);

    // reset
    e.target.reset();
  };

  return (
    <form
      onSubmit={submitHandler}
      className='w-full md:w-80 my-2 mx-auto text-md flex flex-col items-center'>
      <textarea
        ref={commentRef}
        placeholder='Write your comment'
        className='w-full mb-4 py-2 px-4 rounded-lg bg-green-50 border border-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200'></textarea>

      <div className='flex items-center'>
        <div className='transform scale-50 mr-2'>
          {status === "pending" && <Loader />}
        </div>

        <button className='px-4 py-2 rounded-lg bg-green-600 text-white text-xl duration-300 hover:bg-green-400'>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
