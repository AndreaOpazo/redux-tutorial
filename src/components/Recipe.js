import React, { useRef, useLayoutEffect } from 'react';
import { addShipping, substractShipping } from '../store/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const Recipe = () => {
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  
  const shipping = useRef(null);
  useLayoutEffect(() => {
    const shippingInput = shipping.current;
    return () => {
      if (shippingInput.checked) {
        dispatch(substractShipping());
      };
    }
  }, [dispatch]);

  const handleChecked = (e)=>{
    e.target.checked ? dispatch(addShipping()) : dispatch(substractShipping());
  }

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={shipping} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item"><b>Total: {total} $</b></li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  )
};

export default Recipe;