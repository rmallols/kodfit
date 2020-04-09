import React from 'react'
import NavBarButton from './NavBarButton/NavBarButton'
import './NavBar.css'
import {FaDumbbell, FaCalendarAlt} from 'react-icons/fa'
import {MdInsertChart, MdAccountCircle, MdLocationOn} from 'react-icons/md'


export default function NavBar() {
  const navLinks = [
    {name: 'schedule', path: 'calendar', icon: <FaCalendarAlt />},
    {name: 'nearby', path: 'near-me', icon: <MdLocationOn />},
    {name: 'workout', path: 'home', icon: <FaDumbbell />},
    {name: 'progress', path: 'tracker', icon: <MdInsertChart />},
    {name: 'profile', path: 'workout-current', icon: <MdAccountCircle />},
  ]

  return (
    <div className="NavBar">
      {
        navLinks.map(navLink => (
          <NavBarButton 
            key={navLink.name}
            name={navLink.name}
            link={navLink.path} 
            icon={navLink.icon}
          />
        ))
      }
    </div>
  )
}
