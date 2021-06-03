import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaTools, FaBuilding, FaUserAlt } from 'react-icons/fa'
import { RiBuilding3Fill } from 'react-icons/ri'
import { GoSignOut } from 'react-icons/go'
import * as S from './styles';

const Menu: React.FC = () => {
  return (
    <S.Container>
      <h3>Mac<span>Manager</span></h3>
      <S.UserInfo>
        <img src="https://github.com/Wtheodoro/my_team_page/blob/main/img/photo4.png?raw=true" alt="Foto da Helen" />
        <p>
          Wellcome back,<br/>
          <strong>Helen Brown</strong>
        </p>
      </S.UserInfo>

      <S.Navigation>
        <NavLink to="/" activeClassName="selected">
          <FaChartPie /> Dashboard
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <FaTools /> Assets
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <RiBuilding3Fill /> Units
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <FaBuilding /> Companies
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <FaUserAlt /> Users
        </NavLink>
      </S.Navigation>

      <S.SignOutWrapper>
        <NavLink to="/" activeClassName="selected">
          <GoSignOut /> Sign-out
        </NavLink>
      </S.SignOutWrapper>

    </S.Container>
  )
}

export default Menu;