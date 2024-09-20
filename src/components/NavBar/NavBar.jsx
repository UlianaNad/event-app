import { NavLink } from "react-router-dom"
import { WrapNavBar } from "./NavBar.styled"

const NavBar = () => {
  return (
    <WrapNavBar>
      <NavLink to="/">Events</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="participants">Participants</NavLink>
    </WrapNavBar>
  )
}

export default NavBar