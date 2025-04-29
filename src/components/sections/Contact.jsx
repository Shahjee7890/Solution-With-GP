import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {

  const notify = (type, message) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm("service_c1j14zg", "template_fmxvkm5", form, {
        publicKey: "TJ8_EtOpVqLoUXtPc",
      })
      .then(
        () => {
          notify("success", "Your message has been sent successfully! 🎉");
          form.reset();
        },
        (error) => {
          notify(error, "Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section>
      {/* child */}
      <div>
        {/* Heading */}
        <div
          className="flex flex-col items-start justify-center w-full px-[1.9rem] lg:px-[3rem] py-[4rem] gap-[1rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h2 className="font-raleway relative inline-block after:content-[''] after:inline-block after:w-[120px] after:h-px after:bg-[#ffc451] after:mx-[10px] after:my-[4px] text-[20px] font-[500] text-[#9f9fa6] text-transparent[50%]">
            CONTACT
          </h2>
          <p className="text-[36px] font-[700] font-roboto">CONTACT US</p>
        </div>
        {/* location  */}
        <div
          className="overflow-hidden w-full h-[300px] flex items-center justify-center pb-[3rem] px-[2rem] lg:px-[3rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8293313760746!2d74.37138958008256!3d31.473880683024856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907d7fa424041%3A0x7969c11d9f30a68e!2sCode%20Encoders!5e0!3m2!1sen!2s!4v1745217973660!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
        {/* contact deails */}
        <div
          className="flex flex-col lg:flex-row items-start px-0 lg:px-[1rem] gap-[8rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1800"
        >
          {/* Adaress*/}
          <div className="flex flex-col items-start gap-[1rem] px-[1rem] font-raleway">
            <div className="flex items-center justify-center gap-[2rem] rounded-[4px] p-[1rem]">
              <div className="bg-yellow-400 w-fit rounded-[4px] py-[5px] px-[5px]">
                <CiLocationOn className="w-[2rem] h-[2rem]" />
              </div>
              <div>
                <h3 className="text-[18px] font-[700]">Address</h3>
                <p className="text-[14px]">
                  Plaza No 102 2nd floor Y block DHA Phase 3 Lahore
                </p>
              </div>
            </div>
            {/* Call us */}
            <div className="flex items-center justify-center gap-[2rem] rounded-[4px] p-[1rem]">
              <div className="bg-yellow-400 w-fit rounded-[4px] py-[5px] px-[5px]">
                <IoCallOutline className="w-[2rem] h-[2rem]" />
              </div>
              <div>
                <h3 className="text-[18px] font-[700]">Call Us</h3>
                <p className="text-[14px]">03118967939</p>
              </div>
            </div>
            {/* Email us */}
            <div className="flex items-center justify-center gap-[2rem] rounded-[4px] p-[1rem]">
              <div className="bg-yellow-400 w-fit rounded-[4px] py-[5px] px-[5px]">
                <FiMail className="w-[2rem] h-[2rem]" />
              </div>
              <div>
                <h3 className="text-[18px] font-[700]">Email Us</h3>
                <p className="text-[14px]">info@example.com</p>
              </div>
            </div>
          </div>
          {/* Personal Information */}
          <div className="flex w-full px-[1rem] lg:px-[3rem] gap-[1rem] pb-6">
            <form onSubmit={handleFormSubmit} className="w-full">
              <div className="flex-col flex md:flex-row items-center gap-[3rem] rounded-[4px] p-[1rem] w-full">
                <input
                  className="border-[1px] border-[#ccc] rounded-[4px] p-[1rem] mb-[1rem] w-full hover:border-yellow-400"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Enter your Name"
                  name="name"
                />
                <input
                  className="border-[1px] border-[#ccc] rounded-[4px] p-[1rem] mb-[1rem] w-full hover:border-yellow-400"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[2rem] rounded-[4px] p-[1rem]">
                <input
                  className="border-[1px] border-[#ccc] rounded-[4px] p-[1rem] mb-[1rem] w-full hover:border-yellow-400"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Subject"
                  name="subject"
                />
                <textarea
                  className="border-[1px] border-[#ccc] rounded-[4px] p-[1rem] w-full hover:border-yellow-400"
                  rows="10"
                  placeholder="Enter your message"
                  name="message"
                  required
                  autoComplete="off"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    value="send"
                    className="font-roboto text-black border-2 border-yellow-400 rounded-[4px] px-[2rem] py-[7px] bg-yellow-400 cursor-pointer"
                    onClick={notify}
                  >
                    Send Message
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
