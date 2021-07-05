import { Link, NavLink } from "react-router-dom";
import ToggleDarkMode from "../UI/ToggleDarkMode";

const MainHeader = () => {
  return (
    <header className='bg-green-600'>
      <div className='w-11/12 mx-auto py-4 flex justify-between items-center'>
        <div className='logo font-nova flex-1'>
          <h1 className='text-3xl font-bold text-white'>
            <Link to='/'>Great Quotes</Link>
          </h1>
        </div>

        <nav>
          <ul className='flex items-center'>
            <li>
              <NavLink
                to='/quotes'
                className='px-2 sm:px-4 py-1 text-lg sm:text-xl font-light opacity-50 text-white hover:opacity-100'
                activeClassName='font-medium opacity-100'>
                Quotes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new-quote'
                className='px-2 sm:px-4 py-1 text-lg sm:text-xl font-light opacity-50 text-white hover:opacity-100'
                activeClassName='font-medium opacity-100'>
                Add Quote
              </NavLink>
            </li>
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
