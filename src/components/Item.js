import { addToCart } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id))
  };

  return (
    <div className="card col s12 m4" key={item.id}>
      <div className="card-image">
        <img className="responsive-img" src={item.img} alt={item.title}/>
        <span className="card-title">{item.title}</span>
        <span 
          to="/" 
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => handleClick(item.id)}
        >
          <i className="material-icons">add</i>
        </span>
      </div>
      <div className="card-content">
        <p>{item.desc}</p>
        <p><b>Price: {item.price}$</b></p>
      </div>
    </div>
  )
};

export default Item;