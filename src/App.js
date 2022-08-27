import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import CreateItem from './components/create/CreateItem';
import Toast from './components/features/Toast/Toast';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages/HomePage/HomePage'
import { getAllItems } from './utils/firebaseFunctions';
import { useDispatch } from "react-redux";
import { setItems } from './reduxtoolkit/features/itemsSlice'
function App() {
  const dispatch = useDispatch();
  const fetchitems = async () => {
    const data=await getAllItems()
    dispatch(setItems(data))
    
  }
  useEffect(() => {
    fetchitems()
  },[])
  return (
    <div className="App">
      <Navbar />
      {/* <Toast/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/createitem" element={<CreateItem/>}/>
        </Routes>
    </div>
  );
}

export default App;
