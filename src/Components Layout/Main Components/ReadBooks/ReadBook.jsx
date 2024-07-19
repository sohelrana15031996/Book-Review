import PropTypes from 'prop-types';
// import BookCard from '../BookCard/BookCard';

const ReadBook = ({book}) => {
  console.log(book);
  console.log(typeof(book));

  // const { bookName, image, author, totalPages, category, publisher, rating } = bookObj;
  return (
    <div>
      {/* {
        book.map((book, idx)=> <BookCard key={idx} book={book}></BookCard>)
      } */}
    </div>
  );
};

ReadBook.propTypes ={
  booksObject:PropTypes.array.isRequired,
}

export default ReadBook;