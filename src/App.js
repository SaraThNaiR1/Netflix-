
import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import  { action, orginals} from './urls'
import './app.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/Rowpost/RowPost';

function App() {

  return (
    <div className="App">
      
      <Navbar/>
      <Banner/>
     <RowPost url={orginals} title='Netflix orginals'  /> 
     <RowPost url={action} title='Action' isSmall /> 
     <RowPost url={action} title='Web Series' isSmall /> 
    </div>

  );
}





export default App;