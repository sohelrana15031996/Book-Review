// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addRead } from "../../../LocalStorage/Read";


const BookDetails = () => {
  const bookdetails = useLoaderData();
  const { bookId } = useParams();


  const handleRead = (bookId)=>{
    addRead(bookId);
  }

  const bookDetail = bookdetails.find(bookDetail => bookDetail.bookId === bookId);

  const {bookName, author, image, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetail
  return (
    <div className="flex">
      <div className="w-1/2">
        <img className="w-full" src={image} alt="" />
      </div>
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
          </table>
        </div>
        <div className="space-x-6">
          <button onClick={()=>handleRead(bookId)} className="btn btn-ghost border">Read</button>
          <button className="btn btn-accent">Whislist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;