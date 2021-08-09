import React,{createContext,useReducer,useEffect}from 'react'
import { bookReducer } from '../reducers/bookReducer';
import uuid from 'uuid/dist/v1'


export const BookContext=createContext();

 const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[],()=>{
        const localData=localStorage.getItem('books');
        return localData ? JSON.parse(localData):[];
    });
     
      useEffect(() => {
         localStorage.setItem('books',JSON.stringify(books))
     }, [books]);

    return (
       <BookContext.Provider value={{books,dispatch}}>
          {props.children}
       </BookContext.Provider>
    )
}

export default BookContextProvider



