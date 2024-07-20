import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getReadStorageValue } from '../../../LocalStorage/Read';
import { Helmet } from 'react-helmet-async';
const PageToRead = () => {
  const booksData = useLoaderData();
  const readBookStorage = getReadStorageValue();
  const readStorageBooks = [];


  for (const id of readBookStorage) {

    const exists = booksData.find(exists => parseInt(exists.bookId) === id);
    if (exists) {
      readStorageBooks.push(exists);
    }

  }

  return (
    <div className='w-full h-80 lg:h-96 bg-slate-300 rounded-3xl'>
      <Helmet>
        <title>Page to Read</title>
      </Helmet>
      <ResponsiveContainer >
        <BarChart data={readStorageBooks}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" barSize={30} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PageToRead;