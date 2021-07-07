import css from './price.module.css';
const Price = (props) => {
  return (
    <p className="price">
      {props.salePrice ? (
        <div>
          <span className={css.sale}>{formatPrice(props.children)}</span>{' '}
          <span className={css.color}>Sale price: {props.salePrice} eur</span>
        </div>
      ) : (
        <span>{formatPrice(props.children)}</span>
      )}
    </p>
  );
};

const formatPrice = (price) => {
  return price + ' eur';
};
export default Price;
