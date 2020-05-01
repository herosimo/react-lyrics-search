import React, { useRef } from "react";

const InputSearch = (props) => {
  const textInput = useRef(null);
  return (
    <div className="row py-2">
      <div className="col d-flex justify-content-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onSearch(textInput.current.value);
          }}
        >
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label className="sr-only">Search Input</label>
              <input
                type="text"
                className="form-control mb-2"
                id="inlineFormInput"
                placeholder="Search millions lyrics"
                ref={textInput}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
