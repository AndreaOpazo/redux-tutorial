import { 
  ADD_TO_CART, 
  REMOVE_ITEM, 
  SUB_QUANTITY, 
  ADD_QUANTITY, 
  ADD_SHIPPING, 
  SUB_SHIPPING 
} from '../actions/actionsTypes/index';

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.";

const initialState = {
  items: [
      {id:1,title:'Winter body', desc: desc, price:110,img:'./images/item1.jpg'},
      {id:2,title:'Adidas', desc: desc, price:80,img: './images/item2.jpg'},
      {id:3,title:'Vans', desc: desc,price:120,img: './images/item3.jpg'},
      {id:4,title:'White', desc: desc, price:260,img:'./images/item4.jpg'},
      {id:5,title:'Cropped-sho', desc: desc, price:160,img: './images/item5.jpg'},
      {id:6,title:'Blues', desc: desc,price:90,img: './images/item6.jpg'}
  ],
  addedItems:[],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  let addedItem = state.items.find(item=> item.id === action.id);
  let new_items = state.addedItems.filter(item => item.id !== action.id)
  switch (action.type) {
    case ADD_TO_CART:
      let existed_item = state.addedItems.find(item => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price 
        };
      } else {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : state.total + addedItem.price
        };
      };

    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      return {
        ...state,
        addedItems: new_items,
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };

    case ADD_QUANTITY:
      addedItem.quantity += 1 
      return {
        ...state,
        total: state.total + addedItem.price
      };

    case SUB_QUANTITY:
      if(addedItem.quantity === 1){
        return {
          ...state,
          addedItems: new_items,
          total: state.total - addedItem.price
        }
      } else {
        addedItem.quantity -= 1
        return {
          ...state,
          total: state.total - addedItem.price
        }
      };

    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 6
    };

    case SUB_SHIPPING:
      return {
      ...state,
      total: state.total - 6
    };

    default: 
      return state;
  };
};

export default cartReducer;