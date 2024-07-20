import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(3);

  useEffect(()=>{
    fetch ('../../../../public/DATA.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
  },[]);
  const addMore = () =>{
    if(count <books.length){
      setCount(count+3);
    }
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <h4 className="mt-20 mb-10 text-center text-5xl font-bold">Books</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
        {
          books.slice(0, count).map(book =><Books key={book.bookId} book={book}></Books>)
        }
      </div>
      <div className="text-center my-6">
      <button className="btn btn-accent" onClick={addMore}>Show More</button>
      </div>
    </div>
  );
};

export default Home;