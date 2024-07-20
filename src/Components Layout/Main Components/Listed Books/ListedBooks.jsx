import { useLoaderData } from "react-router-dom";
import { getReadStorageValue } from "../../../LocalStorage/Read";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";
import { getWhishlistStorage } from "../../../LocalStorage/Whislist";
import { Helmet } from "react-helmet-async";




const ListedBooks = () => {
  const booksData = useLoaderData();
  // Get data from local storage for read books.
  const readBookStorage = getReadStorageValue();
  const readStorageBooks = [];

  // get data from local storage for wishlist books
  const wishlistBookStorage = getWhishlistStorage();
  const wishlistStorageBooks = [];

  // State use for udating button click
  const [readButton, setReadButton] = useState(true);
  const [wislistButton, setwishlistButton] = useState('hidden');


  for (const id of readBookStorage) {

    const exists = booksData.find(exists => parseInt(exists.bookId) === id);
    if (exists) {
      readStorageBooks.push(exists);
    }

  }

  for (const id of wishlistBookStorage) {
    const exists = booksData.find(exists => parseInt(exists.bookId) === id);
    if (exists) {
      wishlistStorageBooks.push(exists);
    }
  }



  const handleReadButton = () => {
    setwishlistButton('hidden')
    setReadButton(true)
  }
  const handleWishlistButton = () => {
    setReadButton('hidden')
    setwishlistButton(true)
  }


  return (
    <div>
      <Helmet>
        <title>Listed Books</title>
      </Helmet>
      <button onClick={handleReadButton} className={`btn btn-ghost border border-black`}>Read</button>
      <button onClick={handleWishlistButton} className={`btn bg-green-100 border-black`}>Wishlist</button>

      <div className={`${readButton}`}>
        {
          readStorageBooks.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
        }
      </div>
      <div className={`${wislistButton}`}>
        {
          wishlistStorageBooks.map((book, idx) => <BookCard key={idx} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default ListedBooks;