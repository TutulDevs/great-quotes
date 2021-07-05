import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { getAllComments } from "../lib/api";
import { useCallback, useEffect } from "react";
import Loader from "../components/UI/Loader";

const Comments = () => {
  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  const param = useParams();
  const { quoteId } = param;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let content;
  if (status === "pending") content = <Loader />;
  if (status === "completed" && loadedComments && loadedComments.length > 0)
    content = <CommentList comments={loadedComments} />;
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  )
    content = (
      <p className='text-center text-xl dark:text-gray-200'>
        No comments were added on this quote yet.
      </p>
    );

  return (
    <div className='my-2'>
      <CommentForm onAddComment={addCommentHandler} />

      {content}
    </div>
  );
};

export default Comments;
