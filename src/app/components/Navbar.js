import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between w-full items-center bg-[#010409]'>
            <div className='flex justify-center items-center gap-3'>
                <button className='rounded-md border-2 border-primaryBorder p-1.5'>
                    <svg className='fill-primaryBg' height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                </button>

                <a className='p-1' href="/">
                    <svg className='fill-white' height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </a>

                <div>
                    <a className='text-white font-sans text-[15px] font-semibold ' href="/">Dashboard</a>
                </div>


            </div>

            <div className='flex '>
                <div className='border rounded-sm border-zinc-700 flex items-center w-[300px] p-[3px] cursor-pointer'>
                    <div className=''>
                        <svg className='fill-primaryBg' height="16" viewBox="0 0 16 16" width="16" data-view-component="true" >
                            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                        </svg>
                    </div>
                    <div className='w-[250px] border-r-zinc-700  border-r-[0.5px] mx-2'>
                        <p className='text-darkText text-[13px] font-sans '> Type
                            <kbd className='border border-primaryBorder p-0.5 text-[12px] text-darkText mx-1 rounded-sm '>/</kbd>
                            to Search
                        </p>
                    </div>
                    <div className='flex justify-center items-center '>
                        <button className='hover:bg-[#1e2634] p-1 rounded-sm'>
                            <svg className='fill-primaryBg' height="16" viewBox="0 0 16 16"  width="16" data-view-component="true" >
                                <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar