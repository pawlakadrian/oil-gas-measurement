import './App.scss';
import Header from './Header';
import React, {useState} from 'react';

function App() {
  const [values,set_values] = useState({
    proportion:'',
    gas:'',
})

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    const newValues = {
      ...values,
      [name]: value
    }
    set_values(newValues);

    handleOilInput(newValues);
  }

  const [oil, setOil] = useState(''); 

  const handleOilInput = (newValues) => {
    console.log(newValues);
    const {proportion, gas} = newValues;
    console.log(proportion);
    const oilCalc= ((gas*1000)/proportion);
    setOil(oilCalc);
  }

  return (
    <div className="App">
      <Header />
        <form className='calculation'>
          <div className='form-group'>
            <label htmlFor="#proportion">Proportion 1:</label>
            <input 
              id="#proportion" 
              type="number" 
              name="proportion"
              max="100"
              onChange = {handleInput}
              >
            </input>
          </div>
          <div className='form-group'>
            <label htmlFor="#gas">Amount of gas (l)</label>
            <input 
              id="#gas" 
              type="number" 
              name="gas"
              onChange={handleInput}
              >
              </input>
          </div>
          <div className='form-group'>
            <label htmlFor="#oil">Amount of oil (ml)</label>
            <input 
              id="#oil" 
              type="number" 
              name="oil"
              readOnly
              value={oil}
            >
            </input>
            </div>
        </form>
    </div>
  );
}

export default App;
