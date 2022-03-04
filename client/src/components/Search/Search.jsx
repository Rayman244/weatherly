import React from "react";

const Search = ()=>{

    return(
        <section class="col-3">
        {/* <!-- Search Container --> */}
        <form class="border-bottom-dark">
          <div class="form-group mb-3">
            <label for="cityText" class="form-label h3"
              >Search City Name:</label
            >
            <input
              type="text"
              class="form-control"
              id="cityText"
              aria-describedby="citySelectHelp"
            />
            <label for="units" class="form-label h5">Unit Type: </label>
            <select name="units" id="units" class="p-1 mt-2">
              <option value="imperial">Imperial</option>
              <option value="metric">Metric</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <button type="submit" class="col-12 btn btn-primary" id="subBtn">
            Search
          </button>
        </form>
        <section id="searchedContainer"></section>
      </section>
    )
}
export default Search