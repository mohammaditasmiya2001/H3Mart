import React from 'react'
import logo from '../images/logo.svg'
import { IoSearchSharp } from "react-icons/io5";
import {RiSettings4Fill} from "react-icons/ri";

function Navbar() {
    return (
        <div>
            <div className='ml-20 mr-20 mt-0 py-3 pt-0'>
            <header className="ml-20 cursor-pointer text-gray-600 bg-white body-font ml-10 mr-20">
                <div className="container mx-auto flex flex-wrap p-5 justify-between pt-3 pb-3 flex-col md:flex-row items-center">
                    <nav className="text-sm flex lg:w-2/5 flex-wrap items-center text-black md:ml-auto " style={{fontSize:"17px"}}>
                        <span className="mr-5">Coins</span>
                        <span className="mr-5">Exchanges</span>
                        <span className="mr-5">Swap</span>
                    </nav>
                    <span className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img src={logo} alt="logo" height={80} width={80} />
                    </span>
                    <div className="container mx-auto w-full flex flex-wrap flex-row items-center justify-between lg:w-2/5 inline-flex lg:justify-end lg:ml-0">
                        <div><IoSearchSharp /></div>
                        <div className='mr-10' />
                        <div><RiSettings4Fill/></div>
                        <div className='mr-10' />
                        <button style={{borderRadius:"40px",backgroundColor:"#66CDAA"}} className="font-bold text-white  mr-0 shadow-lg inline-flex text-center items-center text-sm border-0 py-2 px-5 shadow-lg focus:outline-none ">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </header>
        </div>
        </div>
    )
}

export default Navbar