import toast from "react-hot-toast";

// get data from localStorage function
export const getDataFromLocalStorage = (item) => {
  let localData = localStorage.getItem(item);
  if (localData) {
    return JSON.parse(localData);
  }
  return [];
};

// saved to localStorage

export const saveToLocalStorage = (item, book, message) => {
  let books = getDataFromLocalStorage(item);
//   console.log(books);
  const isExists = books.find((b) => b.bookId == book.bookId);
  if (isExists) {
    return toast.error(`Already in ${message} List!!!`);
  } else {
    books.push(book);
    localStorage.setItem(item, JSON.stringify(books));
    toast.success(`Item added to ${message} list`);
  }
};

//delete bookmarks

// export const deleteDataFromLocalStorage = (id) => {
//   let books = getDataFromLocalStorage();
//   const isExists = books.find((b) => b.id == id);
//   if (isExists) {
//     const newBooks = books.filter((b) => b.id != id);
//     localStorage.setItem("books", JSON.stringify(newBooks));
//     toast.success("removed from bookmark!");
//   }
//   else{
//     toast.error("Bookmark isn't exists!")
//   }
// };
