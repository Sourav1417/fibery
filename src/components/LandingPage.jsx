import React from 'react';
import logoStar from '../assets/logoStar.png';
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import nocode from '../assets/noCode.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import arrow from '../assets/arrow.svg';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const LandingPage = () => {
	return (
        <div className='wrapper overflow-x-hidden'>
            <section className=' w-[1500px] mx-auto h-20 flex flex-col justify-center m-header'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center justify-center gap-14'>
                        <div className='flex flex-row justify-center items-end gap-1'>
                            <div className=' font-semibold text-4xl m-fibery-logo'>Fibery</div>
                            <div className=''>
                                <img src={logoStar} alt='logoStar' className='h-5 w-5 mb-3' />
                            </div>
                            <div className=' italic font-mono font-extrabold text-sm text-[#35d7c1]'>+AI Now!</div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:cursor-pointer max-sm:hidden'>
                            <div className=' font-semibold text-lg text-gray-600'>Solutions</div>
                            <GoDotFill className='text-[#35d7c1] mb-4 h-3 w-3' />
                            <FaAngleDown className='w-5 h-5' />
                        </div>
                        <div className='flex flex-row justify-center items-center hover:cursor-pointer gap-2 max-sm:hidden'>
                            <div className=' font-semibold text-lg text-gray-600'>Product</div>
                            <FaAngleDown className='w-5 h-5' />
                        </div>
                        <div className='flex flex-row justify-center items-center hover:cursor-pointer gap-2 max-sm:hidden'>
                            <div className=' font-semibold text-lg text-gray-600'>Resources</div>
                            <FaAngleDown className='w-5 h-5' />
                        </div>
                        <div className='flex flex-row justify-center items-center hover:cursor-pointer max-sm:hidden'>
                            <div className=' font-semibold text-lg text-gray-600'>Pricing</div>
                        </div>
                        <div className='hover:cursor-pointer max-sm:hidden'>
                            <HiDotsHorizontal className='h-5 w-5 text-gray-600' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-14 '>
                        <div className='flex flex-row justify-center items-center hover:cursor-pointer max-sm:hidden'>
                            <div className=' font-semibold text-lg text-gray-600'>Log in</div>
                        </div>
                        <div className=' border-gray-900 border-[3px] rounded hover:cursor-pointer max-sm:hidden'>
                            <div className='text-gray-900 px-4 py-1 text-lg font-semibold'>Get a demo</div>
                        </div>
                        <div className=' border-gray-900 border-2 bg-gray-900 rounded hover:cursor-pointer max-sm:hidden'>
                            <div className='text-white py-1 px-4 text-lg font-semibold'>Sign up</div>
                        </div>
                        <div className='sm:hidden max-sm:visible'>
                            <GiHamburgerMenu className='cursor-pointer text-gray-800' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-20 max-sm:w-full'>
                <div className='flex flex-col justify-center items-start gap-7'>
                    <div className=' text-8xl font-mono text-gray-800 tracking-[-0.4rem] m-build-work'>
                        Build your own <br/> work & knowledge hub
                    </div>
                    <div className='text-3xl text-gray-800 font-normal font-sans tracking-normal m-header-small-text w-[47rem]'>
                        If you have outgrown Jira, Notion, Airtable, and ClickUp
                        ─ and are ready to replace them
                    </div>
                    <div className='flex flex-row justify-between w-full items-center m-signup-section'>
                        <div className='flex flex-col justify-center items-start gap-4 m-signup'>
                            <div className='flex flex-row gap-3 m-email-signup'>
                                <input type='text' placeholder='Enter your work email' className='text-lg text-gray-600 pl-3 border-b-2 border-gray-800 w-72 m-email-input ' />
                                <div className=' h-full p-2 text-center w-36 rounded-sm bg-[#35d7c1] text-white text-base font-semibold cursor-pointer hover:bg-[#35978a] max-sm:inline-flex max-sm:justify-center max-sm:w-full'>Sign up free</div>
                            </div>
                            <div className=' font-mono text-sm font-semibold text-gray-500 tracking-wide italic uppercase max-sm:text-sm max-sm:text-start'>keep work and life separate by using your work email</div>
                        </div>
                        <div>
                            <img src={nocode} alt='nocode' className=' w-28 h-36' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-end mt-14 max-sm:hidden'>
                <div className='icon rounded-full h-14 w-14 mr-5 flex justify-center items-center cursor-pointer hover:bg-[#35766e] transition-all ease-out '>
                    <svg className='' data-v-318e675f="" focusable="false" aria-hidden="true" viewBox="0 0 28 32" width="18" height="21"><path data-v-318e675f="" fill="white" d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592
                        0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0
                        27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333
                        C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333
                        13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428
                        4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415
                        C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667
                        13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726
                        24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
                    </svg>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-6 max-sm:w-full'>
                <div className='flex flex-row justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center  max-sm:ml-[2.3rem]'>
                    <div className='text-gray-400 font-sans text-2xl font-semibold max-sm:text-lg'>Be among 300+ cool companies</div>
                    <div className='flex flex-row gap-1 justify-center items-center text-[#35d7c1]'>
                        <div className='font-mono font-extrabold uppercase italic text-sm max-sm:text-[10px]'>Check out all customer stories</div>
                        <div><FaArrowRightLong className='h-2 w-2' /></div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center mt-14 flex-wrap max-sm:w-80 max-sm:mx-auto max-sm:gap-8 max-sm:justify-between'>
                    <div>
                        <img src={require('../assets/lemonade.png')} alt='Lemonade' className='h-9 w-28' />
                    </div>
                    <div>
                        <img src={require('../assets/kontur.png')} alt='kontur' className='h-8 w-24' />
                    </div>
                    <div>
                        <img src={require('../assets/nzx.png')} alt='nzx' className='h-10 w-28' />
                    </div>
                    <div>
                        <img src={require('../assets/stone.png')} alt='stone' className='h-10 w-28' />
                    </div>
                    <div>
                        <img src={require('../assets/opt.png')} alt='opt' className='h-10 w-20' />
                    </div>
                    <div>
                        <img src={require('../assets/plex.png')} alt='plex' className='h-10 w-24' />
                    </div>
                </div>
            </section>
            <section className=' mt-60 w-[1200px] mx-auto max-sm:w-full max-sm:mt-32 '>
                <div className=' flex flex-row justify-between items-start gap-10 max-sm:flex max-sm:flex-col-reverse max-sm:items-start max-sm:justify-center max-sm:w-[22rem] max-sm:mx-auto'>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <div className='text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem]'>
                            Bring work and knowledge under the same roof
                        </div>
                        <div className=' text-xl font-sans text-gray-700 font-semibold w-[42rem] max-sm:text-base max-sm:w-[22rem] max-sm:text-gray-400'>
                            One tool for documents, a second tool for task management and another for diagrams. The end result?
                            <div className='inline-flex items-center'>
                                <img src={require('../assets/siren.png')} alt='siren' className='h-4 w-7' />
                                <div> Poor connectivity</div>
                            </div>
                        </div>
                        <div className='text-xl font-sans text-gray-700 font-semibold w-[42rem] max-sm:text-base max-sm:w-[22rem] max-sm:text-gray-400'>
                            <div>Connect Structured data (e.g. <span className='font-bold text-gray-800'>tables, kanban boards</span>) with unstructured
                            data (e.g. <span className='font-bold text-gray-800'>documents</span>) and always stay in context</div>
                        </div>
                    </div>
                    <div>
                        <img src={require('../assets/handshake.png')} alt='handshake' className='max-sm:h-20 max-sm:w-20' />
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-20 max-sm:w-[22rem]'>
                <img src={require('../assets/features.png')} alt='features' className='w-full h-[43rem] max-sm:w-[22rem] max-sm:mx-auto max-sm:h-52' />
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans max-sm:text-4xl max-sm:pl-0'>Radically honest warning:</div>
                <div className=' mt-20'>
                    <div className='flex flex-row justify-between items-end max-sm:flex max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center '>
                        <div className=' bg-pink-50 rounded-[35px] max-sm:w-[22rem]'>
                            <div className='pr-28 pl-16 py-10 flex flex-col justify-center items-start max-sm:pl-0 max-sm:pr-0'>
                                <div className='sm:hidden max-sm:visible max-sm:mx-auto max-sm:pb-3'>
                                    <img src={require('../assets/hand.png')} alt='handsup' />
                                </div>
                                <div className='text-4xl text-gray-800 w-[60rem] font-sans max-sm:text-2xl max-sm:w-[16rem] max-sm:mx-auto'>
                                    <div>Do you have the permission (or forgiveness) from your team
                                    to replace some of their tools?</div>
                                </div>
                                <div className='flex flex-row items-center gap-6 mt-10 max-sm:mx-auto'>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>👍</div>
                                            <div className='font-semibold'>235</div>
                                        </div>
                                    </div>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>🙀</div>
                                            <div className='font-semibold'>194</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-sm:hidden'>
                            <img src={require('../assets/hand.png')} alt='handsup' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 relative flex justify-end max-sm:w-[22rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans max-sm:pl-0'>Some real feedback:</div>
                    <img src={require('../assets/backside.jpg')} alt='group' className=' grayscale opacity-40 h-[28rem] w-2/3 mt-28 rounded-[35px] max-sm:w-[22rem] max-sm:h-[47rem] max-sm:object-cover max-sm:mt-16' />
                    <div className='absolute left-16 text-4xl mt-36 text-gray-800 font-semibold font-sans leading-relaxed max-sm:text-2xl max-sm:font-normal max-sm:mt-0 max-sm:left-10 max-sm:w-[17rem] max-sm:mx-auto max-sm:top-36'>
                        "We were finally able to have product planning, high-level executive views, marketing initiatives, content calenders, and async meeting orrganization all in one place while all referencing the same underlying data."
                    </div>
                    <div className='absolute left-16 mt-[26rem] w-full flex flex-row justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:left-10 max-sm:w-[22rem] max-sm:mx-auto max-sm:gap-4 max-sm:top-32'>
                        <div className='flex flex-row items-center justify-center gap-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-4'>
                            <img src={require('../assets/artist6.jpeg')} alt='user' className='w-16 h-16 rounded-full max-sm:w-12 max-sm:h-12' />
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <div className='text-xl font-bold text-gray-800 max-sm:text-base'>Jason Williams</div>
                                <div className='text-xl tracking-wide text-gray-500 max-sm:text-base'>Director, Product & Growth</div>
                            </div>
                            <div>
                                <img src={require('../assets/plex.png')} alt='c2' className='' />
                            </div>
                        </div>
                        <div className='bg-gray-800 px-5 py-3 rounded text-2xl text-white font-semibold mr-32 cursor-pointer max-sm:text-sm'>Check out customer story</div>
                    </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-start max-sm:flex max-sm:flex-col-reverse max-sm:items-start max-sm:justify-center max-sm:gap-4'>
                    <div className='flex flex-col justify-center items-start gap-9 ml-16 max-sm:ml-0 '>
                        <div className='text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem] max-sm:w-[17rem]'>
                            Flexibility to work<br /> your own way
                        </div>
                        <div className='text-xl font-sans text-gray-700 font-semibold max-sm:font-normal max-sm:text-gray-500'>
                            <div>Stop using workflows & terminologies  defined by someone else... not</div>
                            <div>everything is an "issue" or a "task".</div>
                        </div>
                    </div>
                    <div>
                        <img src={require('../assets/food.png')} alt='globe' className='max-sm:h-20 max-sm:w-20'/>
                    </div>
                </div>
            </section>
            <section className='mt-20 max-sm:w-full max-sm:mx-auto '>
                <div className='flex items-center justify-end max-sm:justify-center'>
                    <div className='bg-gray-100 w-[1400px] rounded-l-xl max-sm:w-full'>
                        <div className=' flex flex-row justify-between items-center pt-20 pb-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:w-[22rem] max-sm:mx-auto max-sm:justify-center max-sm:pt-10'>
                            <div className='flex flex-col items-start justify-center pl-16 gap-1 max-sm:pl-0'>
                                <div className='text-2xl font-sans text-gray-700 font-semibold w-[23rem] leading-9 max-sm:text-base max-sm:font-normal max-sm:w-[22rem] max-sm:mx-auto '>Map your processes the way you want by using <span className='font-bold bg-[#caf9f3] px-1 rounded'>custom fields </span><span>, </span><span className='bg-[#35d7c1] text-white font-bold px-1 rounded '>custom database</span> and <span className='font-bold bg-[#caf9f3] px-1 rounded'>custom relations</span>.</div>
                            </div>
                            <div>
                                <img src={require('../assets/management.png')} alt='feature_list' className='h-[40rem] w-[50rem] bg-white border border-gray-200 rounded-l-2xl max-sm:h-40 max-sm:rounded-2xl max-sm:mt-10  ' />
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-4 pl-16 pb-10 max-sm:pl-0 max-sm:w-[22rem] max-sm:mx-auto'>
                            <IoIosArrowDropup className='h-7 w-7 text-gray-400' />
                            <IoIosArrowDropdown className='h-7 w-7 text-gray-400' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans max-sm:pl-0'>Radically honest warning:</div>
                <div className=' mt-20'>
                    <div className='flex flex-row justify-between items-end max-sm:flex max-sm:flex-col-reverse max-sm:items-start max-sm:justify-center'>
                        <div className=' bg-purple-50 rounded-[35px] max-sm:w-[22rem]'>
                            <div className='pr-28 pl-16 py-10 flex flex-col justify-center items-start max-sm:pl-0 max-sm:pr-0'>
                                <div className='sm:hidden max-sm:visible max-sm:mx-auto max-sm:pb-3'>
                                    <img src={require('../assets/hand.png')} alt='handsup' />
                                </div>
                                <div className='text-4xl text-gray-800 w-[60rem] font-sans max-sm:text-2xl max-sm:w-[16rem] max-sm:mx-auto'>
                                    We give you the basic building blocks: relation databases, visualizations, automation rules, rich-text editor, etc. but you need to have an idea of how your team operates.
                                </div>
                                <div className='flex flex-row items-center gap-6 mt-10 max-sm:mx-auto'>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>🤌</div>
                                            <div className='font-semibold'>77</div>
                                        </div>
                                    </div>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>🤔</div>
                                            <div className='font-semibold'>42</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-sm:hidden'>
                            <img src={require('../assets/hand.png')} alt='handsup' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 relative flex justify-end max-sm:w-[22rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans max-sm:pl-0'>Some real feedback:</div>
                <div className='bg-gray-100 h-[28rem] w-2/3 mt-28 rounded-[35px] max-sm:w-[22rem] max-sm:h-[47rem] max-sm:object-cover max-sm:mt-16'>
                    <div className='absolute left-16 mt-14 text-4xl text-gray-800 font-semibold font-sans leading-relaxed max-sm:text-2xl max-sm:font-normal max-sm:mt-0 max-sm:left-10 max-sm:w-[17rem] max-sm:mx-auto max-sm:top-36'>
                        "I have tried Code, Notion, and a bunch of other similar tools, but the problem always was that it felt like a system built by others. With Fibery, it feels like the opposite. I build the system, and it just provides an interface to work with my data."
                    </div>
                    <div className='absolute left-16 mt-[21rem] w-full flex flex-row justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:left-10 max-sm:w-[22rem] max-sm:mx-auto max-sm:gap-4 max-sm:top-52'>
                        <div className='flex flex-row items-center justify-center gap-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-4'>
                            <img src={require('../assets/artist6.jpeg')} alt='user' className='w-16 h-16 rounded-full' />
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <div className='text-xl font-bold text-gray-800 max-sm:text-base'>Dax</div>
                                <div className='text-xl tracking-wide text-gray-500 max-sm:text-base'>Co-founder at QuadSpinner</div>
                            </div>
                            <div>
                                <img src={require('../assets/c2.png')} alt='c2' className='' />
                            </div>
                        </div>
                        <div className='bg-gray-800 px-5 py-3 rounded text-2xl text-white font-bold mr-32 cursor-pointer max-sm:text-sm'>See full review</div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-start max-sm:flex max-sm:flex-col-reverse max-sm:items-start max-sm:justify-center max-sm:gap-4'>
                    <div className='flex flex-col justify-center items-start gap-9 ml-16 max-sm:ml-0 '>
                        <div className='text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem] max-sm:w-[19rem]'>
                            Extract insights from all kinds of data
                        </div>
                        <div className='text-xl font-sans text-gray-700 font-semibold max-sm:font-normal max-sm:text-gray-500'>
                            <div>Charts & reports are weak in almost all work management tools. If they're</div>
                            <div>available at all.</div>
                        </div>
                    </div>
                    <div>
                        <img src={require('../assets/globe.png')} alt='globe' className='max-sm:h-20 max-sm:w-20'/>
                    </div>
                </div>
            </section>
            <section className='mt-20 max-sm:w-full max-sm:mx-auto '>
                <div className='flex items-center justify-end max-sm:justify-center'>
                    <div className='bg-gray-100 w-[1400px] rounded-l-xl max-sm:w-full'>
                        <div className=' flex flex-row justify-between items-center pt-20 pb-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:w-[22rem] max-sm:mx-auto max-sm:justify-center max-sm:pt-10'>
                            <div className='flex flex-col items-start justify-center pl-16 gap-1 max-sm:pl-0'>
                                <div className='text-2xl font-sans text-gray-700 font-semibold max-sm:text-base max-sm:font-normal max-sm:w-[20rem] max-sm:mx-auto'>
                                    Fibery has <br className='max-sm:hidden' /><span className='text-2xl font-sans text-gray-800 font-bold bg-[#caf9f3] px-1 rounded max-sm:text-base max-sm:text-gray-600'>powerful Tableau-like reports</span><br />
                                    <span>─ in the <span className='bg-[#35d7c1] text-white font-bold px-1 rounded '>same context</span> where the </span><br className='max-sm:hidden' />
                                    <span>rest of your work and knowledge </span><br className='max-sm:hidden' />
                                    <span>lives. </span>
                                </div>
                            </div>
                            <div>
                                <img src={require('../assets/feature_list.png')} alt='feature_list' className='h-[40rem] w-[50rem] max-sm:h-40 max-sm:rounded-2xl max-sm:mt-10 ' />
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-4 pl-16 pb-10 max-sm:pl-0 max-sm:w-[22rem] max-sm:mx-auto'>
                            <IoIosArrowDropup className='h-7 w-7 text-gray-400' />
                            <IoIosArrowDropdown className='h-7 w-7 text-gray-400' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans  max-sm:pl-0'>Radically honest warning:</div>
                <div className=' mt-20'>
                    <div className='flex flex-row justify-between items-end max-sm:flex max-sm:flex-col-reverse max-sm:items-start max-sm:justify-center'>
                        <div className=' bg-green-50 rounded-[35px] max-sm:w-[22rem]'>
                            <div className='pr-28 pl-16 py-10 flex flex-col justify-center items-start max-sm:pl-0 max-sm:pr-0'>
                                <div className='sm:hidden max-sm:visible max-sm:mx-auto max-sm:pb-3'>
                                    <img src={require('../assets/hand.png')} alt='handsup' />
                                </div>
                                <div className='text-4xl text-gray-800 font-semibold font-sans w-[60rem] max-sm:text-2xl max-sm:w-[16rem] max-sm:mx-auto'>
                                    <div>We won't teach you data analysis; so if you haven't done it
                                    before, you'll need to invest some time & effort.</div>
                                </div>
                                <div className='flex flex-row items-center gap-6 mt-10 max-sm:mx-auto'>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>👍</div>
                                            <div className='font-semibold'>61</div>
                                        </div>
                                    </div>
                                    <div className='bg-white shadow-lg rounded-xl'>
                                        <div className='p-3 px-6 flex flex-row justify-center items-center gap-2 '>
                                            <div className=''>😿</div>
                                            <div className='font-semibold'>43</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-sm:hidden'>
                            <img src={require('../assets/hand.png')} alt='handsup' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 relative flex justify-end max-sm:w-[22rem] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <div className=' pl-16 text-4xl font-bold text-gray-800 font-sans max-sm:pl-0'>Some real feedback:</div>
                <img src={require('../assets/backside.jpg')} alt='group' className=' grayscale opacity-40 h-[28rem] w-2/3 mt-28 rounded-[35px] max-sm:w-[22rem] max-sm:h-[47rem] max-sm:object-cover max-sm:mt-16' />
                <div className='absolute left-16 text-4xl mt-36 text-gray-800 font-semibold font-sans leading-relaxed max-sm:text-2xl max-sm:font-normal max-sm:mt-0 max-sm:left-10 max-sm:w-[17rem] max-sm:mx-auto max-sm:top-36'>
                    "We were finally able to have product planning, high-level executive views, marketing initiatives, content calenders, and async meeting orrganization all in one place while all referencing the same underlying data."
                </div>
                <div className='absolute left-16 mt-[26rem] w-full flex flex-row justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:left-10 max-sm:w-[22rem] max-sm:mx-auto max-sm:gap-4 max-sm:top-28'>
                    <div className='flex flex-row items-center justify-center gap-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-4'>
                        <img src={require('../assets/artist6.jpeg')} alt='user' className='w-16 h-16 rounded-full' />
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <div className='text-xl font-bold text-gray-800 max-sm:text-base'>Anton Oparienko</div>
                            <div className='text-xl tracking-wide text-gray-500 max-sm:text-base'>COO</div>
                        </div>
                        <div>
                            <img src={require('../assets/star.png')} alt='c2' className='' />
                        </div>
                    </div>
                    <div className='bg-gray-800 px-5 py-3 rounded text-2xl text-white font-bold mr-32 cursor-pointer max-sm:text-sm'>Check out customer story</div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col justify-center items-start gap-9 ml-16 max-sm:ml-0'>
                        <div className='text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem] max-sm:w-[17rem]'>
                            How Fibery helps you...
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-20 max-sm:w-full max-sm:mx-auto'>
                <div className='flex items-center justify-end max-sm:justify-center'>
                    <div className='bg-gray-100 w-[1400px] rounded-l-xl max-sm:w-full'>
                        <div className=' flex flex-row justify-between items-center pt-14 pb-7 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:w-[22rem] max-sm:mx-auto max-sm:justify-center max-sm:pt-10'>
                            <div className='flex flex-col items-start justify-center gap-10 max-sm:pl-0 max-sm:gap-1'>
                                <div className='flex flex-col items-start justify-center pl-16 opacity-30 max-sm:hidden'>
                                    <div className='text-2xl font-sans text-gray-700 font-bold pb-4'>Product managers</div>
                                    <div className='text-lg font-sans text-gray-800 font-semibold'>Always remain on the top of "Why are we</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>building that?" type of questions.</div>
                                </div>
                                <div className='flex flex-col items-start justify-center pl-16 max-sm:pl-0'>
                                    <div className='flex flex-row justify-start items-center gap-3 pb-4'>
                                        <div className='text-2xl font-sans text-gray-800 font-bold'>Founders</div>
                                        <div>
                                            <FaRegCirclePlay className='h-6 w-6' />
                                        </div>
                                    </div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>Breakdown silos between your</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>departments. Bridge the gap between</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>strategy and execution. Validate ideas,</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>research your market, and get stuff done.</div>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1 opacity-30 pl-16 max-sm:hidden'>
                                    <div className='text-2xl font-sans text-gray-700 font-bold pb-4'>Operations</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>Build processes that are specific to your</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>company's workflow.</div>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1 opacity-30 pl-16 max-sm:hidden'>
                                    <div className='text-2xl font-sans text-gray-700 font-bold pb-4'>Software engineering</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>Collaberate on backlogs, sprints,</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>releases, and development wiki ─ all in</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>one place. Replace most of your stack</div>
                                    <div className='text-lg font-sans text-gray-700 font-semibold'>with a single tool.</div>
                                </div>
                            </div>
                            <div>
                                <img src={require('../assets/kanban.png')} alt='feature_list' className='h-[45rem] w-[55rem] max-sm:h-40 max-sm:rounded-2xl max-sm:mt-10 ' />
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-4 pl-16 pb-7 max-sm:pl-0 max-sm:w-[22rem] max-sm:mx-auto'>
                            <IoIosArrowDropup className='h-7 w-7 text-gray-400' />
                            <IoIosArrowDropdown className='h-7 w-7 text-gray-400' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col justify-center items-start gap-9 ml-16 max-sm:ml-0'>
                        <div className='text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem] max-sm:w-[17rem]'>
                            How you can make it happen
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1170px] mx-auto mt-32 max-sm:w-[22rem]'>
                <div className='flex flex-row gap-14 justify-center items-start max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center'>
                    <div className='flex flex-col gap-5 justify-center items-start w-1/4 max-sm:w-[20rem]'>
                        <div>
                            <img src={require('../assets/one.png')} alt='one' className='max-sm:h-24 max-sm:w-24' />
                        </div>
                        <div className='font-bold text-gray-800 text-3xl font-sans max-sm:text-2xl'>Signup for free</div>
                        <div className='text-lg text-gray-700 font-sans max-sm:text-base'>Start using AI space creation and / or templates to test the waters.</div>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-start w-1/4 max-sm:w-[20rem]'>
                        <div>
                            <img src={require('../assets/two.png')} alt='one' className='max-sm:h-24 max-sm:w-24' />
                        </div>
                        <div className='font-bold text-gray-800 text-3xl font-sans max-sm:text-2xl'>Build your workspace</div>
                        <div className='text-lg text-gray-700 font-sans max-sm:text-base'>Start integrating any data from existing tools and map your company's processes.</div>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-start w-1/4 max-sm:w-[20rem]'>
                        <div>
                            <img src={require('../assets/three.png')} alt='one' className='max-sm:h-24 max-sm:w-24' />
                        </div>
                        <div className='font-bold text-gray-800 text-3xl font-sans max-sm:text-2xl'>Share it with your team</div>
                        <div className='text-lg text-gray-700 font-sans max-sm:text-base'>Don't keep Fibery to yourself. Be the hero your company needs and not the one they deserve!</div>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-start w-1/4 max-sm:w-[20rem]'>
                        <div>
                            <img src={require('../assets/four.png')} alt='one' className='max-sm:h-24 max-sm:w-28' />
                        </div>
                        <div className='font-bold text-gray-800 text-3xl font-sans max-sm:text-2xl'>Enjoy the moment that you dared to be different</div>
                        <div className='text-lg text-gray-700 font-sans max-sm:text-base'>Humans are pack animals - conformity is in our DNA. But you dared to be different by not choosing an Atlassian product. Well done!</div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-col justify-between items-start gap-7 ml-16 max-sm:ml-0'>
                    <div className=' inline-flex justify-center items-start gap-5 text-7xl font-mono text-gray-800 tracking-tighter max-sm:text-[2rem] max-sm:w-[15rem] max-sm:inline-block max-sm:leading-[3rem]'>
                        <span>Signup for free</span>
                        <span className=' italic font-extrabold text-base text-[#35d7c1] uppercase tracking-wide max-sm:text-[10px] max-sm:inline-flex max-sm:items-start max-sm:gap-1'><span className='text-3xl max-sm:text-xl'>*</span> no credit card required</span>
                    </div>
                    <div className='text-2xl font-semibold text-gray-700 font-sans max-sm:text-lg max-sm:font-normal'>Start building your own work and knowledge management hub</div>
                    <div className='bg-gray-800 px-8 py-3 mt-4 rounded text-2xl text-white font-bold mr-32 cursor-pointer max-sm:text-xl'>Sign Up</div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:mt-28 max-sm:w-[22rem]'>
                <div className=' text-3xl font-semibold text-gray-800 font-sans italic max-sm:w-[20rem] max-sm:leading-[3rem] '>All this content is for you, not for SEO (doesn't work anyway)</div>
                <div className='flex flex-row justify-between gap-14 items-center mt-20 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-center'>
                    <div>
                        <img src={require('../assets/rice.png')} alt='rice' className='h-[20rem] w-[42rem] max-sm:h-60' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-6 w-[36rem] max-sm:w-[22rem]'>
                        <div className='text-3xl text-gray-700 font-bold font-sans max-sm:text-2xl'>RICE Framework & Scoring: A Guide to Successful Prioritization</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans max-sm:text-gray-500 max-sm:font-normal'>There are many prioritization frameworks out there, and RICE is probably one of the more popular kids on the block. We'll show you how to calculate it and whether it's useful in your day-to-day job as a PM.</div>
                        <div className='flex flex-row justify-center items-center gap-4 pt-4 max-sm:flex-col max-sm:items-start'>
                            <div>
                                <img src={require('../assets/artist6.jpeg')} alt='person' className='w-16 h-16 rounded-full' />
                            </div>
                            <div>
                                <p className='font-semibold text-lg text-gray-700 max-sm:font-normal'>Product Management ─ November 22, 2023 / <span className='text-gray-400'>14 min read</span></p>
                                <p className='font-bold text-gray-700 text-lg max-sm:font-normal'>Peter Levary, <span className='text-gray-400 font-normal'>Everything content at Fibery</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='mt-20 w-[1300px] border border-gray-200 mx-auto text-gray-400 max-sm:w-[22rem]' />
            <section className='w-[1300px] mx-auto mt-20 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-center items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:justify-center'>
                    <div className='flex flex-row justify-center items-start gap-5 w-64'>
                        <div>
                            <img src={require('../assets/sloth.png')} alt='sloth' className='' />
                        </div>
                        <div>
                            <p className='text-2xl text-gray-700 font-semibold font-sans'>Radically honest blog</p>
                            <p className='text-lg text-sky-400 font-bold font-sans'>fibery.io/blog</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-start gap-5 w-64'>
                        <div>
                            <img src={require('../assets/moon.png')} alt='sloth' className='' />
                        </div>
                        <div>
                            <p className='text-2xl text-gray-700 font-semibold font-sans'>Fibery community</p>
                            <p className='text-lg text-sky-400 font-bold font-sans'>community.fibery.io</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-start gap-5 w-64'>
                        <div>
                            <img src={require('../assets/twitter.png')} alt='sloth' className='' />
                        </div>
                        <div>
                            <p className='text-2xl text-gray-700 font-semibold font-sans'>Fibery on twitter</p>
                            <p className='text-lg text-sky-400 font-bold font-sans'>@fibery_io</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-start gap-5 w-64'>
                        <div>
                            <img src={require('../assets/youtube.png')} alt='sloth' className='' />
                        </div>
                        <div>
                            <p className='text-2xl text-gray-700 font-semibold font-sans'>Fibery on youtube</p>
                            <p className='text-lg text-sky-400 font-bold font-sans'>Ring the bell!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='text-3xl font-semibold text-gray-800 font-sans italic'>
                    Inspired by inventors.
                </div>
            </section>
            <section className='max-w-full overflow-x-hidden relative mt-20'>
                <div className='flex flex-row justify-start items-center relative'>
                    <img src={require('../assets/invent1.avif')} alt='inventor' className='h-40 w-72' />
                    <img src={require('../assets/invent2.avif')} alt='inventor' className='h-40' />
                    <img src={require('../assets/invent1.avif')} alt='inventor' className='h-40 w-72' />
                    <img src={require('../assets/invent2.avif')} alt='inventor' className='h-40' />
                    <img src={require('../assets/invent1.avif')} alt='inventor' className='h-40 w-72' />
                    <img src={require('../assets/invent2.avif')} alt='inventor' className='h-40' />
                    <img src={require('../assets/invent1.avif')} alt='inventor' className='h-40 w-72' />
                    <img src={require('../assets/invent2.avif')} alt='inventor' className='h-40' />
                    <img src={require('../assets/invent1.avif')} alt='inventor' className='h-40 w-72' />
                    <div className='absolute right-16 max-sm:right-4'>
                        <img src={arrow} alt='arrow' className='bg-white border-2 border-[#35d7c1] rounded-full p-2' />
                    </div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-40 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-start gap-20 max-sm:flex-col max-sm:items-start max-sm:justify-center'>
                    <div className='flex flex-col justify-center items-start gap-28 max-sm:gap-16'>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='flex flex-row justify-center items-end gap-1 pb-4'>
                                <div className=' font-semibold text-3xl'>Fibery</div>
                                <div className=''>
                                    <img src={logoStar} alt='logoStar' className='h-5 w-5 mb-3' />
                                </div>
                                <div className=' italic font-mono font-extrabold text-sm text-[#35d7c1]'>+AI Now!</div>
                            </div>
                            <div className='text-lg text-gray-700 font-sans font-semibold'>Work & Knowledge</div>
                            <div className='text-lg text-gray-700 font-sans font-semibold'>management hub</div>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-3'>
                            <div className='flex flex-row justify-start items-center gap-1'>
                                <img src={require('../assets/rating.png')} alt='star' className='h-4 w-4' />
                                <img src={require('../assets/rating.png')} alt='star' className='h-4 w-4' />
                                <img src={require('../assets/rating.png')} alt='star' className='h-4 w-4' />
                                <img src={require('../assets/rating.png')} alt='star' className='h-4 w-4' />
                                <img src={require('../assets/rating.png')} alt='star' className='h-4 w-4' />
                            </div>
                            <div className='text-lg text-gray-700 font-sans font-semibold'>Rated 4.8 on</div>
                            <div className='text-lg text-gray-700 font-sans font-semibold'>G2 and Capterra</div>
                            <div className='flex flow-row justify-start items-center gap-2'>
                                <img src={require('../assets/c2.png')} alt='C2' className=' h-9 w-9' />
                                <img src={require('../assets/play.png')} alt='C2' className=' h-9 w-9' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <div className=' text-lg text-gray-800 font-bold font-sans pb-2'>Solutions</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>No code</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Product management</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>User research</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Startup</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Sofftware development</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Digital agency</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans pt-9'>Template Library</div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <div className=' text-lg text-gray-800 font-bold font-sans pb-2'>Product</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Features</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Fibery AI <div className='bg-gray-800 text-gray-200 text-sm px-2 inline-flex justify-center items-center rounded-full'>new</div></div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Pricing</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Fibery vs. X</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Customer stories</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Integrations</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Changelog</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Partners program</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Concierge program</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Startup program</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Anxiety <div className='border border-gray-800 text-gray-700 text-sm px-2 inline-flex justify-center items-center rounded-full'>fun</div></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <div className=' text-lg text-gray-800 font-bold font-sans pb-2'>Resources</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>User Guide</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Blog</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Community</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Webminars & Tutorials</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>API</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Status</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Security & Privacy</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Cookie settings</div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <div className=' text-lg text-gray-800 font-bold font-sans pb-2'>Team</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>About us</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Open startup</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Startup diary</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Careers</div>
                        <div className='text-lg text-gray-700 font-semibold font-sans'>Remote</div>
                    </div>
                </div>
            </section>
            <section className='w-[1000px] mx-auto mt-20 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-center border-b-[3px] border-gray-800 py-3 max-sm:border-gray-500'>
                    <div className='text-2xl text-gray-500 font-sans font-semibold ml-2 max-sm:text-sm max-sm:ml-0'>Search for a template, space or integration...</div>
                    <div><IoSearchSharp className='text-gray-800 h-6 w-6 mr-3 max-sm:text-gray-500 max-sm:mr-1 max-sm:h-5 max-sm:w-5' /></div>
                </div>
            </section>
            <section className='w-[1300px] mx-auto mt-20 mb-20 max-sm:w-[22rem]'>
                <div className='flex flex-row justify-between items-center max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-12'>
                    <div className='flex flex-row justify-between items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-0'>
                        <div className='flex flex-row justify-between items-center gap-2'>
                            <FaRegCopyright className='text-gray-700 h-4 w-4 max-sm:h-3 max-sm:w-3' />
                            <div className='text-gray-700 text-2xl font-sans font-semibold max-sm:font-normal max-sm:text-xl'>Fibery Limited</div>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-10'>
                            <div className='text-gray-400 text-base font-semibold font-sans max-sm:font-normal'>Terms</div>
                            <div className='text-gray-400 text-base font-semibold font-sans max-sm:font-normal'>Privacy Policy</div>
                            <div className='text-gray-400 text-base font-semibold font-sans max-sm:font-normal'>Cookie Policy</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-8'>
                        <HiMail className='h-7 w-8 text-gray-800  max-sm:h-6 max-sm:w-7' />
                        <FaTwitter className='h-7 w-8 text-gray-800  max-sm:h-6 max-sm:w-7' />
                        <FaYoutube className='h-7 w-8 text-gray-800 max-sm:h-6 max-sm:w-7' />
                        <FaLinkedinIn className='h-7 w-8 text-gray-800  max-sm:h-6 max-sm:w-7' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;
