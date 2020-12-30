import React from 'react';
import './ListItem.css';
import Button from '../Button/Button';
import jack from '../../assets/jack.jpg';
import beefeater1 from '../../assets/beefeater1.jpg';


function ListItem () {

   return <div>
      <h1>BEVERAGE</h1>
      <table >
         <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Picture</th>
            <th>Price</th>
            <th>Buy Now </th>
         </tr>
         <tr>
            <td>Jack Daniels</td>
            <td>Whiskey</td>
            <td><img src={jack} alt="Jack"></img></td>
            <td>30$</td>
            <td><Button /> </td>
         </tr>
         <tr>
            <td>Beefeater</td>
            <td>Gin</td>
            <td><img src={beefeater1} alt="Beefeater"></img></td>
            <td>23$</td>
            <td><Button /> </td>
         </tr>
         

      </table>
      

   </div>
             
           
             
}


export default ListItem;
//<li> Butter <span> / Food / <button> Buy </button></span></li>
//<li> Whiskey <span> / Beverage / <button> Buy </button></span></li>
//<li> Apple <span> / Fruits / <button> Buy </button></span></li>