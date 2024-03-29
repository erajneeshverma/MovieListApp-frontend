// import React from 'react'
// import {Link,NavLink} from 'react-router-dom';

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="./movix-logo.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
                       
//                         <Link
//                             to="/filter"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Filter
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({isActive}) =>
//                                         `${isActive?"text-orange-700":"text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/movies"
//                                     className={({isActive}) =>
//                                         `${isActive?"text-orange-700":"text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     All Movies
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/add" 
//                                     className={({isActive}) =>
//                                         `${isActive?"text-orange-700":"text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                 Add Movie
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/search" 
//                                     className={({isActive}) =>
//                                         `${isActive?"text-orange-700":"text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                 Search
//                                 </NavLink>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./movix-logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/filter"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Filter
                        </Link>
                    </div>
                    <div
                        className="lg:hidden"
                        onClick={toggleMobileMenu}
                    >
                        {/* Add a mobile menu button */}
                        <svg
                            className="h-6 w-6 cursor-pointer text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                    <div
                        className={`lg:flex lg:w-auto lg:order-1 ${
                            mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/movies"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    All Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Add Movie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/search"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Search
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
