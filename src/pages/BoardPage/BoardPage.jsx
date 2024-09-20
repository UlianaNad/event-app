import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEventsThunk } from "../../redux/events/eventThunk.js";
import EventItem from "../../components/EventItem/EventItem.jsx";
import { EventsContainer, StyledButton, StyledText, Wrapper } from "./BoardPage.styled.js";


const BoardPage = () => {
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsThunk({ page: pageNumber, limit: pageSize }))
      .unwrap()
      .then((data) => {
        console.log(data)
        setEvents((prev) => [...prev, ...data.events]); 
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, pageNumber, pageSize]);

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <EventsContainer>
        {events.length > 0 ? (
          events.map((event) => <EventItem key={event._id} event={event} />)
        ) : (
          <p>No events</p>
        )}
      </EventsContainer>
      {
        totalPages===currentPage && <StyledText>You have reached the end of the list!</StyledText>
      }
      <StyledButton disabled={totalPages===currentPage} onClick={() => loadMore()}>Load more</StyledButton>
    </Wrapper>
  );
};

export default BoardPage;
