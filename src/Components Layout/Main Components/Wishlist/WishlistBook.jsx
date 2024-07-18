import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';


const WishlistBook = ({ wishliStBook }) => {

  return (
    <div>
      {
        wishliStBook.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
      }
    </div>
  );
};
WishlistBook.propTypes ={
  wishliStBook:PropTypes.array.isRequired,
}

export default WishlistBook;