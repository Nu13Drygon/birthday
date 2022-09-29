import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)
  const [birthdays, setBirthdays] = useState(people.length)

  if(people.length === 0) {
    return (
      <div className="text-center">
        <h1>Removed All Users</h1>
        <button className="btn btn-outline-primary" onClick={() => setPeople(data)}>Repopulate</button>
      </div>
    )
  }
  

  return (
    <>
      <header className="text-center">
        <h1>{people.length} birthdays today</h1>
      </header>
      <div>
        <div className="container text-center">
          <div className="row">
            <List people={people} />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => setPeople([])}>Clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;
