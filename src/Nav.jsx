// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import assets from "./asset.jsx";
//
//
// const Nav = () => {
//
//     let [isMenuOpen, setMenuOpen] = useState(false);
//
//     let toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };
//     return(
//         <>
//             <nav className=" ">
//                 <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
//                     <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <h3 className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
//               Uprajay Danny
//             </h3>
//                     </Link>
//                     <button
//                         onClick={toggleMenu}
//                         type="button"
//                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                         aria-controls="navbar-default"
//                         aria-expanded={isMenuOpen}
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className="w-5 h-5"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 17 14"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 d="M1 1h15M1 7h15M1 13h15"
//                             />
//                         </svg>
//                     </button>
//                     <div
//                         className={`${
//                             isMenuOpen ? 'block' : 'hidden'
//                         } w-full md:block md:w-auto`}
//                         id="navbar-default"
//                     >
//                         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
//                             <li>
//                                 <a href={assets.cv} download={"Cv"}>
//                                     <button className="font-bold py-2 px-4 rounded inline-flex items-center">
//                                         <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
//                                              viewBox="0 0 20 20">
//                                             <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
//                                         </svg>
//                                         <p>Mon CV</p>
//                                     </button>
//                                 </a>
//                             </li>
//                             <li>
//
//                                 <a href="#home"
//                                    className="block active py-2 px-3 nav_link text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                                 >
//                                     home
//                                 </a>
//                             </li>
//                             <li>
//
//                                 <a href="#presentation"
//                                    className="block py-2 px-3 nav_link text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                                 >
//                                     Présentation
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#projet"
//                                     className="block py-2 px-3 nav_link  text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                                 >
//                                     Projets
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#contact"
//                                     className="block nav_link py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                                 >
//                                     Me contacter
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
//
// };
//
// export default Nav;