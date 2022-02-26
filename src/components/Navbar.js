import Filters from "./Filters";



const Navbar = ({onSectionChange,rideInfo}) => {

    const listChangeHandler =(event,sectionName)=>{
        const listItems =document.querySelectorAll('nav ul li');
        listItems.forEach(list=>{
            list.classList.remove('active');
        })
        event.target.classList.add('active');
        onSectionChange(sectionName);

    }

  return (
    <nav>
    <ul>
      <li className="active" onClick={(e)=>{listChangeHandler(e,'nearestRides')}}>Nearest rides</li>
      <li onClick={(e)=>{listChangeHandler(e,'upcomingRides')}}>Upcoming rides({rideInfo.upcomingRides})</li>
      <li onClick={(e)=>{listChangeHandler(e,'pastRides')}}>Past rides({rideInfo.pastRides})</li>
    </ul>


    <Filters/>
  </nav>
  )
}

export default Navbar