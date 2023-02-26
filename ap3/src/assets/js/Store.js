import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../data/storeItems.json";
const Store = () => {
  return (
    <>
      <h1>Nous produit</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;