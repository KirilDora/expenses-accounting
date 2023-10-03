import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильние',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 8, 27),
    description: 'Мопед',
    amount: 450.50,
  },
  {
    id: 'c3',
    date: new Date(2021, 6, 11),
    description: 'Телевизор',
    amount: 200.00,
  }
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    })
    console.log(cost);
    console.log('App component');
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
