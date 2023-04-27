import { Link } from "react-router-dom"

export const Footer = () => {
  return (

      <footer className="bg-white shadow pt-48 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
            <Link to="/" className="hover:underline" rel="noreferrer" >Movies™</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="https://www.instagram.com/" target="_blank" className="mr-4 hover:underline md:mr-6 " rel="noreferrer">Instagram</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">LinkedIn</Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">Youtube</Link>
            </li>
            <li>
              <Link to="https://github.com/Beka-Okropiridze" target="_blank" className="hover:underline" rel="noreferrer">Github</Link>
            </li>
          </ul>
        </div>
      </footer>

  )
}
