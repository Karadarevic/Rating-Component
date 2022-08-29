import React, { useState } from "react";
import "./App.css";

import Star from "./images/star.svg";
import Thanks from "./images/thanks.svg";

function App() {
  const [submited, setSubmited] = useState(false);
  const [rating, setRating] = useState([]);

  function setting() {
    if (rating != "") {
      setSubmited(true);
    } else {
      alert("Select a number");
    }
  }

  function clean() {
    setSubmited(false);
    setRating("");
  }

  console.log(rating);
  return (
    <>
      {!submited && (
        <div className="page">
          <div className="card">
            <div className="star">
              <img src={Star} alt="star" />
            </div>
            <h1>How did we do?</h1>
            <p>
              {" "}
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="buttons">
              <button onClick={() => setRating(1)}>1</button>
              <button onClick={() => setRating(2)}>2</button>
              <button onClick={() => setRating(3)}>3</button>
              <button onClick={() => setRating(4)}>4</button>
              <button onClick={() => setRating(5)}>5</button>
            </div>
            <button className="submit bt" onClick={() => setting()}>
              {" "}
              SUBMIT{" "}
            </button>
          </div>
        </div>
      )}

      {submited && (
        <div className="page">
          <div className="card thanks">
            <img src={Thanks} alt="thanks" />
            <span> You selected {rating} out of 5</span>
            <h1> Thank you! </h1>
            <p>
              {" "}
              We appreciate you taking the time to give a rating. If you ever
              need more support don't hesitate to get in touch
            </p>
            <button className="submit clean" onClick={() => clean()}>
              {" "}
              Rate again{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
