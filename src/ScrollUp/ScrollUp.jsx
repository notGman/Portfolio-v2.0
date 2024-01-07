import { FaArrowUpLong } from "react-icons/fa6";

const ScrollUp = () => {
  return (
    <div className="h-14 w-14 bg-opacity-25 backdrop-filter backdrop-blur-lg bg-black rounded-full fixed bottom-10 right-10 cursor-pointer flex justify-center items-center">
    <FaArrowUpLong color="white" className="text-2xl"/>
  </div>  )
}

export default ScrollUp