import './NewCost.css';
import CostForm from './CostForm';
import { useState } from 'react';

const NewCost = (props) => {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.onAddCost(costData);
    setIsFormVisible(false);
  }

  const inputCostDataHanler = () => {
    setIsFormVisible(true)
  }

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  }

  return(
    <div className="new-cost">
      {!isFormVisible && <button onClick={inputCostDataHanler}>Добавить Новый Расход</button>}
      {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
    </div>
  )
}

export default NewCost;