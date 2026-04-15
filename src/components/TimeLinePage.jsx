"use client"



import { FriendContext } from "@/Context/FriendsContextProvider";
import NoSelectedData from "@/Ui/NoSelectedData";
import TimeLineCard from "@/Ui/TimeLineCard";
import { useContext, useState } from "react";

const TimeLinePage = () => {

    const { timeLinelData } = useContext(FriendContext);
    const [filteredData, setFilteredData] = useState(timeLinelData);
    const [notFound, setNotFound] = useState(false);

    const handleTimeLineData = (type) => {
        const result = timeLinelData.filter(item => item.type === type);
        setFilteredData(result);


    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name").toLowerCase().trim();

        const result = timeLinelData.filter(item =>
            item.name.toLowerCase().includes(name)
        );

        if (result.length === 0) {
            setNotFound(true);
            setFilteredData([]);
        } else {
            setNotFound(false);
            setFilteredData(result);
        }
    };


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl md:text-4xl font-semibold">
                TimeLine
            </h1>
            {
                timeLinelData.length === 0
                    ? <NoSelectedData />
                    : <>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">



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

                        {
                            notFound
                                ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">

                                        <div className="text-6xl mb-4">🔍</div>

                                        <h2 className="text-2xl font-semibold text-gray-700">
                                            No Results Found
                                        </h2>

                                        <p className="text-gray-500 mt-2 max-w-md">
                                            We couldn’t find anything matching your search. Try using a different name or filter.
                                        </p>

                                        <button
                                            onClick={() => {
                                                setFilteredData(timeLinelData);
                                                setNotFound(false);
                                            }}
                                            className="mt-5 btn btn-accent"
                                        >
                                            Reset Search
                                        </button>
                                    </div>
                                )
                                : (
                                    <div className="space-y-4 mt-4">
                                        {filteredData.map(friend => (
                                            <TimeLineCard key={friend.id} friend={friend} />
                                        ))}
                                    </div>
                                )
                        }
                    </>
            }




        </div>
    );
};
export default TimeLinePage;