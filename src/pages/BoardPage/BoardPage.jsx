import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchEventsThunk } from '../../redux/events/eventThunk.js';
import EventItem from '../../components/EventItem/EventItem.jsx';
import { EventsContainer } from './BoardPage.styled.js';

const BoardPage = () => {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsThunk())
      .unwrap()
      .then((data) => {
        setEvents(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div>
      <EventsContainer>
        {
          events.length > 0 ?
           ( 
            events.map(event => <EventItem key={event._id} event={event}/>)
          ) : (<p>No events</p>)
        }
      </EventsContainer>
    </div>
  )
}

export default BoardPage