import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <div className='font-sans'>
      <MainHeader />
      <main className='w-11/12 min-h-86 mx-auto border'>{props.children}</main>

      <footer className='bg-green-200 py-2 text-center text-xs'>
        Created by Tutul
      </footer>
    </div>
  );
};

export default Layout;
