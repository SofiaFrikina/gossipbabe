import type { FC } from 'react';
import logo from '../../../shared/icons/logo.svg';
import style from './Header.module.scss';

const Header: FC = () => (
    <header className={style.header}>
        <img src={logo} className={style.header__logo} alt="logo" />
        <ul className={style.header__navigation}>
            <li className={style.header__nav}><a className={style.header__link} href="#news">Новости</a></li>
            <li className={style.header__nav}><a className={style.header__link} href="#fashion">Мода</a></li>
            <li className={style.header__nav}><a className={style.header__link} href="#stars">Звёзды</a></li>
            <li className={style.header__nav}><a className={style.header__link} href="#music">Музыка</a></li>
            <li className={style.header__nav}><a className={style.header__link} href="#art">Искусство</a></li>
        </ul>
        <button className={style.header__contacts}><a href="#contacts" className={style.header__contactLink}>Контакты</a></button>
    </header>
);

export default Header;
