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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Header + Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <h1 className="text-2xl md:text-4xl font-semibold">
                    Time Line page
                </h1>

                <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
                    <input
                        className="input w-full md:w-auto"
                        type="text"
                        name="name"
                        placeholder="search with name"
                    />
                    <input className="btn btn-accent ml-2" type="submit" value="Search" />
                </form>

            </div>

            {/* Filter */}
            <div className="dropdown dropdown-start mt-4">
                <div tabIndex={0} role="button" className="btn m-1">
                    Filter Timeline ⬇️
                </div>

                <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                >
                    <li onClick={() => handleTimeLineData('Call')}><a>Call</a></li>
                    <li onClick={() => handleTimeLineData('Text')}><a>Text</a></li>
                    <li onClick={() => handleTimeLineData('Video')}><a>Video</a></li>
                </ul>
            </div>

            {/* Cards */}
            <div className="space-y-4 mt-4">
                {filteredData.map(friend => (
                    <TimeLineCard key={friend.id} friend={friend} />
                ))}
            </div>

        </div>
    );
};
export default TimeLinePage;