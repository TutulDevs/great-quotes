import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className='bg-green-600'>
      <div className='w-11/12 mx-auto py-4 flex justify-between items-center'>
        <div className='logo font-nova flex-1'>
          <h1 className='text-3xl font-bold text-white'>Great Quotes</h1>
        </div>

        <nav>
          <ul className='flex'>
            <li>
              <NavLink
                to='/quotes'
                className='ml-1 px-4 py-1 text-md sm:text-xl font-light opacity-50 text-white hover:opacity-100'
                activeClassName='font-medium opacity-100'>
                Quotes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new-quote'
                className='ml-1 px-4 py-1 text-md sm:text-xl font-light opacity-50 text-white hover:opacity-100'
                activeClassName='font-medium opacity-100'>
                Add Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
