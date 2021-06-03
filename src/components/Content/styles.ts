import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Content;
  padding: 1.6rem;
  height: cal(100vh - 6rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: green;
        border-radius: 10px;
    }
`;