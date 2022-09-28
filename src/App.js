import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)
  

  return (
    <div className="text-center">
      <header className="">
        <p className="fs-1">{people.length} birthdays today</p>
        <div className="container">
          <div className="row">
            <List people={people} />
          </div>
        </div>
      </header>
      <button type="button" className="btn btn-outline-primary" onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
