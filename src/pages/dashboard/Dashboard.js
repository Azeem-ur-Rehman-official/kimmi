import Navbars from 'components/navbar-io/Navbar'
import React,{useState} from 'react'
import Profile from './Profile';
import './Dashboard.css';
import Payment from './Payment';
const Dashboard = () => {
  const [profile, setProfile] = useState(false);
  const clickHandler = () => {
    setProfile(true);
  }
  return (
    <div>
      <span>Dashboard</span>
      {/* <Navbars Dashboard={true} clickHandler={clickHandler} />
      {profile == true ? <Profile /> : <Payment/>} */}
    </div>
  )
}

export default Dashboard