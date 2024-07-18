

const BookCard = ({book}) => {
  const{image,author, bookName, publisher, totalPages, category, rating} = book;
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

export default BookCard;