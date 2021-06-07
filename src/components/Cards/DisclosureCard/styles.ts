import styled from 'styled-components';

interface ContainerProps {
  color?: string
}

export const Container = styled.div<ContainerProps>`
  width: 8rem;
  height: 10rem;
  border-radius: 20px;
  background-color: ${props => props.color ? props.color : '#000'};
  color: #FFF;

  box-shadow: 0px 10px 60px -25px rgba(0, 0, 0, 0.7);

  > a {
    padding: 1rem;
    text-decoration: none;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
`

export const Social = styled.div`  
  > svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`
