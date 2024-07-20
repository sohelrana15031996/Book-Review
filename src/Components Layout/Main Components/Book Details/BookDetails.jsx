// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addRead } from "../../../LocalStorage/Read";
import { setWhislistStorage } from "../../../LocalStorage/Whislist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const BookDetails = () => {
  const bookdetails = useLoaderData();
  const { bookId } = useParams();
  const readNotify = () => toast("Added on your read booklist.");
  const whislistNotify = () => toast("Added on your whislist.");

  const handleRead = (bookId) => {
    addRead(bookId);
    readNotify();
  }
  const handleWhislist = (bookId) => {
    setWhislistStorage(bookId);
    whislistNotify()
  }

  const bookDetail = bookdetails.find(bookDetail => bookDetail.bookId === bookId);

  const { bookName, author, image, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetail
  return (
    <div className="flex flex-col lg:flex-row items-center my-24 space-y-16">
      {/* Book Image */}
      <div className="w-1/2">
        <img className="w-full" src={image} alt="" />
      </div>
      {/* Book Details here */}
      <div className="w-1/2 space-y-4">
        <h3 className="text-4xl font-bold">{bookName}</h3>
        <hr />
        <p>By: {author}</p>
        <hr />
        <p><span className="font-bold">Review: </span>{review}</p>
        <div className="space-x-4">
          <span className="font-bold">Tag</span> <button className="btn text-green-300 rounded-full">#{tags[0]}</button> <button className="btn text-green-300 rounded-full">#{tags[1]}</button>
        </div>
        <hr />
        <div>
          <table>
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td className="pl-20">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="pl-20">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="pl-20">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="pl-20">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-x-6">
          <button onClick={() => handleRead(bookId)} className="btn btn-ghost border">Read</button>
          <button onClick={() => handleWhislist(bookId)} className="btn btn-accent">Whislist</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;