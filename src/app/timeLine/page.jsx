"use client"

import { FriendContext } from "@/Context/FriendsContextProvider";
import TimeLineCard from "@/Ui/TimeLineCard";
import { useContext } from "react";

const TimeLinePage = () => {
    const { timeLinelData } = useContext(FriendContext)

    return (
        <div className=" max-w-7xl mx-auto py-15 ">
            <h1 className=" text-2xl md:text-4xl font-semibold pb-4">Time Line page</h1>
            <div className=" space-y-4">
                {
                    timeLinelData.map(friend => <TimeLineCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};
export default TimeLinePage;