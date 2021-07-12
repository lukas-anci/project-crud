import React, { Component } from 'react';
import axios from 'axios';
class AddItemForm extends Component {
  state = {
    images: [1, 2, 3, 4, 5],
    formData: {
      title: '',
      price: '',
      salePrice: '',
      image: '',
      color: '',
      size: '',
      quantity: '',
      sku: '',
      category: '',
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/shop/items/new', this.state.formData)
      .then((res) => {
        console.log(res);
      });
  };
  handleChange = ({ target }) => {
    const formDataCopy = { ...this.state.formData };
    formDataCopy[target.name] = target.value;
    this.setState({ formData: formDataCopy });
  };
  render() {
    const {
      title,
      price,
      salePrice,
      image,
      color,
      size,
      quantity,
      sku,
      category,
    } = this.state.formData;
    return (
      <div>
        <form
          autoComplete="off"
          method="post"
          onSubmit={this.handleSubmit}
          action=""
        >
          <label htmlFor="title">Title</label> <br />
          <input
            onChange={this.handleChange}
            value={title}
            type="text"
            name="title"
            placeholder="title"
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            value={price}
            onChange={this.handleChange}
            type="number"
            name="price"
            id=""
            placeholder="price"
          />{' '}
          <br />
          <label htmlFor="price">Sale Price</label>
          <br />
          <input
            value={salePrice}
            onChange={this.handleChange}
            type="number"
            name="salePrice"
            id=""
            placeholder="sale price"
          />
          <br />
          <label htmlFor="price">Image</label>
          <br />
          <input
            value={image}
            onChange={this.handleChange}
            type="text"
            name="image"
            id=""
            placeholder="image"
          />
          <br />
          <label htmlFor="color">Color</label>
          <br />
          <select value={color} onChange={this.handleChange} name="color" id="">
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
          <br />
          <label htmlFor="size">Size</label>
          <br />
          <select value={size} onChange={this.handleChange} name="size" id="">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          <br />
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input
            value={quantity}
            onChange={this.handleChange}
            type="number"
            name="quantity"
            id=""
          />
          <br />
          <label htmlFor="images">Images</label>
          <br />
          <label htmlFor="sku">Sku</label>
          <br />
          <input
            value={sku}
            onChange={this.handleChange}
            type="text"
            name="sku"
            id=""
            placeholder="sku"
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            value={category}
            onChange={this.handleChange}
            type="text"
            name="category"
            id=""
            placeholder="category"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;

// const newItemData = {
//     title: 'Green hat',
//     price: 99.99,
//     salePrice: 49.9,

//     image: 'acc_hat_01_',
//     color: 'green',

//     sizeQty: [
//       { size: 'small', quantity: 10 },
//       { size: 'medium', quantity: 10 },
//       { size: 'large', quantity: 10 },
//     ],
//     images: [1, 2, 3, 4, 5],
//     sku: 'hat_01',
//     category: '60e593ada7aa681d4846ad99',
//   };
