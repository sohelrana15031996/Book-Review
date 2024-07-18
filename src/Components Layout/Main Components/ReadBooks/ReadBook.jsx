import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';

const ReadBook = ({booksObject}) => {
  console.log(booksObject);
  console.log(typeof(booksObject));

  // const { bookName, image, author, totalPages, category, publisher, rating } = bookObj;
  return (
    <div>
      {
        booksObject.map((book, idx)=> <BookCard key={idx} book={book}></BookCard>)
      }
    </div>
  );
};

ReadBook.propTypes ={
  booksObject:PropTypes.array.isRequired,
}

export default ReadBook;