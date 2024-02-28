import React, { useEffect, useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import ProductCard from '../components/Products/ProductCard';
import { getAllProducts, searchProducts } from '../utils/data/ProductData';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchInput).then((response) => {
      const searchArray = response.map((member) => member);
      setProducts(searchArray);
    });
  };

  return (
    <>
      <div className="search">
        <Form onSubmit={handleSubmit} inline="true">
          <Row>
            <Col style={{ marginLeft: '0.1rem', paddingRight: '0' }}>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                name="searchInput"
                onChange={handleChange}
                value={searchInput}
                required
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="product-page">
        {products.map((product) => <ProductCard key={product.id} prodObj={product} />)}
      </div>
    </>
  );
}

export default ProductsPage;
