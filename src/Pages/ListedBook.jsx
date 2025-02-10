// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import SortByDropdown from "./SortByDropdown";
// import { useLoaderData } from "react-router-dom";
// import { getStoredBookApplication } from "../utils/LocalStorage";
// import ListedReadBook from "./ListedReadBook";

// const ListedBook = () => {
//     const books = useLoaderData();
//     const [filteredBooks, setFilteredBooks] = useState([]);

//     useEffect(() => {
//         const storedBooksIds = getStoredBookApplication();
//         if (books.length > 0) {
//             const booksApplied = books.filter(book => storedBooksIds.includes(book.bookId));
//             setFilteredBooks(booksApplied);
//         }
//     }, [books]);


//     return (
//         <div>
//             <Navbar />
//             <div className="content-center w-[1169px] h-[100px] rounded-[16px] bg-[#131313]/5 mx-auto mt-5">
//                 <h1 className="font-bold text-[28px] text-[#131313] text-center">Books</h1>
//             </div>
//             <div className="w-[1169px] mx-auto text-center mt-5">
//                 <SortByDropdown />
//             </div>
//             <div className="w-[1170px] h-[49px] border-b-2 mx-auto">
//                 {
//                     filteredBooks.map(book => (
//                         <ListedReadBook
//                             key={book.bookId}
//                             book={book}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default ListedBook;


import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SortByDropdown from "./SortByDropdown";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../utils/LocalStorage";
import ListedReadBook from "./ListedReadBook";

const ListedBook = () => {
    const books = useLoaderData();
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const storedBooksIds = getStoredBookApplication();
        if (books.length > 0) {
            const booksApplied = books.filter(book => storedBooksIds.includes(book.bookId));
            setFilteredBooks(booksApplied);
        }
    }, [books]);

    return (
        <div>
            <Navbar />
            <div className="content-center w-[1169px] h-[100px] rounded-[16px] bg-[#131313]/5 mx-auto mt-5">
                <h1 className="font-bold text-[28px] text-[#131313] text-center">Books</h1>
            </div>
            <div className="w-[1169px] mx-auto text-center mt-5">
                <SortByDropdown />
            </div>
            <div className="mx-auto mt-5">
            {
                    filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                            <ListedReadBook
                                key={book.bookId}
                                book={book}
                            />
                        ))
                    ) : (
                        <p>No books found</p>
                    )
                }
            </div>
        </div>
    );
};

export default ListedBook;
