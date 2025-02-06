import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ bookData }) => {
    const { bookName, author, image, tags, category, rating, bookId } = bookData;

    return (
        <div>
            <Link to={`/details/${bookId}`} className="block">
                <div className="w-[374px] h-[482px] rounded-[16px] border border-[#131313]/15 mx-auto mb-5">
                    <div className="w-[326px] h-[230px] rounded-[16px] bg-[#F3F3F3] mx-auto mt-5">
                        <img src={image} alt={bookName} />
                    </div>
                    <div className="w-[326px] h-[180px] mx-auto">
                        <div className="flex gap-2 mt-2 flex-wrap mx-auto">
                            <div className="w-[326px] items-center text-center pt-1.5 flex gap-3">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="w-[93px] h-[33px] bg-[#23BE0A]/5 rounded-[30px] text-[#23BE0A] font-medium text-[16px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="font-bold text-[24px] text-[#131313]">{bookName}</h1>
                            <p className="font-medium text-[16px] text-[#131313]/80">{author}</p>
                        </div>
                        <hr className="border-dashed border-[#131313]/15 w-[326px] mx-auto mt-5" />
                        <div className="flex justify-between mt-5 text-[16px] text-[#131313]/80 font-medium">
                            <p>{category}</p>
                            <div className="flex items-center">
                                <p>{rating}</p> <CiStar className="text-[20px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
