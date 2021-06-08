import styled from 'styled-components';

export const Container = styled.div`
  /* width: 30rem; */
  width: 45%;

  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  height: 10rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
