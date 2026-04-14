"use client"

import Image from "next/image";
import { IoIosCall, IoIosNotificationsOutline } from "react-icons/io";
import { GoArchive } from "react-icons/go";
import { MdDelete, MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { useContext } from "react";
import { FriendContext } from "@/Context/FriendsContextProvider";


const FriendsDetails = ({ expectData }) => {
    const { handleCall } = useContext(FriendContext)

    const {
        picture,
        name,
        status,
        tags,
        bio,
        email,
        days_since_contact,
        goal,
        next_due_date,
    } = expectData;





    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-6 gap-6">

            <div className="md:col-span-2  rounded-2xl  space-y-2">

                <div className="text-center space-y-3 p-6 shadow-md rounded-lg">
                    <Image
                        src={picture}
                        alt={`${name}'s picture`}
                        width={90}
                        height={90}
                        className="rounded-full mx-auto border-4 border-gray-200"
                    />

                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className={`badge  rounded-full ${status === 'overdue' ? 'badge-error' : status === 'almost due' ? "badge-warning" : 'badge-success   '}`}>{status}</p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {tags?.map((t, index) => (
                            <span
                                key={index}
                                className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-600">{bio}</p>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>

                <div className="space-y-2 pt-4">
                    <button className="flex justify-center items-center font-semibold cursor-pointer gap-2 w-full shadow-md py-2 rounded-lg transition">
                        <IoIosNotificationsOutline />
                        Snooze 2 weeks
                    </button>

                    <button className="flex items-center justify-center font-semibold cursor-pointer shadow-sm gap-2 w-full  py-2 rounded-lg transition">
                        <GoArchive />
                        Archive
                    </button>

                    <button className="flex items-center justify-center font-semibold cursor-pointer shadow-sm gap-2 w-full  text-red-600 py-2 rounded-lg transition">
                        <MdDelete />
                        Delete
                    </button>
                </div>
            </div>

            <div className="md:col-span-4 space-y-6">

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition">
                        <h3 className="text-xl font-bold">{days_since_contact}</h3>
                        <p className="text-sm text-gray-500">Days Since Contact</p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition">
                        <h3 className="text-xl font-bold">{goal}</h3>
                        <p className="text-sm text-gray-500">Goal (Days)</p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-4 text-center hover:scale-105 transition">
                        <h3 className="text-sm font-bold">{next_due_date}</h3>
                        <p className="text-sm text-gray-500">Next Due</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-2xl p-6 space-y-2">
                    <div className=" flex justify-between">
                        <h3 className="text-lg font-semibold">Relationship Goal</h3>
                        <p className=" shadow-md bg-base-300 px-5 py-1 rounded-md font-semibold hover:-translate-y-1 hover:shadow-2xl cursor-pointer">Edit</p>
                    </div>
                    <p className="text-gray-600">
                        Contact every <span className="font-bold">{goal}</span> days
                    </p>
                </div>

                <div className="bg-white shadow rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Check-in</h3>

                    <div className="grid grid-cols-3 gap-4">
                        <button
                            onClick={() => handleCall('Call', expectData)}
                            className="flex flex-col justify-center items-center  bg-blue-100 cursor-pointer hover:bg-blue-200 py-3 rounded-lg transition">
                            <IoIosCall />
                            Call
                        </button>
                        <button
                            onClick={() => handleCall('Text', expectData)}
                            className="flex flex-col justify-center items-center  bg-green-100 cursor-pointer hover:bg-green-200 py-3 rounded-lg transition">
                            <MdOutlineTextsms />
                            Text
                        </button>
                        <button
                            onClick={() => handleCall('Video', expectData)}
                            className="flex flex-col justify-center items-center  bg-purple-100 cursor-pointer hover:bg-purple-200 py-3 rounded-lg transition">
                            <CiVideoOn />
                            Video
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;