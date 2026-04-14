import MyPieChart from "@/components/Rechart";

const StatsPage = () => {
    return (
        <div className=" max-w-7xl mx-auto py-7 md:py-12 px-3 md:px-0">
            <h1 className=" font-semibold text-2xl md:text-5xl pb-6">Stats page</h1>
            <MyPieChart/>
        </div>
    );
};
export default StatsPage;