import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Foot = () => {
  return (
    <footer className="bg-dark pb-2 pt-3">
      <div>
        <div className="card w-25">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item: 646</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-footer">Card footer</div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
