import React, { Component } from 'react';
import Button from './common/button/button';
import SocialLinks from './common/socialLinks';
import YouMayAlsoLike from './youMayAlsoLike';
import Price from './common/price';

import { getSingleItem, addToCart } from '../utils/requests';
import { toast } from 'react-toastify';

class ShopSingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      images: [],
      currentItemId: '',
      currentItem: {},
      selectedSize: 'small',
      selectedColor: 'green',
      currentUserId: '',
    };
  }
  setCurrentUserId() {
    const currentUserId = sessionStorage.getItem('loggedInUser');
    if (currentUserId) {
      this.setState({ currentUserId: currentUserId });
    }
  }

  async componentDidMount() {
    this.setCurrentUserId();
    const currentItemId = this.props.match.params.id;
    const item = await getSingleItem(currentItemId);

    const { images, image } = item;

    const imagesRequired = images.map(
      (imgNo) => require(`../static/shop/${image}${imgNo}.jpg`).default
    );

    // set default image
    // main imaage component
    // onclick to show foto

    this.setState({
      images: imagesRequired,
      mainImage: imagesRequired[2],
      currentItemId,
      currentItem: item,
    });
  }
  async updateItemQuantityAfterAddToCart() {
    // get singleItem
    // atnaujinti state su nauju item
    // ivykdyti funkcija kai turim sekmes pranesima

    const single = await getSingleItem(this.props.match.params.id);
    this.setState({ currentItem: single });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUserId !== sessionStorage.getItem('loggedInUser')) {
      console.log('update');
      this.setCurrentUserId();
    }
  }

  handleMainImage = (img) => {
    this.setState({ mainImage: img });
  };

  handleSize = (e) => {
    this.setState({ selectedSize: e.target.value });
    toast.success(`Size is now ${e.target.value}`);
  };

  handleColor = (e) => {
    this.setState({ selectedColor: e.target.value });
    toast.success(`Color is now ${e.target.value}`);
  };

  handleAddToCart = async () => {
    const { currentUserId, currentItem } = this.state;
    // send item to backend to add to cart
    const ats = await addToCart(currentUserId, currentItem);
    // pasitikrinam ar gavom atsakyma
    if (!ats) {
      toast.error('error adding item');
    } else {
      toast.success('item added to cart');
      this.props.onCartCount();
      this.updateItemQuantityAfterAddToCart();
    }
  };

  render() {
    const { socialLinksData, items } = this.props;
    const { currentItem: item } = this.state;

    return (
      <div className="single-item ">
        <div className="d-flex single__image-desc">
          <div className="single__images-part w-50 pos-rel">
            {item.salePrice && <span className="sale">Sale</span>}

            <img
              className="single__main-image"
              src={this.state.mainImage}
              alt="main item"
            />
            <div className="single__photos d-flex flex-wrap">
              {this.state.images.map((img) => (
                <img
                  className="single__item-image"
                  onClick={() => this.handleMainImage(img)}
                  key={img}
                  src={img}
                  alt="small item"
                />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">{item.title}</h2>
            <Price salePrice={item.salePrice}>{item.price}</Price>
            <div className="item-info__options d-flex">
              <div>
                <label htmlFor="colors">Sizes</label> <br />
                <div className="item-qty">
                  <select
                    onChange={this.handleSize}
                    value={this.state.selectedSize}
                    name="colors"
                    id="colors"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="sizes">Colors</label> <br />
                <select
                  onChange={this.handleColor}
                  value={this.state.selectedColor}
                  name="colors"
                  id="colors"
                >
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
              <div>
                <h4>In Stock</h4>
                <p>{item.quantity}</p>
              </div>
            </div>
            <Button onClick={this.handleAddToCart} outline>
              Add to cart
            </Button>{' '}
            <br />
            <Button>Buy it now</Button>
            <SocialLinks titles socialLink={socialLinksData} />
          </div>
        </div>
        <p className="single-item__description">
          Featuring the HUNTER distressed baseball cap with Sergeant Pepper
          embroidered logo. This baseball cap is cut to have a snug fit with a
          curved peak and the adjustable strap closure ensures a comfortable
          fit. We have crafted the cap from a high quality 100% cotton twill
          that has been treated with a heavy enzyme wash, rip and repair
          detailing and distressing for an authentic vintage look. There is a
          raised Sergeant embroidery on the front crown. Finer details include a
          matching sweatband and the tonal embroidered eyelets for ventilation.
        </p>
        <YouMayAlsoLike relatedItems={items} />
      </div>
    );
  }
}

export default ShopSingleItem;

// YouMayAlsoLike component sukuriam komponenta
// itraukiam i singleItem componenta
// viduje atvaizduoja viena eile ShopItem componentus
// nuoroda veikia taip pat kaip ShopList
// footer component. pasirasyti jsx
// footer css
// footer responsive
