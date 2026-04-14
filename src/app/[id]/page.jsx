

import friendsData from "@/../public/data.json";

import FriendsDetails from "@/components/FriendsDetails";
import NoteFoundPage from "../not-found";

const DetailPage = async ({ params }) => {


    const { id } = await params;

    const expectData = friendsData.find((f) => f.id == id);

    if (!expectData) {
        return <NoteFoundPage/>
    }



    return (
        <FriendsDetails expectData={expectData} />
    );
};

export default DetailPage;