"use client"

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext()

const FriendsContextProvider = ({ children }) => {
    const [timeLinelData, setTimeLinelData] = useState([])

    const handleCall = (type, expectData) => {


        const newItem = {
            ...expectData,
            type,
            date: new Date().toISOString()

        }
        setTimeLinelData([...timeLinelData, newItem]);
        toast.success(`${type} with ${expectData.name}`)

    };
    const data = {
        timeLinelData,
        handleCall,
        setTimeLinelData
    }

    return <FriendContext.Provider value={data}>

        {children}
    </FriendContext.Provider>
};

export default FriendsContextProvider;