const getReadStorageValue = () => {
  const readItems = localStorage.getItem('readBooks');
  if (readItems) {
    return JSON.parse(readItems);
  }
  return [];
}

const addRead = (bookId) => {
  const items = getReadStorageValue();
  const exists = items.find(item => item==bookId);
  if(!exists){
    items.push(parseInt(bookId));
  }
 
  localStorage.setItem('readBooks', JSON.stringify(items));
}

export { addRead, getReadStorageValue };