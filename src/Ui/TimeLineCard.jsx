import { CiVideoOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";

const TimeLineCard = ({ friend }) => {
    const { name, type } = friend
    console.log(type)
    return (
        <div className="bg-white shadow-sm rounded-xl p-4 space-y-1">
            <p className="text-lg font-semibold flex items-center gap-2">
                {
                    type === 'Call' ? <IoIosCall /> : type === 'Text' ? <MdOutlineTextsms /> : <CiVideoOn />
                }
                {type}<span className=" text-gray-500"> With {name}</span>
            </p>

            <p className="text-sm text-gray-500">
                Date: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default TimeLineCard;