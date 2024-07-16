import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


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

  console.log(books);
  console.log(count);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-4 mx-auto">
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