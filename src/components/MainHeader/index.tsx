import React from 'react';
import InputSearch from '../InputSearch';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { Container } from './styles';
import MediaMatch from '../MediaMatch';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <InputSearch />
      <MediaMatch hideOnMobile>
        <div className="icons">
          <div>
            <a href="https://www.linkedin.com/in/walisonteodoro/" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            <a href="https://github.com/Wtheodoro" target="_blank" rel="noreferrer">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </MediaMatch>
    </Container>
  )
}

export default MainHeader;