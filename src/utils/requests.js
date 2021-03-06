import axios from 'axios';

const catBaseUrl = 'http://localhost:4000/api/shop/categories';
const itemBaseUrl = 'http://localhost:4000/api/shop/items';
const userBaseUrl = 'http://localhost:4000/api/users';
const cartBaseUrl = 'http://localhost:4000/api/shop/cart';
// const allCatUrl = 'http://localhost:4000/api/shop/category/items';

export const getCategories = async () => {
  try {
    const categoriesResult = await axios.get(catBaseUrl);
    return categoriesResult.data;
  } catch (err) {
    console.log(err);
  }
};
export const getItemsByCategory = async (catId) => {
  try {
    const result = await axios.get(`${itemBaseUrl}/category/${catId}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getItems = async () => {
  try {
    const itemsResult = await axios.get(itemBaseUrl);
    return itemsResult.data;
  } catch (err) {
    console.log(err);
  }
};
export const getSingleItem = async (singleItemId) => {
  try {
    const itemsResult = await axios.get(itemBaseUrl + '/' + singleItemId);
    return itemsResult.data;
  } catch (err) {
    console.log(err);
  }
};
export const getUsers = async () => {
  try {
    const usersResult = await axios.get(userBaseUrl);
    return usersResult.data;
  } catch (err) {
    console.log(err);
  }
};

// add to cart

export const addToCart = async (userId, shopItemObj) => {
  try {
    const ats = await axios.post(`${cartBaseUrl}/${userId}`, shopItemObj);
    console.log(ats.data);
    return ats.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCartItems = async (userId) => {
  // console.log('trying to get all itmes');
  const response = await axios.get(`${cartBaseUrl}/${userId}`);
  return response.data;
};

export const getCartCount = async (userId) => {
  const response = await axios.get(`${cartBaseUrl}/count/${userId}`);
  // console.log('userID', userId);
  return response.data;
};

export const sendUpdateQty = async (userId, cartItemId, newQty) => {
  console.log('sendUpdateQty');
  console.log(userId, cartItemId, newQty);

  // siusti PUT rrrrq /api/shop/cart/:userId

  try {
    const response = await axios.put(`${cartBaseUrl}/${userId}`, {
      cartItemId,
      newQty,
    });
    console.log(response.data);
    return true;
  } catch (err) {
    console.log('err', err.message);
  }
};

export const removeItem = async (userId, cartItemId) => {
  try {
    const deleteResponse = await axios.put(`${cartBaseUrl}/delete/${userId}`, {
      cartItemId,
    });
    return deleteResponse.data;
  } catch (err) {
    console.log(err);
  }
};
