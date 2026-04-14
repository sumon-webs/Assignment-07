"use client"

import { FriendContext } from "@/Context/FriendsContextProvider";
import TimeLineCard from "@/Ui/TimeLineCard";
import { useContext } from "react";

const TimeLinePage = () => {
    const { timeLinelData, setTimeLinelData } = useContext(FriendContext)


    const textTimeLineFilter = timeLinelData.filter(item => item.type === 'Text');
    const callTimeLineFilter = timeLinelData.filter(item => item.type === 'Call');
    const videoTimeLineFilter = timeLinelData.filter(item => item.type === 'Video');

    const handleTimeLineData = (type) => {

        if (type === 'Text') {
            setTimeLinelData(textTimeLineFilter)
        }

        else if (type === 'Call') {
            setTimeLinelData(callTimeLineFilter)
        }

        else {
            setTimeLinelData(videoTimeLineFilter)
        }

    }

    return (
        <div className=" max-w-7xl mx-auto py-15 ">
            <h1 className=" text-2xl md:text-4xl font-semibold pb-4">Time Line page</h1>
            <div className="dropdown dropdown-start pb-4">
                <div tabIndex={0} role="button" className="btn m-1">Filter Timeline ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleTimeLineData('call')}><a>Call</a></li>
                    <li onClick={() => handleTimeLineData('Text')}><a>Text</a></li>
                    <li onClick={() => handleTimeLineData('Video')}><a>Video</a></li>
                </ul>
            </div>
            <div className=" space-y-4">
                {
                    timeLinelData.map(friend => <TimeLineCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};
export default TimeLinePage;