import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <div className='font-sans bg-gray-50'>
      <MainHeader />
      <main className='w-11/12 min-h-86 mt-1 py-4 mx-auto'>
        {props.children}
      </main>

      <footer className='bg-green-200 py-2 text-center text-xs font-nova'>
        Created by
        <a
          href='https://github.com/tutuldevs'
          className='px-1 font-bold hover:underline'>
          Tutul
        </a>
      </footer>
    </div>
  );
};

export default Layout;
