import { 
  ADD_TO_CART, 
  REMOVE_ITEM, 
  SUB_QUANTITY, 
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING
} from './actionsTypes/index';

export const addToCart = (id) => {
  return {
    id, 
    type: ADD_TO_CART
  }
}

export const removeItem = (id) => {
  return{
    id,
    type: REMOVE_ITEM
  }
}

export const subtractQuantity = (id) => {
  return{
    id,
    type: SUB_QUANTITY
  }
}

export const addQuantity = (id) => {
  return{
    id,
    type: ADD_QUANTITY 
  }
}

export const addShipping = () => {
  return{
    type: ADD_SHIPPING
  }
}

export const substractShipping = () => {
  return{
    type: SUB_SHIPPING 
  }
}