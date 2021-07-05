const CommentList = (props) => {
  const comments = props.comments.map((el) => (
    <li key={el.id} className='py-1'>
      {el.text}
    </li>
  ));

  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-4 w-4'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
      />
    </svg>
  );

  return (
    <>
      <h3 className='mt-4 mb-2 text-xl font-bold tracking-wider flex flex-col justify-center items-center content-around justify-center flex-wrap dark:text-gray-200'>
        Comments {icon}
      </h3>

      <ul className='flex flex-col justify-center items-center divide-y divide-green-300 dark:divide-green-900 text-lg dark:text-gray-300'>
        {comments}
      </ul>
    </>
  );
};

export default CommentList;
