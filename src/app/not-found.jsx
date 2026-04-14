import Link from 'next/link';
import React from 'react';

const NoteFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-extrabold text-red-500">404</h1>
            <p className="text-xl font-semibold mt-2">Oops! Page Not Found</p>
            <p className="text-gray-500 mt-1">The data you are looking for doesn't exist.</p>
            <Link href='/'>
                <button className=' btn btn-error mt-3'>Go Back</button>
            </Link>
        </div>
    );
};

export default NoteFoundPage;