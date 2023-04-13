import React from 'react'
import heroImg from '../../assets/images/Velko.png'
import CountUp from 'react-countup'
import CV from '../../assets/CV/VelkoMijalkovicCV.pdf'
const Hero = () => {
  
  const openPDF = () => {
    fetch('/path/to/your/pdf/file.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        window.open(CV, '_blank');
      });
  }
  return (
    <section className="pt-0" id="about">
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* =================================================================hero content left================================================*/}
                <div className="w-full md:basis-1/2">
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello Welcome</h5>
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">I'm Velko Mijalkovic <br/>Web Developer</h1>
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800" className="flex items-center gap-6 mt-7">
                          <a>
                            <button onClick={openPDF} className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                              <i className="ri-mail-line"></i>View CV
                            </button>
                          </a>
                          <a href="#portfolio" className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor">See Portfolio</a>
                          
                    </div>
                    <p data-aos="fade-left" data-aos-duration="1500" className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-14">
                      <span>
                        <i class="ri-apps-2-line"></i>
                      </span>
                      I am a diligent individual who possesses a strategic approach to problem-solving for business solutions. As a team player, I am committed to breaking down complex problems as part of my daily duties. Currently, my professional interests lie in pursuing opportunities to enhance my knowledge and skills in all aspects of development, particularly in frontend development. I am eager to enter the field and make a meaningful contribution.
                    </p>
                    <div className="flex items-center gap-9 mt-14">
                      <span className="text-smallTextColor text-[15px] font-[600]">My profiles:</span>
                      <span>
                        <a href="https://www.linkedin.com/in/velko-mijalkovic" target="_blank" rel="noreferrer" className="text-smallTextColor text-[18px] font-[600]"><i class="ri-linkedin-fill"></i></a>
                      </span>
                      <span>
                        <a href="https://github.com/VelkoMijalkovic" target="_blank" rel="noreferrer" className="text-smallTextColor text-[18px] font-[600]"><i class="ri-github-fill"></i></a>
                      </span>
                    </div>
                </div>

                {/* =================================================================hero content left end================================================*/}
                {/* =================================================================hero img================================================*/}
                <div className="basis-1/3 mt-10 sm:mt-0">
                  <figure className="flex items-center justify-center">
                    <img src={heroImg} alt=""/>
                    </figure>
                </div>
                {/* =================================================================hero img end================================================*/}
                {/* =================================================================hero content right================================================*/}
                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                  <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                      <CountUp start={0} end={5} duration={2} suffix="+"/>
                    </h2>
                    <h4 className="text-headingColor font-[600] text-[18px]"> Years Wordpress Experience</h4>
                  </div>
                  <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                      <CountUp start={0} end={8} duration={2} suffix="+"/>
                    </h2>
                    <h4 className="text-headingColor font-[600] text-[18px]"> Years Running My Own Business</h4>
                  </div>
                  <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                      <CountUp start={0} end={2} duration={2} suffix="+"/>
                    </h2>
                    <h4 className="text-headingColor font-[600] text-[18px]"> Years Learning Frontend Development</h4>
                  </div>
                </div>
                {/* =================================================================hero content right end================================================*/}
            </div>
        </div>
    </section>
  )
}

export default Hero