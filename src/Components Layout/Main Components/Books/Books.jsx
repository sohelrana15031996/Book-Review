import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Books = ({ book }) => {
  const {bookId, bookName, tags, image, author, category } = book;
  return (
    <div>
      <Link to={`/home/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-actions justify-start px-10 pt-3">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
          </div>
          <div className="card-body px-10 pt-3">
            <h2 className="card-title">{bookName}</h2>
            <p>By: {author}</p>
            <hr className='px-10 pt-3' />
            <div>
              <p>{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Books;