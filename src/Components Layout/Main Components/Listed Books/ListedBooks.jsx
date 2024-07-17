import { useLoaderData } from "react-router-dom";
import { getReadStorageValue } from "../../../LocalStorage/Read";
import ReadBook from "../ReadBooks/ReadBook";
import { useEffect, useState } from "react";
import { getWhishlistStorage } from "../../../LocalStorage/Whislist";
import WishlistBook from "../Wishlist/WishlistBook";


const ListedBooks = () => {
  const booksData = useLoaderData();
  const readStorage = getReadStorageValue();
  const whislistBooks = getWhishlistStorage();
  const [wishlistBookObj, setWhishlistBookObj]= useState({});
  const [bookObj, setBookObj] = useState({});
  const [display, setDisplay] = useState(true);
  const [whislist, setWishlist] = useState('hidden');

  useEffect(() => {
    readStorage.map(readBook => {
      booksData.find(book => {
        if (book.bookId == readBook) {
          setBookObj(book);
        }
      })
    })
  }, []);

  useEffect(() => {
    whislistBooks.map(whislistBook => {
      booksData.find(book => {
        if (book.bookId == whislistBook) {
          setWhishlistBookObj(book);
        }
      })
    })
  }, []);


  const handleReadBooks = () => {
    setDisplay(true);
    setWishlist('hidden');
  }
  const handleWhislistBooks = () => {
    setDisplay('hidden');
    setWishlist(true)
  }


  return (
    <div>
      <button onClick={handleReadBooks} className={`btn btn-ghost`}>Read Books</button>
      <button onClick={handleWhislistBooks} className="btn btn-ghost">Whislist</button>
      <hr />
      <div className={`${display}`}>
        <ReadBook bookObj={bookObj}></ReadBook>
      </div>
      <div className={`${whislist}`}>
        <WishlistBook wishlistBookObj={wishlistBookObj}></WishlistBook>
      </div>

    </div>
  );
};

export default ListedBooks;