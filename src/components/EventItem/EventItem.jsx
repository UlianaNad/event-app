import React from "react";
import { StyledItem, WrapLinks } from "./EventItem.styled";
import { NavLink } from "react-router-dom";

const EventItem = ({ event }) => {
  return (
    <StyledItem>
      <p>{event.title}</p>

      <span>{event.event_date}</span>

      <WrapLinks>
        <NavLink to="participants">View</NavLink>
        <NavLink to="register" id={event._id}>
          Register
        </NavLink>
      </WrapLinks>
    </StyledItem>
  );
};

export default EventItem;
