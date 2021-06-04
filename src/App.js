import './App.css';
import React from 'react';
import Nutrition from './Components/Nutrition/NutritionPage'
import Login from './Components/Login'
import FoodLog from './Components/Nutrition/FoodLog'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
  
<BrowserRouter>
                
{/* <Link className="links" to='/foodlog'>Food Log</Link> */}


<Switch>
    <Route exact path="/" component={Login} />

    <Route path="/nutrition" component={Nutrition} />
    <Route path="/foodlog" component={FoodLog} />

</Switch>


</BrowserRouter>

)
}
