import './App.css';

import { useState } from 'react';

import Register from './components/register';

import Login from './components/login';

function App() {
  const [currentForm,setCurrentForm] = useState('login');
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}  /> : <Register onFormSwitch={toggleForm}  />
        }
    </div>
  );
}

export default App;
