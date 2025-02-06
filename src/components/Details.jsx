import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const idInt = parseInt(bookId, 10);
    const book = books?.find((book) => book.bookId === idInt)
    if (!book) {
        return <h1 className="text-center text-red-500 text-2xl font-bold">Book not found!</h1>;
    }
    const { bookName, author, image, tags, category, rating, review, publisher, totalPages, yearOfPublishing } = book;
    return (
        <div>
            <Navbar />

            {/* Container */}
            <div className="w-[1170px] h-[711px] mx-auto mt-9 flex">
                {/* Book Image */}
                <div className="w-[573px] h-[711px] bg-[#131313]/5 rounded-[16px] flex justify-center items-center">
                    <img src={image} alt={bookName} className="" />
                </div>

                {/* Book Details */}
                <div className="flex flex-col w-[550px] ml-[49px]">
                    <div>
                        <h1 className="text-[40px] font-bold text-[#131313]">{bookName}</h1>
                        <p className="text-[20px] text-[#131313]/80 mt-2">By: {author}</p>
                    </div>
                    <hr className="w-[549px] border-[#131313]/15 mx-auto mt-2" />
                    <p className="text-[20px] font-medium text-[#131313]/80 mt-2">{category}</p>
                    <hr className="w-[549px] border-[#131313]/15 mx-auto mt-2" />
                    <p className="text-[#131313]/70 mt-2 text-[16px] "><span className="text-[#131313] text-[16px] font-bold">Review</span>{review}</p>
                    {/* Tags */}
                    <div className="mt-4 flex gap-2 flex-wrap">
                        <span className="font-bold text-[16px] text-[#131313]">Tag</span>
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-[#23BE0A]/10 text-[#23BE0A] rounded-full text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Rating */}


                    <hr className="w-[549px] border-[#131313]/15 mx-auto mt-5" />
                    <div className="flex gap-9 items-center mt-2">
                        <div className="w-[144px] h-[140px]">
                            <p className="text-[16px] text-[#131313]/70">Number of Pages: </p>
                            <p className="text-[16px] text-[#131313]/70">Publisher: </p>
                            <p className="text-[16px] text-[#131313]/70">Year of Publishing: </p>
                            <p className="text-[16px] text-[#131313]/70">Rating: </p>

                        </div>


                        <div className="w-[144px] h-[140px] ">
                            <p className="text-[#131313] font-semibold text-[16px]">{rating}</p>
                            <p className="text-[#131313] font-semibold text-[16px]">{publisher}</p>
                            <p className="text-[#131313] font-semibold text-[16px]">{yearOfPublishing}</p>
                            <p className="text-[#131313] font-semibold text-[16px]">{rating}</p>
                        </div>
                    </div>
                        <div className="flex gap-5">
                            <button className="font-semibold text-[18px] w-[101px] h-[57px] rounded-[8px]  border border-[#131313]/30 bg-[131313]/30 text-[#131313] ">Read</button>
                            <button className="text-[18px] font-semibold w-[128px] h-[57px] bg-[#50B1C9] text-[#FFFFFF] rounded-[8px]">Wishlist</button>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Details;
