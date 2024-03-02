import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import { addProductToCart, deleteProductFromCart } from '../../utils/data/ProductData';

const defaultFunc = () => {};

function ProductCard({
  context, prodObj, onUpdate, orderId,
}) {
  const router = useRouter();

  const deleteProductFromTheCart = () => {
    if (window.confirm(`Delete ${prodObj.title}?`)) {
      deleteProductFromCart(orderId, prodObj.id).then(() => onUpdate());
    }
  };

  const addProductToTheCart = () => {
    addProductToCart(orderId, prodObj.id).then(() => router.push('/cart'));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prodObj.imageUrl} />
      <Card.Body>
        <Card.Title>{prodObj.title} - ${prodObj.price}</Card.Title>
        <Card.Text>
          {prodObj.description}
        </Card.Text>
        {context === 'cart' ? <Button variant="danger" onClick={deleteProductFromTheCart}>Delete</Button> : <><Button variant="primary">Product Details</Button><Button variant="success" onClick={addProductToTheCart}>Add Product to Cart</Button></>}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  context: PropTypes.string,
  prodObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func,
  orderId: PropTypes.number,
};

ProductCard.defaultProps = {
  context: 'notCart',
  onUpdate: defaultFunc,
  orderId: 0,
};
