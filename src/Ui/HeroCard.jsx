
const HeroCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12">

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-green-500">32</h3>
                <p className="text-gray-500 text-sm mt-1">Total Friends</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-500">2</h3>
                <p className="text-gray-500 text-sm mt-1">On Track</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-red-500">5</h3>
                <p className="text-gray-500 text-sm mt-1">Need Attention</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-500">6</h3>
                <p className="text-gray-500 text-sm mt-1">Interactions This Month</p>
            </div>

        </div>
    );
};
export default HeroCard;