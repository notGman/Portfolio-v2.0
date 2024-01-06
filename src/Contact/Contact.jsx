import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div
        className="bg-[var(--clr-bg-light1)] dark:bg-[var(--clr-bg-dark1)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] flex justify-center items-center p-5 md:p-0"
        id="contact"
      >
        <div className="lg:w-7/12 lg:h-2/3 py-10 lg:py-28">
          <div className="uppercase text-xl font-bold text-[#147efb] mb-3">
            contact
          </div>
          <div className="text-xl font-bold mb-3">
            Don&apos;t be shy! Hit me up! 👇
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="flex items-center gap-3">
              <div className="border-2 border-black dark:border-white w-fit p-3 rounded-full">
                <MdOutlineMailOutline className="text-3xl" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[#147efb] ">Mail</div>
                <div>gowthaman2185@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border-2 border-black dark:border-white w-fit p-3 rounded-full">
                <MdOutlinePhone className="text-3xl" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[#147efb] ">Phone</div>
                <div>+919344149978</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2D2E32] dark:bg-[var(--clr-bg-dark1)] h-24 flex text-center justify-evenly items-center text-sm md:text-lg text-white font-bold">
        <div>Copyright © 2024. All rights are reserved</div>
        <div className="md:flex gap-8 hidden dark:text-[var(--clr-text-light3)]">
          <a
            href="https://github.com/notGman"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--clr-text-light3)]"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gowthamanu/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--clr-text-light3)]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/not._.gman/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--clr-text-light3)]"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
