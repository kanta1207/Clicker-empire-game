import {IoSearchCircle} from "react-icons/io5"

export const SearchModalOpener = () => {
  return (
    <div className="flex justify-between items-center space-x-4 shadow-lg rounded-full py-3 px-4 cursor-pointer">
      <div>
        <p className="text-[#222222]">Anywhere</p>
      </div>
      <div>
        <p className="text-[#717171]">|</p>
      </div>
      <div>
        <p className="text-[#222222]">Any week</p>
      </div>
      <div>
        <p className="text-[#717171]">|</p>
      </div>
      <div>
        <p className="text-[#717171]">Add guests</p>
      </div>
      <div>
        <IoSearchCircle color={"#FF385C"} size={"1.8rem"}/>
      </div>
    </div>
  )
}
