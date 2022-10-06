export const setCartAdd = (item) => ({
  type: "cart/add",
  payload: item,
});

export const incCartItem = (id) => ({
  type: "cart/incItem",
  payload: id,
});

export const decCartItem = (id) => ({
  type: "cart/decItem",
  payload: id,
});

export const deleteCartItemById = (id) => ({
  type: "cart/deleteById",
  payload: id,
});

export const clearCart = () => ({
  type: "cart/clear",
});
