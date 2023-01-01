import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <>
            <header className="bg-gray-100 py-4">
                <div className="container mx-auto bg-white flex flex-wrap  flex-col md:flex-row items-center my-[10px]">
                <Link href={"/"}>
                    <span className="flex title-font font-medium items-center text-gray-900 mb-4 ml-8 md:mb-0">
                        <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="80px" height="80px" fill="none"><path fill="currentColor" fillRule ="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                    </span>
                    </Link>
                    <nav className="lg:mx-auto leading-10 md:mr-auto flex text-[#111] flex-wrap text-lg items-center font-normal justify-center">
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">Man</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">Women</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">Kids</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div><div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">Customise</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div><div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">Sale</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div><div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" mr-5 hover:text-gray-900">SNKRS</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="flex flex-row items-center space-x-5 lg:mr-8 lg:mb-0 mb-3">
                        <div className="relative flex items-center w-[200px] h-10 rounded-full overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300 hover:bg-slate-300 bg-slate-100">
                                <svg aria-hidden="true" className="" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="#000" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                            </div>

                            <input
                                className="peer h-full w-full hover:bg-slate-300 bg-slate-100 outline-none text-md text-gray-100 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search" />
                        </div>

                        <div className='flex flex-row space-x-5'>
                            <p>
                                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="#000" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                            </p>
                            <p>
                                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="#000" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                            </p>

                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}

export default Header