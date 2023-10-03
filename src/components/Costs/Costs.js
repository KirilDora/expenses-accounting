import { useState } from "react";
import Card from "../UI/Card";
import "./Costs.css"
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredCosts = props.costs.filter(cost => {
    return selectedYear === cost.date.getFullYear().toString()
  });


  return(
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
      <CostsDiagram costs={filteredCosts}/>
      <CostList costs={filteredCosts}/>
    </Card>
  )
}

export default Costs;