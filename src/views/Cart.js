import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import Recipe from '../components/Recipe';

const Cart = () => {
  const addedItems = useSelector(state => state.cart.addedItems);

  return (
    <div className="container">
      <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {
              addedItems.length 
                ? 
                  <>
                    <CartList addedItems={addedItems} />
                    <Recipe />
                  </>
                : <p>Nothing.</p>
            }
          </ul>
      </div>  
    </div>
  )
}

export default Cart;