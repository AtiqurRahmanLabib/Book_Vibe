

const ListedReadBook = ({ book }) => {
    const { bookName, author, image, tags, category, rating, review, publisher, totalPages, yearOfPublishing } = book;

    return (
        <div>
            <div className="w-[1169px] h-[277px] rounded-[16px] border-[#131313]/15 mx-auto mt-5">
                <div className="flex justify-center gap-3 p-5">
                    <div className="w-[230px] h-[229px] rounded-[16px] bg-[#131313]/5">

                    </div>
                    <div className="w-[867px] h-[229px] ">
                        <div className="w-[631px] h-[156px] ">
                            <div>
                                <h1 className="font-bold text-[24px] text-[#131313] ">{bookName}</h1>
                                <p className="text-[#131313]/80 font-medium text-[16px] ">By: {author}</p>
                            </div>
                            <div>
                                <div className="mt-4 flex gap-2  w-auto h-[33px] ">
                                    <span className="font-bold text-[16px] text-[#131313]">Tag</span>
                                    {tags.map((tag, index) => (
                                        <span key={index} className="text-center content-center w-[136px] h-[33px] rounded-[30px] text-[#23BE0A] bg-[#23BE0A]/5">
                                            {tag}
                                        </span>
                                    ))}
                                    <p className="content-center text-[16px] text-[#131313]/80"> Year of publishing: {yearOfPublishing}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-[#131313]/15 w-[867px] " />
                        <div className="w-[867px] h-[41px] mt-5 flex gap-2">

                            <div className="w-[174px] h-[41px] bg-[#328EFF]/15 rounded-[30px]">
                                <p className="text-[16px] text-[#328EFF] text-center justify-center p-2">
                                    Category: {category}
                                </p>

                            </div>

                            <div className="w-[123px] h-[41px] bg-[#FFAC33]/15 rounded-[30px]">

                                <p className="text-[16px] text-[#FFAC33] text-center justify-center p-2">
                                    Rating: {rating}
                                </p>
                            </div>
                            <div className="w-[150px] h-[41px] bg-[#23BE0A] rounded-[30px]">
                            <p className="text-[16px] text-[#FFFFFF] text-center justify-center p-2">
                                    Rating: {rating}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedReadBook;