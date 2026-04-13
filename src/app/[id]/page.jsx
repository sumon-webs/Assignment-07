

import friendsData from "@/../public/data.json";

import FriendsDetails from "@/components/FriendsDetails";

const DetailPage = async ({ params }) => {


    const { id } = await params;

    const expectData = friendsData.find((f) => f.id == id);


    


    return (
        <FriendsDetails expectData= {expectData}/>
    );
};

export default DetailPage;