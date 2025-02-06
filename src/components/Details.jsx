import { useParams } from "react-router-dom";

const Details = () => {
    const { bookId } = useParams();

    
    
    return (
        <div>
            <h1>Details for Book ID: {bookId}</h1>
        </div>
    );
};

export default Details;
