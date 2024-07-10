import "./App.css";
// import something here
import phones from "./images/phones";
import technologies from "./images/technologies";

function App() {
  return (<div className="App">
    <div>
    {technologies.map((technology,index)=>{ 
    const key ='index-${index}';
      return <img src={technology}
      width="200" key={key}/>
    })}
      </div>
      <div>
        {Object.values(phones).map((phone,index)=>{      
          const key='index-${index}';
        return<img src={phone}
        width="200" key={key}/>
      })}
            </div>
      </div>
      );
  }
   export default App;
