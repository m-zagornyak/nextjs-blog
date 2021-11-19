import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Postal</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Технологии</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Про меня</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
      <SocialIcons href="https://github.com/Postal5">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/миша-загорняк-775791226">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      <SocialIcons href="https://instagram.com/m_zagornyak?utm_medium=copy_link">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
