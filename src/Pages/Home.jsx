import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from '../components/Navbar';
import BookCard from "../components/BookCard";




const Home = () => {
    const bookDatas = useLoaderData();
    console.log(bookDatas)

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1 className="font-bold text-[40px] text-[#131313] text-center mt-9">Books</h1>
            <div className="grid grid-cols-3 mx-auto mt-[50px] w-[1170px]">
            {
                bookDatas.map(bookData => <BookCard
                key={bookData.bookId}
                bookData={bookData}
                ></BookCard>)
            }
            </div>
        </div>
    );
};

export default Home;