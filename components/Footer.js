import React from 'react'

function Footer() {
  return (
    <>
      <footer className="body-font bg-black text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-sm mb-3">FIND A STORE</h2>
              <nav className="list-none mb-10 title-font font-medium text-sm space-y-4">
                <li>
                  <a className="">
                    BECOME A MEMBER
                  </a>
                </li>
                <li>
                  <a className="">
                    SIGN UP FOR EMAIL
                  </a>
                </li>
                <li>
                  SEND US FEEDBACK
                  <a className=""></a>
                </li>
                <li>
                  <a className="">STUDENT DISCOUNTS</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-sm mb-3">Get Help</h2>
              <nav className="list-none mb-10 space-y-4 text-xs text-gray-400">
                <li>
                  <a className="">
                    Order Status
                  </a>
                </li>
                <li>
                  <a className="">
                    Delivery
                  </a>
                </li>
                <li>
                  <a className="">
                    Returns
                  </a>
                </li>
                <li>
                  <a className="">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a className="">
                    Contact Us On Nike.com Inquiries
                  </a>
                </li>
                <li>
                  <a className="">
                    Contact Us On All Other Inquiries
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-sm mb-3">ABOUT NIKE</h2>
              <nav className="list-none mb-10 space-y-4 text-xs text-gray-400">
                <li>
                  <a className="">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a className="">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="">
                    News
                  </a>
                </li>
                <li>
                  <a className="">
                    Investors
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font  items-center md:justify-start justify-center ">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="15px" fill="none"><path fill="currentColor" fillRule ="evenodd" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" clipRule="evenodd"></path></svg>
              <span className="ml-3 text-xs">India</span>
            </a>
            <p className="text-xs text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 Nike, Inc. All Rights Reserved

            </p>
            <ul className="inline-flex sm:ml-auto sm:mt-0 text-xs  mt-4 justify-center sm:justify-start lg:mr-16">
              <li className="">
                Guides

              </li>
              <li className="ml-3 ">
                Terms of Sale

              </li>
              <li className="ml-3 ">
                Terms of Use
              </li>
              <li className="ml-3 ">
                Nike Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer