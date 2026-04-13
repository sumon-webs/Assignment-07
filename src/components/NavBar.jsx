import NavLinkActive from "@/Ui/NavLinkActive";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

            <h1 className="text-xl md:text-3xl font-bold">
                Keen<span className="text-gray-500">Keeper</span>
            </h1>

            <ul className="flex items-center gap-3 md:gap-5">
                <NavLinkActive href="/">
                    <RiHome2Line className="md:text-lg" />
                    <span className="hidden sm:inline">Home</span>
                </NavLinkActive>

                <NavLinkActive href="/timeLine">
                    <RiTimeLine className="md:text-lg" />
                    <span className="hidden sm:inline">TimeLine</span>
                </NavLinkActive>

                <NavLinkActive href="/stats">
                    <ImStatsDots className="md:text-lg" />
                    <span className="hidden sm:inline">Stats</span>
                </NavLinkActive>
            </ul>
        </div>
    );
};

export default Navbar;