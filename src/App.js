import React from 'react';
import NavBar from './components/navBar/NavBar'
import {action,comedy,originals,animation,crime,family,romance,horror} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost'
import './App.css'


function App() {
  return (
    <div className="app">
       <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/>
       <RowPost url={action} title='Action' isSmall/>
       <RowPost url={animation} title='Animation' isSmall/>
       <RowPost url={comedy} title='Comedy' isSmall/>
       <RowPost url={crime} title='Crime' isSmall/>
       <RowPost url={family} title='Family' isSmall/>
       <RowPost url={romance} title='Romance' isSmall/>
       <RowPost url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;