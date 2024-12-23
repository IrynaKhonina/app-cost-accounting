
import {Cost} from "./components/Cost";
import "./components/Cost.css"


function App() {

  const costs =[
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72
    },
    {
      date: new Date(2021, 4, 1),
      description: "Джинсы",
      amount: 49.99
    }
  ]

  return (
    <div>
     <h1>Заметки</h1>
      <div className="costs">
        <Cost costs = {costs}
        />

      </div>

    </div>
  );
}

export default App;
