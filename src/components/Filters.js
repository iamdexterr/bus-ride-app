import { useSelector,useDispatch} from "react-redux";
import { filterActions } from "../store/filterSlice";
import {useState} from 'react';


const Filters = () => {

  const dispatch = useDispatch();
    const rides = useSelector(state => state.rides);
   

    const [cities,setCities]=useState(null);   

    
    const cityAndState = rides.map(ride=>{
      return {city : ride.city,state:ride.state}
    })
    
    const uniqueState= [...new Set(cityAndState.map(state=>{
      return state.state
    }))];
    
    
    const uniqueCity= [...new Set(cityAndState.map(city=>{
      return city.city
    }))];

    

   
  

      const stateChangeHandler=(e)=>{
 
        const seletedState= e.target.value;
        dispatch(filterActions.setStateName(seletedState));
        dispatch(filterActions.setCityName('city'));


        if(seletedState=='state'){
          document.getElementById('citySeleciton').value='city';
          return setCities(uniqueCity);
        }

       const selectedStateCities =[...new Set(cityAndState.filter(list=>{
       return  list.state == seletedState
        }).map(list=> list.city))];

        setCities(selectedStateCities)
      }

      const cityChangeHandler=(e)=>{
        const seletedCity= e.target.value;
        dispatch(filterActions.setCityName(seletedCity));

      }
    

  return (
   <div className="filters">
        <select onChange={stateChangeHandler}>
            <option value='state'>STATE</option>
    
            {uniqueState.map(state=><option value={state} key={state}>{state}</option>)}
         
        </select>


        <select id="citySeleciton"onChange={cityChangeHandler}>
            <option value='city'>CITY</option>
            {cities && cities.map((city)=>{ return <option key={city} value={city}>{city}</option>})}
            {!cities && uniqueCity.map(city=><option key={city} value={city}>{city}</option>)}
        </select>
    </div>
  )
}

export default Filters