import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subtractQuantity } from '../store/actions/cartActions';
import { useDispatch } from 'react-redux';

const CartList = ({ addedItems }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  }
  const handleAddQuantity = (id)=>{
    dispatch(addQuantity(id));
  }
  const handleSubtractQuantity = (id)=>{
    dispatch(subtractQuantity(id));
  }

  return (
    <>
      {
        addedItems.map(item => (
          <li className="collection-item" key={item.id}>
            <div className="item-img"> 
              <img src={item.img} alt={item.img} className="responsive-img"/>
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p> 
              <p>
                <b>Quantity: {item.quantity}</b> 
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i 
                    className="material-icons"
                    onClick={() => handleAddQuantity(item.id)}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i 
                    className="material-icons" 
                    onClick={() => handleSubtractQuantity(item.id)}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button 
                className="waves-effect waves-light btn pink remove" 
                onClick={() => handleRemove(item.id)}
              > 
                Remove
              </button>
            </div>
          </li>
        ))
      }
    </>
  )
};

export default CartList;