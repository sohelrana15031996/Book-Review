import { useLoaderData } from "react-router-dom";
import { getReadStorageValue } from "../../../LocalStorage/Read";
import ReadBook from "../ReadBooks/ReadBook";
import { useEffect } from "react";
import WishlistBook from "../Wishlist/WishlistBook";
import { getWhishlistStorage } from "../../../LocalStorage/Whislist";
// import { getWhishlistStorage } from "../../../LocalStorage/Whislist";
// import WishlistBook from "../Wishlist/WishlistBook";


const ListedBooks = () => {
  const booksData = useLoaderData();
  const readStorage = getReadStorageValue();
  const whislistBooks = getWhishlistStorage();
  // const [display, setDisplay] = useState(true);
  // const [whislist, setWishlist] = useState('hidden');
 const booksObject = [];
 const wishliStBook = [];
  useEffect(() => {
    for (const iterator of readStorage) {
      const book = booksData.find(book => book.bookId == iterator)
        if (book) {
        booksObject.push(book);
        }
    }
  }, []);

  useEffect(() => {
    for (const iterator of whislistBooks) {
      const exists = booksData.find(exists => exists.bookId == iterator);
      if (exists) {
        wishliStBook.push(exists);
        }
    }
  }, []);


  // const handleReadBooks = () => {
  //   setDisplay(true);
  //   // setWishlist('hidden');
  // }
  // const handleWhislistBooks = () => {
  //   setDisplay('hidden');
  //   setWishlist(true)
  // }

console.log(booksObject);
  return (
    <div>
      <button className={`btn btn-ghost`}>Read Books</button>
      <button className="btn btn-ghost">Whislist</button>
      <hr />
      <div>
        <ReadBook booksObject={booksObject}></ReadBook>
      </div>
      <div className={``}>
        <WishlistBook wishliStBook={wishliStBook}></WishlistBook>
      </div>

    </div>
  );
};

export default ListedBooks;