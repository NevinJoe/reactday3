import { Route, Routes } from 'react-router-dom';
import './App.css';
import Two from './components/Two';
import One from './components/One';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';

function App() {
  return (
    <div className="App">
      {/* <One/> */}
      <Two/>
      <Routes>
        <Route path='/' element={<One/>}/>
        <Route path='/s' element={<Three/>}/>
        <Route path='/t' element={<Four/>}/>
        <Route path='/a' element={<Five/>}/>
      </Routes>
    </div>
  );
}

export default App;
