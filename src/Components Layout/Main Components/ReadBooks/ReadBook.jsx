import PropTypes from 'prop-types';

const ReadBook = ({bookObj}) => {
  const { bookName, image, author, totalPages, category, publisher, rating } = bookObj;
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p className="py-6">
            By: {author}
          </p>

          {/* <div className="flex justify-between items-center gap-4">
            <div>
              <span className="font-bold">Tag</span> <button className="btn text-green-300 rounded-full">#{tags[0]}</button> <button className="btn text-green-300 rounded-full">#{tags[1]}</button>
            </div>
            <div>
              <p>Year of publication: {yearOfPublishing}</p>
            </div>
          </div> */}

          {/* <div className="flex gap-4">
            
            
          </div> */}

          <div>
            <p>Publisher: {publisher}</p>
            <p>Pages: {totalPages}</p>
          </div>
          <hr />

          <div>
            <button>Category: {category}</button>
            <button>Ratings: {rating}</button>
            <button>Book Details</button>
          </div>

        </div>
      </div>
    </div>
  );
};

ReadBook.propTypes ={
  bookObj:PropTypes.object.isRequired,
}

export default ReadBook;