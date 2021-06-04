import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

let url = 'http://localhost:9292/meal/'



class FoodLog extends React.Component {
  state = {
    meals: [],
    cal: '',
    fat: '',
    carbs: '',
    protein: ''



  }
  componentDidMount = () => {

    fetch('http://localhost:9292/meal/')
      .then(res => res.json())
      .then(data => this.setState({
        meals: data
      }))

  }


  deleteFood = (foodObj) => {
    let postOptions={
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json'
      
      },
      body: JSON.stringify({id: foodObj.id})

    }



    fetch(url,postOptions)
    .then(res =>res.json())
    .then(console.log())


    let newArr = this.state.meals.meals.filter(food => food != foodObj)
    this.setState({
      meals: newArr
    })

    // fetch(url + foodObj.id, {


    //   method: "DELETE",
    //   headers: {
    //     'Content-Type': 'application/json'

    //   },
    //   body:null


    // })
    //   .then(res => res.json())
    //   .then((newArr) => this.setState({ meals: newArr }))

  }




  renderFood = () => {
    let row = 1
    if (this.state.meals.meals) {
      return this.state.meals.meals.map(meal => {

        return (

          <tr>
            <th scope='row'>{row++}</th>

            <td>{meal.name}</td>
            <td>{meal.foodType}</td>
            <td>{meal.calories}</td>
            <td>{meal.carbs}</td>
            <td>{meal.protein}</td>
            <td>{meal.fats}</td>
              <td>
            <button onClick={() => this.deleteFood(meal)}>delete</button>
            </td>

          </tr>

        )

      }
      )
    }

  }







  renderTotal = (meals) => {
    let totalCal = 0
    let totalCarbs = 0
    let totalProtein = 0
    let totalFats = 0


    meals.map(meal => {

      totalCal += meal.calories
      totalCarbs += meal.carbs
      totalProtein += meal.protein
      totalFats += meal.fats


    }

    )

    this.setState({
      cal:totalCal,
      fat:totalFats,
      protein:totalProtein,
      carbs:totalCarbs
    })

    // return(
    //   <tr>
    //   <td>works</td>
    //   </tr>
    // )
  }







  render() {
    return (
      <div className='table'>

        <MDBCard>
          <MDBCardHeader>Food Log:</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Meals:</MDBCardTitle>

          </MDBCardBody>
        </MDBCard>

        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>

              <th scope='col'>Type</th>
              <th scope='col'>Calories</th>
              <th scope='col'>Carbs</th>
              <th scope='col'>Protein</th>
              <th scope='col'>Fats</th>
              <th scope='col'></th>
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            {this.renderFood()}
            <tr>
              <button onClick={()=>this.renderTotal(this.state.meals.meals)}>total</button>
              <td></td>
              <td></td>
              <td>{this.state.cal}</td>
              <td>{this.state.carbs}</td>
              <td>{this.state.protein}</td>
              <td>{this.state.fat}</td>
             </tr>
          </MDBTableBody>

        </MDBTable>
        {/* {this.state.meals.meals ? ()=>this.renderTotal() :null} */}

      </div>



    )
  }

}

export default FoodLog