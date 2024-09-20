import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EventsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
export const StyledButton = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 8px 20px;
  background-color: var(--white);
  border-radius: 12px;
  color: green;
  border: 1px solid lightgreen;
  z-index: 40;
  font-weight: 600;

  &:hover {
    color: var(--green);
  }
  &:disabled {
    background-color: var(--light-grey);
    color: var(--dark-grey);
    border: 1px solid var(--light-grey);
    cursor: not-allowed;
  }
`;
export const StyledText = styled.p`
  margin-top: 15px;
`;
