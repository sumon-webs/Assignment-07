"use client"

import { createContext, useState } from "react";

export const FriendContext = createContext()

const FriendsContextProvider = ({ children }) => {
    const [timeLinelData, setTimeLinelData] = useState([])

    const handleCall = (type, expectData) => {
        const exist = timeLinelData.find(data => data.id === expectData.id);

        if (!exist) {
            const newItem = {
                ...expectData,
                type,
                date: new Date().toISOString()
            };

            setTimeLinelData([...timeLinelData, newItem]);
            alert("added");
        } else {
            alert("already have");
        }
    };
    const data = {
        timeLinelData,
        handleCall,
    }

    return <FriendContext.Provider value={data}>

        {children}
    </FriendContext.Provider>
};

export default FriendsContextProvider;