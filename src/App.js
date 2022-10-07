
import './App.css';
import { Routes,Route } from 'react-router';
import Search from './component/Search';
import Detail from './component/Detail';
import Main from './view/Main';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Detail/>}/>
    </Routes>
    </>
  );
}

export default App;
