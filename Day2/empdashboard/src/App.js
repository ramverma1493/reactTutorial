import './App.css';
import Header from './components/Header';

import EmpCard from './components/EmpCard';
import Dept from './components/Dept';
import Condition from './components/Condition';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <EmpCard name='Rohan' age='21' sal ='30K'/>
      <Dept name='Quality Check' bug='10 Lakh' temp='30'/>
      <Condition login={true}/>
    </div>
  );
}

export default App;
