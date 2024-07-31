// Import something here
import {useState}from "react";
import "./App.css";


const GroceryList = () => {
  const[groceryName,setGroceryName]=useState("");
  const[cost,setCost]=useState(""); 
  const [list,setList]=useState([  {groceryName:"bananas",cost:1.99},
  {groceryName:"apples",cost:10.5}   
  ]);
  const[hasError,setHasError]=useState(false);
  
 
  const addItem=()=>{const newItem={groceryName:groceryName,cost:cost};
  setList([...list,newItem])};

  const handleSubmit=(e)=>{e.preventDefault();
    if(cost && groceryName)
      { addItem();
      setHasError(false);}
    else
      {setHasError(true);
      setGroceryName("");
      setCost("");
      setHasError(false);
    }
  }
  const deleteItem=indexToDelete=>{setList(list.filter((item,index) =>index!==indexToDelete ))};
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className={
                  hasError && !groceryName?"is-invalid form-control":"form-control"
              }
              
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={groceryName}
              onChange={(e)=>setGroceryName(e.target.value)}
            />
            {hasError &&
            !groceryName &&(
            <div className="invalid-feedback">
              <small>Enter the name</small>
            </div>
            )}
          </div>
          <div className="col">
            <input
              className={
              hasError && !cost ?"is-invalid form-control":"form-control"  
              }
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={cost}
              onChange={(e)=>setCost(e.target.value)}
            />
            {hasError &&
            !cost &&(
            <div className="invalid-feedback"style="background-color:red;">
              Enter the cost
            </div>
            )}
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
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
            {list.map((item,index)=>{
             
            return( <tr key={`item-$(index)`}>
                <td>{item.groceryName}</td>
                <td>{item.cost}</td>
                <td >
                  <button aria-label="Delete" title="Delete"onClick={(e)=>deleteItem(index)} >delete
                    &times;
                  </button>
                </td>
              </tr>
            )
             })}
        </tbody>
      </table>
        <p className="lead">
          <strong>Total Cost:  {list.reduce((accumulator,item)=>accumulator+parseFloat(item.cost),0).toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={(e)=>setList([])}>
          
            Clear
          </button>
        </div>
      </div>
    </div>  
  );
};

export default GroceryList;
