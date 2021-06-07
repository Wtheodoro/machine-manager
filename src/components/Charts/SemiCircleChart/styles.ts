import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  
  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  margin-left: 1rem;
`;
