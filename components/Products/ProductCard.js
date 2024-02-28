import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ prodObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prodObj.imageUrl} />
      <Card.Body>
        <Card.Title>{prodObj.title} - ${prodObj.price}</Card.Title>
        <Card.Text>
          {prodObj.description}
        </Card.Text>
        <Button variant="primary">Product Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  prodObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
