import React, { Component } from 'react';
import firebase from './config.js';
import db from './config.js';
import './App.css';
import intersection from './c981ec360e77f8db539738422b386199_road-junction-clipart-vector-graphics-1622-road-junction-eps-_180-195.jpeg';

class App extends Component {
   
   constructor(props){
        super(props);

        this.state = {
          Bus_N:0,
          Car_N:0,
          Bike_N:0,
          Bus_S:0,
          Car_S:0,
          Bike_S:0,
          Bus_E:0,
          Car_E:0,
          Bike_E:0,
          Bus_W:0,
          Car_W:0,
          Bike_W:0,
          date:0,
          time:0,
          timeInterval:0,
          timeN:[],
          timeS:[],
          timeE:[],
          timeW:[],
          current:0,
          latitude:0,
          longitude:0,

        }
          
this.getLocation=()=>{
  var x = document.getElementById("location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

this.showPosition=(position)=> {
  var x = document.getElementById("location");
  x.innerHTML = "Latitude: " + position.coords.latitude.toFixed(7) + 
  "<br>Longitude: " + position.coords.longitude.toFixed(5); 
  this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
}
          
           this.Bus_N = e => {
            e.preventDefault();
            if(this.state.date===0)
            { this.getLocation()
              var d=new Date();
              var n=d.getTime();
              this.setState({Bus_N:this.state.Bus_N+1,date:d,time:n,timeN:[...this.state.timeN,n],current:0})
            }
            else
            { 

            	var d=new Date();
                var n=d.getTime();
              this.setState({Bus_N:this.state.Bus_N+1,timeN:[...this.state.timeN,n],current:0})
            }
            
          }
           this.Car_N = e => {
            e.preventDefault();
             if(this.state.date===0)
            {  var d=new Date();
               var n=d.getTime();this.getLocation();
               this.setState({Car_N:this.state.Car_N+1,date:d,time:n,timeN:[...this.state.timeN,n],current:1})
            }
            else
            {
              var d=new Date();
              var n=d.getTime();	
              this.setState({Car_N:this.state.Car_N+1,timeN:[...this.state.timeN,n],current:1})
            }
           
          }
            this.Bike_N = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bike_N:this.state.Bike_N+1,date:d,time:n,timeN:[...this.state.timeN,n],current:2})
            }
            else
            { 
            	var d=new Date();
                var n=d.getTime();
              this.setState({Bike_N:this.state.Bike_N+1,timeN:[...this.state.timeN,n],current:2})
            }
            
          }
            this.Bus_S = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bus_S:this.state.Bus_S+1,date:d,time:n,timeS:[...this.state.timeS,n],current:3})
            }
            else
            { 
              var d=new Date();
              var n=d.getTime(); 
              this.setState({Bus_S:this.state.Bus_S+1,timeS:[...this.state.timeS,n],current:3})
            }
            
          }
            this.Car_S = e => {
            e.preventDefault();
            if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Car_S:this.state.Car_S+1,date:d,time:n,timeS:[...this.state.timeS,n],current:4})
            }
            else
            {
              var d=new Date();
              var n=d.getTime();
              this.setState({Car_S:this.state.Car_S+1,timeS:[...this.state.timeS,n],current:4})
            }
            
          }
            this.Bike_S = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bike_S:this.state.Bike_S+1,date:d,time:n,timeS:[...this.state.timeS,n],current:5})
            }
            else
            { 
            	var d=new Date();
              var n=d.getTime();
              this.setState({Bike_S:this.state.Bike_S+1,timeS:[...this.state.timeS,n],current:5})
            }
            
          }
            this.Bus_E = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bus_E:this.state.Bus_E+1,date:d,time:n,timeE:[...this.state.timeE,n],current:6})
            }
            else
            { 
            	var d=new Date();
                var n=d.getTime();

              this.setState({Bus_E:this.state.Bus_E+1,timeE:[...this.state.timeE,n],current:6})
            }
            
          }
            this.Car_E = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Car_E:this.state.Car_E+1,date:d,time:n,timeE:[...this.state.timeE,n],current:7})
            }
            else
            {
            	var d=new Date();
              var n=d.getTime();
              this.setState({Car_E:this.state.Car_E+1,timeE:[...this.state.timeE,n],current:7})
            }
            
          }
            this.Bike_E = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bike_E:this.state.Bike_E+1,date:d,time:n,timeE:[...this.state.timeE,n],current:8})
            }
            else
            { 
            	var d=new Date();
              var n=d.getTime();
              this.setState({Bike_E:this.state.Bike_E+1,timeE:[...this.state.timeE,n],current:8})
            }
            
          }
            this.Bus_W = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bus_W:this.state.Bus_W+1,date:d,time:n,timeW:[...this.state.timeW,n],current:9})
            }
            else
            { 
            	var d=new Date();
              var n=d.getTime();
              this.setState({Bus_W:this.state.Bus_W+1,timeW:[...this.state.timeW,n],current:9})
            }
            
          }
            this.Car_W = e => {
            e.preventDefault();
             if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Car_W:this.state.Car_W+1,date:d,time:n,timeW:[...this.state.timeW,n],current:10})
            }
            else
            { 
               var d=new Date();
              var n=d.getTime(); 
              this.setState({Car_W:this.state.Car_W+1,timeW:[...this.state.timeW,n],current:10})
            }
            
          }
            this.Bike_W = e => {
              e.preventDefault();
               if(this.state.date===0)
            { var d=new Date();
              var n=d.getTime();this.getLocation();
              this.setState({Bike_W:this.state.Bike_W+1,date:d,time:n,timeW:[...this.state.timeW,n],current:11})
            }
            else
            { 
              var d=new Date();
              var n=d.getTime();
              this.setState({Bike_W:this.state.Bike_W+1,timeW:[...this.state.timeW,n],current:11})
            }
              
            
          } 
           this.Reset = e => {

              e.preventDefault();

                 if(this.state.current===0 && this.state.Bus_N>0)
                 {
                     this.setState({Bus_N:this.state.Bus_N-1})
                 }

                 if(this.state.current===1 && this.state.Car_N>0)
                 {
                 	this.setState({Car_N:this.state.Car_N-1})
                 }

                 if(this.state.current===2 && this.state.Bike_N>0)
                 {
                 	this.setState({Bike_N:this.state.Bike_N-1})
                 }

                 if(this.state.current===3 && this.state.Bus_S>0)
                 {
                 	this.setState({Bus_S:this.state.Bus_S-1})
                 }
                 if(this.state.current===4 && this.state.Car_S>0)
                 {
                     this.setState({Car_S:this.state.Car_S-1})
                 }

                 if(this.state.current===5 && this.state.Bike_S>0)
                 {
                 	this.setState({Bike_S:this.state.Bike_S-1})
                 }

                 if(this.state.current===6 && this.state.Bus_E>0)
                 {
                 	this.setState({Bus_E:this.state.Bus_E-1})
                 }

                 if(this.state.current===7 && this.state.Car_E>0)
                 {
                 	this.setState({Car_E:this.state.Car_E-1})
                 }
                 if(this.state.current===8 && this.state.Bike_E>0)
                 {
                     this.setState({Bike_E:this.state.Bike_E-1})
                 }

                 if(this.state.current===9 && this.state.Bus_W>0)
                 {
                 	this.setState({Bus_W:this.state.Bus_W-1})
                 }

                 if(this.state.current===10 && this.state.Car_W>0)
                 {
                 	this.setState({Car_W:this.state.Car_W-1})
                 }

                 if(this.state.current===11 && this.state.Bike_W>0)
                 {
                 	this.setState({Bike_W:this.state.Bike_W-1})
                 }
           }


           this.End = e => {
            e.preventDefault();
            var d=new Date();
            var n=d.getTime();
            firebase.firestore().collection("" + this.state.time).doc().set({

          Bus_N:this.state.Bus_N,
          Car_N:this.state.Car_N,
          Bike_N:this.state.Bike_N,
          Bus_S:this.state.Bus_N,
          Car_S:this.state.Car_N,
          Bike_S:this.state.Bike_S,
          Bus_E:this.state.Bus_E,
          Car_E:this.state.Car_E,
          Bike_E:this.state.Bike_E,
          Bus_W:this.state.Bus_S,
          Car_W:this.state.Car_W,
          Bike_W:this.state.Bike_W,
          timeInterval:n-this.state.time,
          timeN:this.state.timeN,
          timeS:this.state.timeS,
          timeW:this.state.timeW,
          timeE:this.state.timeE,
          latitude:this.state.latitude,
          longitude:this.state.longitude,

            }).then(
             this.setState({
          Bus_N:0,
          Car_N:0,
          Bike_N:0,
          Bus_S:0,
          Car_S:0,
          Bike_S:0,
          Bus_E:0,
          Car_E:0,
          Bike_E:0,
          Bus_W:0,
          Car_W:0,
          Bike_W:0,
          date:0,
          time:0,
          timeInterval:0,
          timeN:[],
          timeS:[],
          timeW:[],
          timeE:[],
          latitude:0,
          longitude:0,
           })
            )
 
          } 
      };



  render() {
    
    return (

      <div id="main" className="App">
         
         <div id="location"></div>
         <form id="North">
         <button onClick={this.Bus_N} id="Bus_N" className="btn">Bus {this.state.Bus_N}</button><br/>
         <button onClick={this.Car_N} id="Car_N" className="btn">Car {this.state.Car_N}</button><br/>
         <button onClick={this.Bike_N} id="Bike_N" className="btn">Bike {this.state.Bike_N}</button><br/>
         
         </form>
         <hr id="hr1"/>
         <hr id="hr2"/>
         <hr id="hr3"/>
         <hr id="hr4"/>
         <hr id="hr5"/>
         <hr id="hr6"/>
         <hr id="hr7"/>
         <hr id="hr8"/>


          <form id="East">
         <button onClick={this.Bus_E} id="Bus_E" className="btn">Bus {this.state.Bus_E}</button><br/>
         <button onClick={this.Car_E} id="Car_E" className="btn">Car {this.state.Car_E}</button><br/>
         <button onClick={this.Bike_E} id="Bike_E" className="btn">Bike {this.state.Bike_E}</button><br/>
         
         </form>
         <form id="West">
         <button onClick={this.Bus_W} id="Bus_W" className="btn">Bus {this.state.Bus_W}</button><br/>
         <button onClick={this.Car_W} id="Car_W" className="btn">Car {this.state.Car_W}</button><br/>
         <button onClick={this.Bike_W} id="Bike_W" className="btn">Bike {this.state.Bike_W}</button><br/>
         </form>
          
         <form id="South">

         <button onClick={this.Bus_S} id="Bus_S" className="btn">Bus {this.state.Bus_S}</button><br/>
         <button onClick={this.Car_S} id="Car_S" className="btn">Car {this.state.Car_S}</button><br/>
         <button onClick={this.Bike_S} id="Bike_S" className="btn">Bike {this.state.Bike_S}</button><br/>
         </form>
         <form>
         <button onClick= {this.End} id="End" className="btn">End</button>
         <button onClick= {this.Reset} id="Reset" className="btn">Reset</button>
        </form>
      </div>
    );
  }
}

export default App;
