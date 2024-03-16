import React from 'react';
import { useCart } from 'react-use-cart';
import { BsCartCheck, BsCartX } from 'react-icons/bs';

const Cart = () => {
    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    return (                                                
        <div style={{ padding: '20px', marginTop: '50px' }}>
            <h1 style={{ textAlign: 'center', color: isEmpty ? 'black' : 'black' }}>
                {isEmpty ? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
                    <body>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                    <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ padding: '.5rem' }}>
                                            <img src={item.image} style={{ width: '4rem' }} alt={item.title} />
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                    <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h6>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Rs. {item.price}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Quantity ({item.quantity})</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} style={{ marginRight: '5px' }}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={{ marginRight: '5px' }}>+</button>
                                    <button onClick={() => removeItem(item.id)} style={{ marginRight: '5px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Remove Item</button>
                                </td>
                            </tr>
                        ))}
                    </body>
                </table>
            </div>
            {!isEmpty && (
                <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: isEmpty ? 'rgba(0,0,0,0.7)' : '#f9f9f9', color: isEmpty ? 'white' : 'black' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 20px' }}>
                        <div style={{ flex: 1 }}>
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </div>
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <button onClick={() => emptyCart()} style={{ marginRight: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                                <BsCartX size="1.7rem" style={{ marginRight: '5px' }} />
                                Clear Cart
                            </button>
                            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
                                <BsCartCheck size="1.7rem" style={{ marginRight: '5px' }} />
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
