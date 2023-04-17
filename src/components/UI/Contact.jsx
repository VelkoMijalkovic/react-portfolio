import React, { useState } from "react";
const formEndPoint =
  "https://public.herotofu.com/v1/d11abc50-dd17-11ed-9588-b37292643969";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57304.79889992001!2d27.92720787249176!3d-26.14621381725896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574ba64d56537%3A0xba4b7bc6cb0abf18!2sNorthcliff%2C%20Johannesburg%2C%202115!5e0!3m2!1sen!2sza!4v1681311350539!5m2!1sen!2sza"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] 
                lg:flex items-center bg-indigo-100
                px-4 lg:px-8 py-8"
          >
            <form
              className="w-full"
              action={formEndPoint}
              onSubmit={handleSubmit}
              method="POST"
            >
              <div className="mb-5">
                <input
                  name="name"
                  type="text"
                  placeholder="enter your name or company"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  name="email"
                  type="email"
                  placeholder="enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  name="subject"
                  type="text"
                  placeholder="subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  name="text"
                  type="text"
                  rows={3}
                  placeholder="Write your query"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              {submitted ? (
                <button
                  type="submit"
                  disabled={true}
                  className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                >
                  Sent!
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                >
                  Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
