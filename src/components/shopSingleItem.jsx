import React, { Component } from 'react';
import Button from './common/button/button';
import SocialLinks from './common/socialLinks';
import YouMayAlsoLike from './youMayAlsoLike';

class ShopSingleItem extends Component {
  constructor() {
    super();
    this.state = {
      mainImage: '',
      images: [],
      currentItemId: '',
      currentItem: {},
    };
  }
  componentDidMount() {
    const currentItemId = +this.props.match.params.id;
    const item = this.props.items.find((i) => i._id === currentItemId);
    const { images, image } = item;

    const imagesRequired = images.map(
      (imgNo) => require(`../static/shop/hats/${image}_${imgNo}.jpg`).default
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

  handleMainImage = (img) => {
    this.setState({ mainImage: img });
  };

  render() {
    const { socialLinksData, items } = this.props;
    const item = this.state.currentItem;

    return (
      <div className="single-item ">
        <div className="d-flex">
          <div className="single__images-part w-50">
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
            <p className="item-info__price">{item.price}</p>
            <div className="item-info__options d-flex">
              <div>
                <label htmlFor="colors">Colors</label> <br />
                <select name="colors" id="colors">
                  <option value="1">Green</option>
                  <option value="2">Red</option>
                  <option value="3">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="sizes">Sizes</label> <br />
                <select name="sizes" id="sizes">
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
            </div>
            <Button outline>Add to cart</Button> <br />
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
