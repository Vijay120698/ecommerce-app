import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/home.css';
import pic1 from '../images/apple.png';
import pic2 from '../images/S24.png';
import pic3 from '../images/n2a.png';
import pic4 from '../images/xmi.png';

const Electronics = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Iphone15', price: 99999, count: 0, image: pic1 },
    { id: 2, name: 'Samsung S23 Ultra', price: 89999, count: 0, image: pic2 },
    { id: 3, name: 'Nothing 2a', price: 29999, count: 0,image:pic3 },
    { id: 4, name: 'Xiaomi Note 13', price: 18999, count: 0 ,image:pic4 }
  ]);
  const navigate = useNavigate();
  

  const increment = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrement = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
    );
    setItems(updatedItems);
  };

  const total = () => {
    return items.reduce((acc, item) => acc + item.count * item.price, 0);
  };

  const goToPayments = () => {
    navigate("/payments", { state: { items, total: total() } });
  };

  return (
    <>
      <div className="topnav1">
        <div id="nav1">
          <a className="active" href="/">
            Home
          </a>
          <a href="/">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <div id="t1c">
          <div id="tittle" style={{ color: 'white' }}>
            e-Commerse Website
          </div>
          <div id="cart">Cart: {items.reduce((acc, item) => acc + item.count, 0)} Items</div>
        </div>
      </div>

      <div id="dis">
        <div className="pic">
          {items.map(item => (
            <div className="p1" key={item.id}>
              <div>
                <img src={item.image} width={'250px'} height={'250px'} alt={item.name} />
              </div>
              <div style={{ color: 'white' }}>
                {item.name} Price: ₹ {item.price}.
              </div>
              <div id="btn">
                <div className="btn" onClick={() => decrement(item.id)}>
                  -
                </div>
                <div className="btn">{item.count}</div>
                <div className="btn" onClick={() => increment(item.id)}>
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div id="btnpay" onClick={goToPayments}>
        Go to Payments
      </div>
    </>
  );
};

export default Electronics;
