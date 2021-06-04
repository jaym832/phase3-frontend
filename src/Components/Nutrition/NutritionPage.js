import React from 'react';
import FoodLog from './FoodLog'
import axios from 'axios';


import {
    Link
  } from "react-router-dom";

class NutritionPage extends React.Component{
    state={
           food:{
               foodType:'Breakfast',
               user:''
           },
            allMeals:[],
            allUsers:[]
            
    }

    componentDidMount=()=>{

   



        // axios.get(`http://localhost:9292/user/`)
        // .then(res => {
        //   const persons = res.data;
        //   this.setState({ allUsers:persons.user[0].id });
        // })

    }

    setFood=(event)=>{
        this.setState({food:{
            ...this.state.food,
            [event.target.name]:event.target.value
        }
        })

   }

   saveFood=(food)=>{
    // event.preventDefault();
    // const food= this.state.food
    // this.setState({
    //     allMeals:[...this.state.allMeals,food]
    // })



        console.log(food)

        let postOptions={
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(food)

          }
          fetch("http://localhost:9292/meal/",postOptions)
          .then(res=>res.json())
          .then(data=> console.log(data))


    


   }
    
    
    render(){

        return (
         <div className='formdiv'>

             <h1>Nutrition</h1>
        
        <form  >
        <select name='foodType' onChange={this.setFood}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
        
        
        
        </select>
        <input type="text" placeholder="Name" name='name' onChange={this.setFood}  />
        <input type="number" placeholder="Calories" name='calories' onChange={this.setFood}  />
        <input type="number" placeholder="Fats" name='fats' onChange={this.setFood}  />
        <input type="number" placeholder="Protein" name='protein' onChange={this.setFood}   />
        <input type="number" placeholder="Carbs" name='carbs' onChange={this.setFood}  />
        
        <input onClick={()=>this.saveFood(this.state.food)} type="submit" />
        <Link className="linkToLog" to='/foodlog' >Food Log</Link>

        </form>

             
    </div>





        );



            // <FoodLog meals={this.state}/>      



    }
    }
    export default NutritionPage
        
        