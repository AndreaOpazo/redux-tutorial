import Item from "./Item";
import { useSelector } from 'react-redux';

const ItemList = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="row">
      {
        items.map(item => {
          return <Item item={item} key={item.id} />;
        })
      }
    </div>
  )
};

export default ItemList;
