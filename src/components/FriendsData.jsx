"use client";

import FriendCard from "@/Ui/FriendCard";
import useFriends from "@/CustomHooks/FriendsHook";
import { Grid } from "react-loader-spinner";

const FriendsData = () => {
    const { friends, loading } = useFriends();

    if (loading) {
        return (
            <div className="flex justify-center items-center py-43">
                <Grid/>
            </div>
        );
    }

    
    return (
        <div className="max-w-7xl mx-auto px-3 md:px-0 py-7 md:py-12 border-b">
            <h3 className="font-semibold text-2xl sm:text-3xl pb-5">
                Your Friends
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ">
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default FriendsData;