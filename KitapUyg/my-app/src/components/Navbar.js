import React ,{useContext}from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
     const {books}=useContext(BookContext)
    return (
       <div className="navbar">
           <h1>TYŞ KİTAP LİSTESİ</h1>
           <p>{books.length} kitabın var</p>

       </div>
    )
}
export default Navbar;