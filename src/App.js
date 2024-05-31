import React from 'react';
import './App.css';
import Navbar from './Navbar';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import Rating from './Rating';

const images = [img1, img2, img3, img4, img5, img6];

const books = [
  { name: 'ONE-PUNCH MAN VOL', price: 40, newPrice: 19.65, photo: 1, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 33, newPrice: 24.99, photo: 2, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 34, newPrice: 223.99, photo: 3, rating: 3 },
  { name: 'ქვა ბესიკ ხარანაული უმ', price: 45, newPrice: 35.99, photo: 4, rating: 5 },
  { name: 'CHAINSAW MAN VOL. 05', price: 37, newPrice: 26.99, photo: 5, rating: 4 },
  { name: 'NARUTO 04', price: 28, newPrice: 18.99, photo: 6, rating: 3 },
  { name: 'ONE-PUNCH MAN VOL', price: 40, newPrice: 19.65, photo: 1, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 33, newPrice: 24.99, photo: 2, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 34, newPrice: 223.99, photo: 3, rating: 3 },
  { name: 'ქვა ბესიკ ხარანაული უმ', price: 45, newPrice: 35.99, photo: 4, rating: 5 },
  { name: 'CHAINSAW MAN VOL. 05', price: 37, newPrice: 26.99, photo: 5, rating: 4 },
  { name: 'NARUTO 04', price: 28, newPrice: 18.99, photo: 6, rating: 3 },
  { name: 'ONE-PUNCH MAN VOL', price: 40, newPrice: 19.65, photo: 1, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 33, newPrice: 24.99, photo: 2, rating: 4 },
  { name: 'ONE-PUNCH MAN VOL', price: 34, newPrice: 223.99, photo: 3, rating: 3 },
  { name: 'ქვა ბესიკ ხარანაული უმ', price: 45, newPrice: 35.99, photo: 4, rating: 5 },
  { name: 'CHAINSAW MAN VOL. 05', price: 37, newPrice: 26.99, photo: 5, rating: 4 },
  { name: 'NARUTO 04', price: 28, newPrice: 18.99, photo: 6, rating: 3 },
  { name: 'CHAINSAW MAN VOL. 05', price: 37, newPrice: 26.99, photo: 5, rating: 4 },
  { name: 'NARUTO 04', price: 28, newPrice: 18.99, photo: 6, rating: 3 },
];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="book-cards">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={images[book.photo - 1]} alt={`${book.name} ${book.photo}`} className="book-photo" />
            <h2>{book.name} {book.photo}</h2>
            <p className="old-price">Price: <span className="price-number">₾{book.price}</span></p>
            <p className="new-price">New Price: ₾{book.newPrice}</p>
            <Rating rating={book.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
