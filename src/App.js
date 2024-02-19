import logo from './logo.svg';
import './App.css';
import Docs from './components/docs.js';
import EditDocs from './components/EditDocs.js';
import {app,database} from './firebaseConfig.js';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Docs database={database}/>}/>
    <Route path = "/editDocs/:id" element={<EditDocs database={database}/>}/>
    </Routes>
  );
}

export default App;
