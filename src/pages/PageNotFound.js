import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Err from '../images/err.png';

export const PageNotFound = () => {

  useEffect(() => {
    document.title = 'Page not found';
  });

  return (
    <main>
      <section>
        <div className='flex flex-col items-center p-2'>
          <p className=' text-4xl font-bold mb-4 dark:text-white'>Page not found Error 404</p>
          <div className='max-w-4xl'>
            <img className='rounded' src={Err} alt='Error' />
          </div>
        </div>

        <div className='flex justify-center'>
        <Link to='/'>
        <button type="button" className=" my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Go To Home Page
        </button>
        </Link>
        </div>
      </section>
    </main>
  )
}
