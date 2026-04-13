"use client"

import { useEffect, useState } from "react";

const FriendsHook = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();

            setFriends(data);
            setLoading(false);
        };

        loadData();
    }, []);
    return { friends, loading };
};

export default FriendsHook;