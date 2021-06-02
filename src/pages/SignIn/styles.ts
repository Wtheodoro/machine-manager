import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  background-image: url("./images/shiny-textured-background-min.jpg");
  background-position-x: calc(100vw/2);
  background-position-y: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: center;
  }
`;

export const LeftSide = styled.div`
  width: max(400px, 30%);
  height: 35rem;
  background-color: #FFF;
  border-radius: 20px 0 0 20px;
  padding: 3rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.18);

  > h1 {
    margin-bottom: 3rem;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 2rem;

    > span {
      color: blue;
    }
  }

  > form {
    display: flex;
    flex-direction: column;

    > label {
      margin: 1rem 0;
    }

    > span {
      color: red;
    }

    > button {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    border-radius: 20px;
    margin: 2rem;
  }
`
export const RightSide = styled.div`
  height: 35rem;
  width: max(400px, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 8px solid #FFF;
  border-right: 8px solid #FFF;
  border-bottom: 8px solid #FFF;
  border-radius: 0 20px 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export const RotatingWrapper = styled.div`
  width: 20rem;
  padding: 1rem;
  background: #FFF;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  
  > span {
    font-size: 2rem;
    /* color: blue; */
  }
`