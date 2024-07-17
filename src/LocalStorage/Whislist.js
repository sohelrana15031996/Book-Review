import { getReadStorageValue } from "./Read";

const getWhishlistStorage = ()=>{
  const whislists = localStorage.getItem('wishlistItems');
  if(whislists){
    return JSON.parse(whislists);
  }
  return [];
}


const setWhislistStorage = (id)=>{
  const items = getWhishlistStorage();
  const readItems = getReadStorageValue();
  const existsOnWhislist = items.find(item => item==id);
  const existsOnReadlist = readItems.find(readItem =>readItem == id);
  if (!existsOnWhislist && !existsOnReadlist){
    items.push(id);
  }
  localStorage.setItem('wishlistItems', JSON.stringify(items));
}
export {getWhishlistStorage, setWhislistStorage};