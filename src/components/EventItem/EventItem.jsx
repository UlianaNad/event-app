import React from 'react'
import { StyledItem } from './EventItem.styled'

const EventItem = ({event}) => {
  return (
    <StyledItem>
        <p>{event.title}</p>
        <p>{event.description}</p>
        <span>{event.event_date}</span>
        <span>{event.organizer}</span>
    </StyledItem>
  )
}

export default EventItem