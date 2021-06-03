import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width: 18rem;
  padding: 1rem 0;
  border-radius: 15px;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    color: #4F4F4F;
  }

  .selected {
    color: #000;
  }

  span,
  strong {
    color: blue;
  }
`;

export const UserInfo = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  margin-top: 2rem;

  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  > p {
    text-align: center;
    line-height: 24px;
  }
`
export const Navigation = styled.nav`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  a + a {
    margin-top: 2rem;
  }

  svg {
    margin-right: 1rem;
  }
`

export const SignOutWrapper = styled.div`
  position: absolute;
  bottom: 2rem  ;
`
