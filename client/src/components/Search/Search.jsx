import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PinMapFill } from "react-bootstrap-icons";

const Search = ({ findCity, getCurrentLocation }) => {
  let [city, setCity] = useState("");
  return (
    <section className="col-3">
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="cityName">Search City Name:</Form.Label>
            <Form.Control
              id="cityName"
              placeholder="Philadelphia"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Unit Type:</Form.Label>
            <Form.Select id="disabledSelect">
              <option>imperial</option>
              <option>metric</option>
              <option>standard</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex flex-wrap justify-content-between">
            <Button className="my-2" type="submit" onClick={(e)=>{
              e.preventDefault()
              // console.log(city)
              findCity(city)
              setCity=''
              }}> 
              Search
            </Button>
            <div>
              <Button className="my-2" onClick={getCurrentLocation}>
                <PinMapFill />
              </Button>
            </div>
          </div>
        </fieldset>
      </Form>
      <section id="searchedContainer"></section>
    </section>
  );
};
export default Search;
