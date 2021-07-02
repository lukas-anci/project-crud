import React, { Component } from 'react';
import Button from './common/button/button';
import SocialLinks from './common/socialLinks';

class ShopSingleItem extends Component {
  render() {
    const { socialLinksData } = this.props;
    return (
      <div className="single-item ">
        <div className="d-flex">
          <div className="single__images-part w-50">
            <img
              className="single__main-image"
              src="https://picsum.photos/640/480"
              alt="main item"
            />
            <div className="single__photos d-flex flex-wrap">
              {[1, 2, 3].map((img) => (
                <img
                  key={img}
                  src="https://picsum.photos/100/100"
                  alt="small item"
                />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">title</h2>
            <p className="item-info__price">300 eur</p>
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

            <Button outline>Add to cart</Button>
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
      </div>
    );
  }
}

export default ShopSingleItem;