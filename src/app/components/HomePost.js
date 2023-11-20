import React from 'react'
import data from '../data/postdata'

const HomePost = () => {
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div className='flex flex-col px-3 py-4 w-full gap-3 bg-[#0D1117] border-[1px] border-zinc-700 rounded-lg'>
                            <div className='flex items-center justify-between '>
                                <div className='flex gap-4'>
                                    <div className='relative'>
                                        <img className='rounded-full w-[40px]' src={"./profile2.png"} alt="" />
                                        <div className='absolute bg-zinc-600 rounded-full p-[2px] left-8 bottom-[1px] outline   outline-[#0D1117]'>
                                            <svg className='w-[15px]' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" >
                                                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM5.5 4A1.5 1.5 0 0 0 4 5.5v5c0 .828.5 1.5 1 1.5v-1a1 1 0 0 1 1-1h5v1h-1v1h1.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm.5 7.25v2.514a.25.25 0 0 0 .426.178l.898-.888a.25.25 0 0 1 .352 0l.898.888A.25.25 0 0 0 9 13.764V11H6.25a.25.25 0 0 0-.25.25Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex gap-1'>
                                            <a className='text-[14px] text-white font-semibold hover:underline hover:text-blue-600' href="/">{item.heading}</a>
                                            <p className='text-[13px] text-darkText '>created a repository</p>
                                        </div>
                                        <p className='text-[12px] text-darkText'>{item.time}</p>
                                    </div>
                                </div>
                                <div className='cursor-pointer'>
                                    <svg className='w-[19px] fill-zinc-500 hover:fill-white' aria-label="feed item heading menu" role="img"  viewBox="0 0 16 16" version="1.1"  data-view-component="true" class="octicon octicon-kebab-horizontal feed-item-heading-menu-button mr-1">
                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='bg-[#161B22] flex items-center justify-between rounded-md px-4 py-3'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-2'>
                                        <img className='w-[20px] rounded-full' src={"./profile2.png"} alt="" />
                                        <p className='text-white font-semibold text-[13px]'>{item.heading}/{item.name}</p>
                                    </div>
                                    <p className='text-white text-[13px]'>{item.description}</p>
                                    <div className='flex gap-1 items-center'>
                                        <div className='rounded-full p-1 bg-blue-600'></div>
                                        <p className='text-white text-[12px]'>{item.language}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <button className='bg-[#20262e] px-3 py-1 rounded-l-lg border-l-[1px] border-t-[1px] border-b-[1px] border-r-[0.5px] border-zinc-700 flex gap-4 items-center hover:border-white hover:bg-[#2c343f]'>
                                        <svg className='w-[18px] fill-zinc-500 ' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
                                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                        </svg>
                                        <p className='text-[13px] text-white'>Star</p>
                                    </button>
                                    <button className='bg-[#20262e] px-1 py-1 rounded-r-lg border-r-[1px] border-t-[1px] border-b-[1px] border-l-[0.5px] border-zinc-700 items-center hover:border-white hover:bg-[#2c343f]'>
                                        <svg className='w-[18px] fill-zinc-500 ' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-triangle-down">
                                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomePost