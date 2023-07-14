import React from "react";
import { useEffect } from "react";
import InputField from "./InputField";
import InputSelect from "./InputSelect";
import { Form,Row,Col } from "react-bootstrap";
import MyButton from "./Button";
import "./SearchPackage.css";

const SearchPackage = () => {
  const type = [
    "Cultural",
    "Adventure",
    "Honeymoon",
    "Wildlife",
    "Luxury",
    "Historical",
    "Beach",
    "Family",
  ];
  return (
    <div className="search-container">
      <Form className="search-pack-form">
        <Row className="align-items-center">
          <Col md={3}>
            <InputField
              label="Enter Keyword to search"
              id="searchid"
              type="text"
              name="location"
            />
          </Col>
          <Col md={3}>
            <InputSelect
              selectTitle="Choose the type"
              name="type"
              options={type}
              id="type"
              label="Type of package"
              title="type of package"
            />
          </Col>
          <Col md={2}>
            <InputField
              label="Min Price"
              id="min_price"
              type="number"
              name="minPrice"
            />
          </Col>
          <Col md={2}>
            <InputField
              label="Max Price"
              id="max_price"
              type="number"
              name="maxPrice"
            />
          </Col>
          <Col md={2}>
            <MyButton
              type="submit"
              variant="primary"
              className="search-btn"
              name="search"
              value="Search"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchPackage;
