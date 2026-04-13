import FriendCard from "@/Ui/FriendCard";

const FriendsData = async () => {

    const res = await fetch("/data.json")
    const friendsData = await res.json()


    return (
        <div className="bg-base-200  ">
            <div className=" max-w-7xl mx-auto py-7 md:py-12 border-b">
                <h3 className=" font-semibold text-2xl sm:text-3xl pb-5"> Your Friends</h3>
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {
                        friendsData.map(friend => <FriendCard key={friend.id} friend={friend} />)
                    }
                </div>
            </div>
        </div>
    );
};
export default FriendsData;