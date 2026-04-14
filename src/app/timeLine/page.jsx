"use client"

import { FriendContext } from "@/Context/FriendsContextProvider";
import TimeLineCard from "@/Ui/TimeLineCard";
import { useContext, useState } from "react";

const TimeLinePage = () => {

    const { timeLinelData } = useContext(FriendContext);
    const [filteredData, setFilteredData] = useState(timeLinelData);

    const handleTimeLineData = (type) => {
        const result = timeLinelData.filter(item => item.type === type);
        setFilteredData(result);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name").toLowerCase();

        const result = timeLinelData.filter(item =>
            item.name.toLowerCase().includes(name)

        );

        setFilteredData(result);
    };
    return (
        <div className=" max-w-7xl mx-auto py-15 ">
            <div className=" flex justify-between">
                <h1 className=" text-2xl md:text-4xl font-semibold pb-4">Time Line page</h1>
                <form onSubmit={handleSubmit} className=" flex">
                    <input
                        className="input"
                        type="text" name="name" placeholder="search with name" />
                    <input className=" btn btn-accent" type="submit" value="Search" />
                </form>
            </div>
            <div className="dropdown dropdown-start pb-4">
                <div tabIndex={0} role="button" className="btn m-1">Filter Timeline ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleTimeLineData('Call')}><a>Call</a></li>
                    <li onClick={() => handleTimeLineData('Text')}><a>Text</a></li>
                    <li onClick={() => handleTimeLineData('Video')}><a>Video</a></li>
                </ul>
            </div>
            <div className=" space-y-4">
                {
                    filteredData.map(friend => <TimeLineCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};
export default TimeLinePage;