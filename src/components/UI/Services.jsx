import React from 'react'
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiImg from '../../assets/images/design.png';
import appImg from '../../assets/images/apps.png'
const services = () => {
  return (
    <section className="section" id="services">
        <div className="container lg:pt-5">
        <div className="text-center">
            <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do I do</h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">As a seasoned professional with extensive experience in web development, digital marketing, and lead generation, I am well-versed in a wide range of technologies, frameworks, and tools.

In the realm of frontend development, I am proficient in popular frameworks such as React.js and Vue.js, leveraging their powerful features to create engaging and dynamic web applications. My expertise extends to efficient utilization of the Elementor and WooCommerce plugins, which I have successfully deployed in various projects.</p>
            </div> 
             <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* Vertical Line */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 tranform-translate -x-1/2"></div>
                        {/* Card left */}
                        <div className="mt-6 sm:mt-0 sm-mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">React.js</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font[500] leading-7'>I am proficient in utilizing the widely-used frontend development framework, react.js, for diverse projects. Moreover, I continuously enhance my portfolio by incorporating new projects developed in react.js every few days. Notably, this portfolio website itself is built in react.js and its source code can be accessed on my Github repository.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <img src={frontendImg} alt=""/>
                                </div>
                            </div>
                        </div>
                         {/* Card right */}
                         <div className="mt-6 sm:mt-0 sm-mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Wordpress</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font[500] leading-7'>I possess extensive experience in utilizing the versatile CMS framework, WordPress, to design and develop diverse websites for my clientele sourced through my freelance endeavors. I specialize in leveraging powerful plugins such as Elementor and WooCommerce, among others, to create engaging and functional websites that meet the unique needs of my clients.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <img src={backendImg} alt=""/>
                                </div>
                            </div>
                        </div> 
                        {/* Card left */}
                        <div className="mt-6 sm:mt-0 sm-mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-left' data-aos-duration='1300' data-aos-delay='50' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Vue.js</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font[500] leading-7'>My technical expertise extends to the widely used Vue.js framework, which I have employed to develop a furniture website in the past. My proficiency in Vue.js includes a deep understanding of its components, directives, and reactivity features, enabling me to create efficient and dynamic web applications that meet the specific requirements of my clients.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <img src={uiImg} alt=""/>
                                </div>
                            </div>
                        </div>
                         {/* Card right */}
                         <div className="mt-6 sm:mt-0 sm-mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1500' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">All the rest</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font[500] leading-7'>My prior experience as a Lead Generator has equipped me with a strong foundation in social media advertising and Google PPC advertising. I am well-versed in identifying target audiences and crafting effective ad campaigns that generate leads and increase conversions. In addition, I have a comprehensive understanding of SQL and have recently incorporated Express.js to facilitate calls to my backend and retrieve data for a recent project I undertook.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <img src={appImg} alt=""/>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                </div>  
        </div>
    </section>
  )
}

export default services