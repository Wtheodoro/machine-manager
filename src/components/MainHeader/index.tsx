import React from 'react';
import InputSearch from '../Inputs/InputSearch';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { Container } from './styles';
import MediaMatch from '../MediaMatch';
import { useMobileMenu } from '../../hooks/mobileMenuToggle';

const MainHeader: React.FC = () => {
  const { openMenu } = useMobileMenu()
  return (
    <Container>
      <InputSearch/>
      <MediaMatch hideOnMobile>
        <div className="icons">
          <div>
            <a href="https://www.linkedin.com/in/walisonteodoro/" target="_blank" rel="noreferrer">
              <AiFillLinkedin/>
            </a>
          </div>
          <div>
            <a href="https://github.com/Wtheodoro" target="_blank" rel="noreferrer">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </MediaMatch>
      <MediaMatch hideOnDesktop>
        <div className="menu-icon">
          <AiOutlineMenu onClick={openMenu}/>
        </div>
      </MediaMatch>
    </Container>
  )
}

export default MainHeader;