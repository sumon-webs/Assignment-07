import FriendsContextProvider from '@/Context/FriendsContextProvider';
import React from 'react';

const Provider = ({children}) => {
    return (
        <FriendsContextProvider>
            {children}
        </FriendsContextProvider>
    );
};

export default Provider;