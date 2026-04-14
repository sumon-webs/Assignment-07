import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <div className=" flex flex-col items-center justify-center text-center  max-w-7xl mx-auto px-4 py-10  space-y-8">

                <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        KeenKeeper
                    </h1>

                    <p className="mt-3 text-gray-300 text-sm md:text-base">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Social Links</h4>
                    <div className="flex gap-4 justify-centertext-sm text-white">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                <div className="border-t pt-6 w-full  text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">

                    <h4>© 2026 KeenKeeper. All rights reserved.</h4>

                    <ul className="flex gap-4 flex-wrap justify-center">
                        <li className="hover:underline cursor-pointer">Privacy Policy</li>
                        <li className="hover:underline cursor-pointer">Terms of Service</li>
                        <li className="hover:underline cursor-pointer">Cookies</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};
export default Footer;