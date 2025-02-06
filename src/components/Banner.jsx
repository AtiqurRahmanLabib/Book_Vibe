import { Link } from "react-router-dom";
import img from "../assets/Images/pngwing 1.png"
const Banner = () => {
    return (
        <div className="w-[1170px] h-[554px] rounded-[8px] bg-[#131313]/5 mx-auto mt-9 flex justify-around pt-[90px]">
            <div className="w-[526px] h-[281px] rounded-[8px] mt-9">
                <p className="text-[#131313] font-bold text-[46px]">Books to freshen up <br /> your bookshelf</p>
                <Link to="/ListedBooks"><button className="bg-[#23BE0A] text-[#FFFFFF] rounded-[8px] w-[190px] h-[65px] font-bold text-[20px] mt-[75px]">View The List</button></Link>
            </div>
            <div>
                <img className="w-[318] h-[394px]" src={img} alt="" />
            </div>
        </div>
    );
};
export default Banner;