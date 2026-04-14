import HeroCard from "@/Ui/HeroCard";

const Hero = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto text-center space-y-2 md:space-y-3  px-3 md:px-0 py-6 md:py-10 border-b">
                <h1 className=" font-bold text-xl md:text-4xl lg:text-5xl">Friends to keep close in your life</h1>
                <p className=" text-gray-600">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className=" btn bg-green-700 text-white">+ Add a friend</button>
                <HeroCard />
            </div>
        </div>
    );
};

export default Hero;