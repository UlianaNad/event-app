import { NavLink } from "react-router-dom"
import { WrapNavBar } from "./NavBar.styled"

const NavBar = () => {
  return (
    <WrapNavBar>
      <NavLink to="/">Events</NavLink>
     
    </WrapNavBar>
  )
}

export default NavBar