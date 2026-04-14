import Link from "next/link";
import Image from "next/image";

const FriendCard = ({ friend }) => {

    const { picture, name, days_since_contact, tags, status, id } = friend

    return (

        <Link href={`/${id}`}>
            <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center py-4 md:py-4 hover:shadow-xl hover:-translate-y-1 cursor-pointer space-y-1">

                {/* Image */}
                <Image src={picture} alt={`${name}' picture`} width={50} height={50} className=" rounded-full" />

                {/* Name */}
                <p className=" text-xl font-semibold">{name}</p>

                {/* Days */}
                <p className=" text-gray-500">{days_since_contact}ago</p>

                {/* Tags */}
                <div className="space-x-2">
                    {
                        tags.map((t, index) => <span className=" badge badge-soft badge-success rounded-full" key={index}>{t}</span>)
                    }
                </div>

                {/* Status */}
                <p
                    className={`badge  rounded-full ${status === 'overdue' ? 'badge-error' : status === 'almost due' ? "badge-warning" : 'badge-success   '}`}
                >{status}</p>
            </div>
        </Link>
    );
};
export default FriendCard;