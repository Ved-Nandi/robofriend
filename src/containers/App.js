import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import CaredsList from '../components/CaredsList';
import SearchBox from '../components/SearchBox';
import 'tachyons'
import './App.css'
import Scroll from '../components/Scroll'
import { setSearchField, requestRobots } from '../action'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots : () => dispatch(requestRobots()),
  }
}

const App = (props) =>{

  // const [robots, setRobo] = useState([]);
  const { searchField, onSearchChange, robots, onRequestRobots, isPending  } = props;

  
  useEffect(()=>{
    onRequestRobots()
  },[])

  
  
    
  let filterrobo = robots.filter(robot => {
     return robot.name.toLowerCase().includes(searchField.toLowerCase())
   })
  
    if(!isPending)
    {
    return(
      <div className="tc">
        <h1 className="f1">robots</h1>
        <SearchBox fun = {onSearchChange}/>
        <Scroll>

          <CaredsList no={filterrobo}/>

        </Scroll>
      </div>
    )
    }else{
      return<div className='loding'><h1>loding...</h1></div>
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 