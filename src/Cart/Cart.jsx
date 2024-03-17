import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const CartPage = () => {
  const { items, totalItems, cartTotal, updateItemQuantity, removeItem } = useCart();

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {totalItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: 
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    {item.quantity}
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </p>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Cart Total: ${cartTotal}</p>
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
