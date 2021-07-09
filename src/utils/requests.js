import axios from 'axios';

const catBaseUrl = 'http://localhost:4000/api/shop/categories';
const itemBaseUrl = 'http://localhost:4000/api/shop/items';
const userBaseUrl = 'http://localhost:4000/api/users';
const cartBaseUrl = 'http://localhost:4000/api/shop/cart';

export const getCategories = async () => {
  try {
    const categoriesResult = await axios.get(catBaseUrl);
    return categoriesResult.data;
  } catch (err) {
    console.log(err);
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

export const addToCart = async (userId, cartObj) => {
  try {
    const ats = await axios.post(`${cartBaseUrl}/${userId}`, cartObj);
    console.log(ats.data);
  } catch (err) {
    console.log(err);
  }
};
