import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Content;
  padding: 0.5rem;
  height: cal(100vh - 6rem);
  overflow-y: scroll;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;


  /* ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: green;
        border-radius: 10px;
    } */
`;
