import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;  
  width: 100%;
  height: 6rem;
  background: #f9f9f9;
  background-image: url("./images/shiny-textured-background-min.jpg");
  background-size: cover;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  .inputSearch {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .icons {
    display: flex;
    margin-right: 4rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: #FFF;

      svg {
        font-size: 1.5rem;
      }
    }

    > div + div {
      margin-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    .inputSearch {
      left: 45%;
    }

    .menu-icon {
      margin-right: 1rem;

      svg {
        font-size: 1.5rem;
        color: #FFF;
      }
    }
  }
`;
