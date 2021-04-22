import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/EmptyCart';
import { CartContext } from '../CartContext/CartProvider';

const Cart = () => {
	const { cart, clear, total } = useContext(CartContext);

	return (
		<Container>
			<div className='cart '>
				<div className='cart-header px-3'>
					<h2>My Cart</h2>
					<Link className='btn btn-continue ml-auto' to='/shop'>
						Continue shopping
					</Link>
				</div>
				<div className='cart-body'>
					{cart.length ? (
						cart.map((data) => (
							<CartItem key={data.id} item={data.item} quantity={data.quantity} />
						))
					) : (
						<EmptyCart />
					)}
				</div>
				<div className='cart-footer text-right'>
					<div className='clear-cart'>
						{cart.length ? (
							<button className='btn btn-dark' onClick={clear}>
								Clear cart
							</button>
						) : null}
					</div>
					<span className='d-block font-semi-bold font-size-2'>Total: ${total}</span>
					<button className='btn btn-dark'>CheckOut</button>
				</div>
			</div>
		</Container>
	);
};

export default Cart;
