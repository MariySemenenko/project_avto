import React, { useState } from "react";
import makes from "../Makes/makes.json";
import { Container, Form, CarBrand, Price, Mileage, Input, Button, Select, InputNumber,  } from "./CarFilter.styled.jsx";

const CarFilter = ({onFilterChange}) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      minMileage,
      maxMileage,
    };
    onFilterChange(filters);

   
  };

  return (
    <Container className="container">
      <Form onSubmit={handleFormSubmit}>
        <CarBrand>
          <label>Car brand</label>
          <Select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Enter the text</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </Select>
        </CarBrand>
        <Price>
          <label>Price/ 1 hour</label>
          <Select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">To $</option>
            {[...Array(21).keys()].map((price) => (
              <option key={price} value={price * 10}>
                ${price * 10}
              </option>
            ))}
          </Select>
        </Price>
        <Mileage>
          <label>Сar mileage / km</label>
          <Input>
          <InputNumber
            type="number"
            value={minMileage}
            onChange={(e) => setMinMileage(e.target.value)}
            placeholder="From"
          />
          <InputNumber
            type="number"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.target.value)}
            placeholder="To"
          />
          </Input>
        </Mileage>
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default CarFilter;
