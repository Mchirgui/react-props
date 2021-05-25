import './App.css';
import Button from 'react-bootstrap/Button';
import Profile from './Profile/profile';

function App() {
  
  let fn=prompt('write your full name')
  let prof=prompt('write your profession')
  
  if (fn!=="" & prof!=="" )
   {return (

    <div className="App">
      
      
       <Profile fullName={fn} profession={prof} />
    </div> )} else
{ 
  return (
      <Profile></Profile>
    )}
    }
export default App;