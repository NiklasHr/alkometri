import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("mies");
  const [alcometer, setAlcometer] = useState(0);

  function calculateAlcometer(e) {
    e.preventDefault();
    let result = 0;
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    if (gender === "mies" && time >= 0 && bottles >= 0 && weight >=0) {
      result = (grams - (burning * time)) / (weight * 0.7);
    } else if (gender === "nainen" && time >= 0 && bottles >= 0 && weight >=0) {
      result = (grams - (burning * time)) / (weight * 0.6);
    } else {
      result = 0;
    }

    if (result >= 0 && result < Infinity) {
      setAlcometer(result);
    } else {
      setAlcometer(0);
    }
  }

  return (
    <form onSubmit={calculateAlcometer}>
      <h3>Laske veren alkoholipitoisuus</h3>
      <div>
        <label>Paino</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Pullot</label>
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} />
      </div>
      <div>
        <label>Aika</label>
        <input type="number" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Sukupuoli</label>

        <input type="radio" name="gender" value="mies" 
        defaultChecked onChange={e => setGender(e.target.value)}/>Mies

        <input type="radio" name="gender" value="nainen" 
        onChange={e => setGender(e.target.value)}/>Nainen
      </div>
      <div class="results">
        <label>Alkoholipitoisuus: </label>
        <output>
          {alcometer.toFixed(2)}
        </output>
      </div>
      <button type="submit" onClick={calculateAlcometer}>Calculate</button>
    </form>
  );
}

export default App;
