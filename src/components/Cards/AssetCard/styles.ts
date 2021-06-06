import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  
  background-color: lightsalmon;
  border: 5px solid red;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid red;
  padding: 0.5rem;
`

export const Info = styled.div`
  margin: 0.5rem 1rem 1rem 1.5rem;
  display: flex;
  align-items: center;
`

export const ImageWrapper = styled.div`
  img {
    width: 10rem;
    height: 10rem;
  }
`
export const InfoWrapper = styled.div`
  margin-left: 2rem;

  p {
    line-height: 1.7rem;
  }
`
