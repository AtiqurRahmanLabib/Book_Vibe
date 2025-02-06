import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-[1171px] h-[57px] mx-auto mt-5 flex">
            <nav className="w-[1171px] flex h-[57px] justify-between items-center">
                <div className="font-bold text-[28px] text-[#131313]">
                    <h1>Book Vibe</h1>
                </div>
                <div className="flex gap-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-[8px] w-[92px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/ListedBooks"
                        className={({ isActive }) =>
                            `rounded-[8px] w-auto h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                        }
                    >
                        Listed Books
                    </NavLink>
                    <NavLink
                        to="/PagestoRead"
                        className={({ isActive }) =>
                            `rounded-[8px] w-auto h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                        }
                    >
                        Pages to Read
                    </NavLink>
                </div>
                <div className="flex gap-2">
                    <button className="w-[116px] h-[57px] rounded-[8px] bg-[#23BE0A] text-[#FFFFFF] font-semibold text-[18px]">
                        Sign in
                    </button>
                    <button className="w-[116px] h-[57px] rounded-[8px] bg-[#59C6D2] text-[#FFFFFF] font-semibold text-[18px]">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
