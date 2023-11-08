"use client"
import React, { useState } from 'react'
import data from '../data/sidebarData'

const Sidebar = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? data : data.slice(0, 7);


    return (
        <div className='w-[22%] h-full bg-[#191c20] flex flex-col px-5'>
            <div className='flex flex-col'>
                <div className='flex justify-between py-1 items-center'>
                    <p className='text-white text-[13px]'>Top Repositories</p>
                    <a href="/">
                        <button className='flex items-center bg-[#238636] rounded-md py-1 px-2 gap-1'>
                            <span>
                                <svg className='w-[17px] h-[17px] fill-white ' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                </svg>
                            </span>
                            <p className='text-white text-[13px]'>New</p>
                        </button>
                    </a>
                </div>
                {/* input  */}
                <div className='py-[2px]'>
                    <input className='w-full pl-4 py-[2px] rounded-md bg-[#010409] border border-primaryBorder placeholder:text-[13px] placeholder:text-darkText' type="text" placeholder='Find a repository...' />
                </div>
            </div>

            {/* names */}
            <div className='py-2 mt-3'>
                {
                    visibleItems.map((item, index) => {
                        return (
                            <ul className='list-none '>
                                <li className='flex  items-center my-[5px]'>
                                    <a className='flex items-center gap-2 group' href="/">
                                        <span>
                                            <img className='w-[16px] h-[16px] rounded-full ' src={"./profile2.png"} alt="" />
                                        </span>
                                        <span className='flex text-[13px] text-primary-color group-hover:underline font-semibold'>
                                            <p>{item.cat}</p>
                                            <p className='text-darkText'>/</p>
                                            <p>{item.subcat}</p>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        )
                    })
                }
                {!showAll && data.length > 7 && (
                    <button className="text-darkText text-[13px] hover:text-blue-500 mt-5"
                        onClick={() => setShowAll(true)}>
                        Show more 
                    </button>
                )}
            </div>
        </div>
    )
}

export default Sidebar