import React from "react";

const Search = (currentLocation)=>{

    return(
        <section className="col-3">
      

        {/* <!-- Search Container --> */}
        <form className="border-bottom-dark">
          <div className="form-group mb-3">
            <label htmlFor="cityText" className="form-label h3"
              >Search City Name:</label
            >
            <input
              type="text"
              className="form-control"
              id="cityText"
              aria-describedby="citySelectHelp"
            />
            <label htmlFor="units" className="htmlForclassNamem-label h5">Unit Type: </label>
            <select name="units" id="units" className="p-1 mt-2">
              <option value="imperial">Imperial</option>
              <option value="metric">Metric</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <button type="submit" className="col-12 btn btn-primary" id="subBtn">
            Search
          </button>
        </form>
        <section id="searchedContainer"></section>
      </section>
    )
}
export default Search