import Link from "next/link";


const NoSelectedData = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-20 text-center">

                <div className="text-6xl mb-4">📭</div>

                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    No Selected Data
                </h1>

                <p className="text-gray-500 mt-2 max-w-md">
                    Please select a data.
                </p>

                <Link href="/">
                    <button
                        className="mt-5 btn btn-primary"
                    >
                        Show All Data
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NoSelectedData;