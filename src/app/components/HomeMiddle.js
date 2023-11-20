import React from 'react'
import HomePost from './HomePost'
import Footer from './Footer'

const HomeMiddle = () => {
    return (
        <section className='w-[78vw] bg-[#010409] px-7 py-5'>
            <div className='flex flex-col w-[68%] '>
                <div className='flex justify-between w-full'>
                    <p className='text-white text-[20px] font-semibold'>Home</p>
                    <div className='flex gap-5 items-center'>
                        <a className='hover:underline text-[14px] text-blue-500' href="/">
                            Send feedback
                        </a>

                        <button className='bg-[#182432] border-zinc-700 border rounded-md hover:bg-[#23262c] hover:border-white flex items-center justify-center gap-2 p-1 '>
                            <svg className='fill-primaryBg w-[17px] ml-1' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-filter mr-2">
                                <path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
                            </svg>
                            <p className='text-white text-[15px]'>Filters</p>
                            <span className='px-1 text-[12px] text-white rounded-full bg-[#353b46] '>10</span>
                        </button>
                    </div>
                </div>

                {/* use tools  */}
                <div className='flex flex-col mt-2'>
                    <div className='flex items-center gap-2 my-2'>
                        <span className='rounded-full p-1 bg-[#d2cfcf]'>
                            <svg className='fill-black w-[18px]' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-tools color-fg-subtle">
                                <path d="M5.433 2.304A4.492 4.492 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.993 5.993 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.249.249 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.993 5.993 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.495 4.495 0 0 0 12.5 6a4.492 4.492 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159Z"></path>
                            </svg>
                        </span>
                        <p className='text-[14px] text-[#8b949e]'>Use tools of the trade</p>
                    </div>

                    <div className='w-full flex gap-5 '>
                        <div className='bg-[#161B22] px-4 py-4 rounded-md w-[50%]'>
                            <p className='text-[13px] text-white mb-2 font-semibold'>Simplify your development workflow with a GUI</p>
                            <div className='flex '>

                                <img className='w-[40px] h-[40px]' src={"./pp-1.png"} alt="" />

                                <p className='text-[13px] w-[80%] text-[#8b949e] ml-4 '><a className='text-blue-500 hover:underline ' href="/">Install GitHub Desktop</a> to visualize, commit, and push changes without ever touching the command line.</p>
                            </div>
                        </div>

                        <div className='bg-[#161B22] px-4 py-4 rounded-md w-[50%]'>
                            <p className='text-[13px] text-white mb-2 font-semibold'>Get AI-based coding suggestions</p>
                            <div className='flex items-center '>
                                <svg className='w-[35px] fill-white' aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true" class="octicon octicon-copilot mb-3">
                                    <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
                                </svg>
                                <p className='text-[13px] w-[80%] text-[#8b949e] ml-4 '><a className='text-blue-500 hover:underline ' href="/">Try GitHub Copilot </a> free for 30 days, which suggests entire functions in real time, right from your editor.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* get started  */}
                <div className='flex flex-col mt-2'>
                    <div className='flex items-center gap-2 my-2'>
                        <span className='rounded-full p-1 bg-[#d2cfcf]'>
                            <svg className='fill-slate-500 w-[20px]' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mortar-board color-fg-subtle">
                                <path d="M7.693 1.066a.747.747 0 0 1 .614 0l7.25 3.25a.75.75 0 0 1 0 1.368L13 6.831v2.794c0 1.024-.81 1.749-1.66 2.173-.893.447-2.075.702-3.34.702-.278 0-.55-.012-.816-.036a.75.75 0 0 1 .133-1.494c.22.02.45.03.683.03 1.082 0 2.025-.221 2.67-.543.69-.345.83-.682.83-.832V7.503L8.307 8.934a.747.747 0 0 1-.614 0L4 7.28v1.663c.296.105.575.275.812.512.438.438.688 1.059.688 1.796v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3c0-.737.25-1.358.688-1.796.237-.237.516-.407.812-.512V6.606L.443 5.684a.75.75 0 0 1 0-1.368ZM2.583 5 8 7.428 13.416 5 8 2.572ZM2.5 11.25v2.25H4v-2.25c0-.388-.125-.611-.25-.735a.697.697 0 0 0-.5-.203.707.707 0 0 0-.5.203c-.125.124-.25.347-.25.735Z"></path>
                            </svg>
                        </span>
                        <p className='text-[14px] text-[#8b949e]'>Get started on GitHub</p>
                    </div>

                    <div className='w-full flex gap-5 overflow-hidden'>
                        <div className='bg-[#161B22] overflow-hidden hover:scale-105 transition duration-500 rounded-md w-[50%]'>
                            <img className='w-full h-full' src={"./home-thumbnail.jpg"} alt="" />
                        </div>

                        <div className='bg-[#161B22] flex flex-col px-4 py-4 rounded-md w-[50%] gap-2'>
                                <svg className='w-[25px] fill-[#8b949e] ' aria-hidden="true"  viewBox="0 0 24 24" version="1.1" data-view-component="true" class="octicon octicon-git-pull-request color-fg-subtle mr-2">
                                    <path d="M16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-14.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.75 3a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 3Zm0 14.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 17.5Zm14.5 0a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path><path d="M13.405 1.72a.75.75 0 0 1 0 1.06L12.185 4h4.065A3.75 3.75 0 0 1 20 7.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM4.75 7.25A.75.75 0 0 1 5.5 8v8A.75.75 0 0 1 4 16V8a.75.75 0 0 1 .75-.75Z"></path>
                                </svg>

                                <div>
                                <p className='text-[13px] text-white mb-2 font-semibold'>Follow this exercise to try the GitHub flow</p>
                                    <p className='text-[13px] text-[#8b949e] tracking-wide' >GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.</p>
                                    <button className='my-3 border-[1px] border-primaryBorder bg-[#2d3643] hover:bg-[#465262] rounded-md text-white text-[12px] px-3 py-[2px] hover:border-white'>
                                        <a href="/">
                                            Try the Github flow
                                        </a>
                                    </button>
                                </div>
                            
                        </div>

                    </div>
                </div>

                {/* posts  */}
                <div className='flex flex-col gap-3 mt-4'>
                    <HomePost/>
                    
                    <button className='w-full flex items-center bg-[#161B22] text-[14px] text-blue-600 font-semibold justify-center py-2 border-[1px] border-zinc-700 mt-4 rounded-md'>
                        More
                    </button>
                </div>

                <Footer/>

            </div>
        </section>
    )
}

export default HomeMiddle