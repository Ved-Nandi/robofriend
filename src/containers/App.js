import React, {useState, useEffect} from 'react';
import CaredsList from '../components/CaredsList';
import SearchBox from '../components/SearchBox';
import 'tachyons'
// import {no} from './NoOfRobots'
import './App.css'
import Scroll from '../components/Scroll'


const App = () =>{

  // constructor(){
  //   super();
  //   this.state = {
  //     searchr : '',
  //     robo   : [],
  //   }
  // };

  const [robo, setRobo] = useState([]);
  const [searchr,setSearchr] = useState('');

  // componentDidMount(){
    
  //   fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  //   .then(data=>{
  //       this.setState({robo : data})
  //   })

  // }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data=> setRobo(data))
  },[])

  // on change event function for serchbox
 const changee=(event)=>{
    setSearchr(event.target.value);       
  }
  
    
  let filterrobo = robo.filter(robot=>{
    return robot.name.toLowerCase().includes(searchr.toLowerCase())
    })
    if(robo.length !==0)
    {
    return(
      <div className="tc">
        <h1 className="f1">robots</h1>
        <SearchBox fun = {changee}/>
        <Scroll>

          <CaredsList no={filterrobo}/>

        </Scroll>
      </div>
    )
    }else{
      return<div className='loding'><h1>loding...</h1></div>
    }
  
}

export default App