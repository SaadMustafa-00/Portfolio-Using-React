import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavImg from '../Assets/navLogo.png'
export default function Navbar() {


    return (
        <>
            <nav className="z-20 bg-primary x-data={ open: false } sticky -top-0 " >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/home" className="flex items-center">
                        <img src={NavImg} className='h-12 w-12 mx-3' />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-mixed-orange nav-heading my-2">Capricorn</span>
                    </Link>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only " id='toggle'>Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
                            <li>
                                <Link to="/Home" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-mixed-orange" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded  md:border-0  md:p-0 md:w-auto md:hover:text-mixed-orange">About Me <svg className="w-5 h-5 ml-0.5 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 px-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to="/Skills" class="block px-4 py-2 hover:border-r-2  border-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Skills</Link>
                                        </li>
                                        <li>
                                            <Link to="/Projects" class="block px-4 py-2 hover:border-r-2 border-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/Education" class="block px-4 py-2 hover:border-r-2 border-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Education + Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/Pricing" class="block px-4 py-2 hover:border-r-2 border-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/Testimonials" class="block px-4 py-2 hover:border-r-2 border-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Testimonials</Link>
                                        </li>

                                    </ul>
                                    <div class="py-1 mx-2">
                                        <Link to="/FAQs" class="block px-4 py-2 hover:border-r-2 border-primary text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">FAQs</Link>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <Link to="/HireMe" className="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 md:hover:text-mixed-orange">Hire Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
