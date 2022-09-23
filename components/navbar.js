import Link from 'next/link';

const Navbar = ({ active }) => {
  return (
    <nav>
      <div className='container display-f flex-column mt-3'>
        <h3 className='mb-2 font-lg grotesk'>HackerNews</h3>
        <div className='display-f'>
          {' '}
          <Link href='/'>
            {active === 'top' && active != 'new' ? (
              <a className='font-md grotesk mr-1 text-white navhead'>
                Top Stories
              </a>
            ) : (
              <a className='font-md grotesk mr-1 text-primary underline navhead'>
                Top Stories
              </a>
            )}
          </Link>
          <Link href={'/new'}>
            {
              (active =
                'new' && active != 'top' ? (
                  <a className='font-md grotesk text-white navhead'>
                    New Stories
                  </a>
                ) : (
                  <a className='font-md grotesk text-primary underline navhead'>
                    New Stories
                  </a>
                ))
            }
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
