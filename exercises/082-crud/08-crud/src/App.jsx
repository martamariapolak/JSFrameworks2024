// Import something here
import { useState } from "react";
import "./App.css";


const GroceryList = () => {
  const [list, setList] = useState([
    { name: "Bananas", cost: 1.99 },
    { name: "Oranges", cost: 1.99 },
    { name: "Apples", cost: 0.99 }
  ]);
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
            />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success" onClick={(e) => {
              e.preventDefault();
              setList([...list, { name: "AAA", cost: 1.23 }]);
            }}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              list.map((p1, i1) => {
                return (
                  <tr key={`table-row-${i1}`}>
                    <td>{p1.name}</td>
                    <td>${p1.cost}</td>
                    <td>
                      <button aria-label="Delete" title="Delete" onClick={ () => {
                        setList(list.filter((p2, i2) => i1 != i2));
                      }} >
                        &times;
                      </button>
                    </td>
                  </tr>
                );
              })
            }

          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {list.reduce((a, c) => a + c.cost, 0)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={ () =>  setList([]) }>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
