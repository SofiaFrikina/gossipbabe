import type { FC } from 'react';
import logo from '../../../shared/icons/logo.svg';
import style from './Footer.module.scss';
import tgIcon from '../../../shared/icons/tgIcon.svg';
import youTubeIcon from '../../../shared/icons/youTubeIcon.svg';
import vkIcon from '../../../shared/icons/vkIcon.svg';
import tikTokIcon from '../../../shared/icons/tiktokIcon.svg';
import instIcon from '../../../shared/icons/instagramIcon.svg';

const Footer: FC = () => (
    <footer id="contacts" className={style.footer}>
        <img src={logo} className={style.footer__logo} alt="logo" />
        <div className={style.footer__leftGroup}>
            <h4 className={style.footer__title}>Соц сети</h4>
            <ul className={style.footer__links}>
                <li className={style.footer__icon}>
                    <a className={style.footer__link} href="https://t.me/gossipbabe"><img src={tgIcon} className={style.footer__imgIcon} alt='Иконка Telegram' /></a>
                </li>
                <li className={style.footer__icon}>
                    <a className={style.footer__link} href="https://youtube.com/@GossipBabeee?si=NSu410bIqYjhOGw3"><img src={youTubeIcon} className={style.footer__imgIcon} alt='Иконка YouTube' /></a>
                </li>
                <li className={style.footer__icon}>
                    <a className={style.footer__link} href="https://vk.com/club225515261"><img src={vkIcon} className={style.footer__imgIcon} alt='Иконка Vk' /></a>
                </li>
                <li className={style.footer__icon}>
                    <a className={style.footer__link} href="https://www.tiktok.com/@gossipbabee?_t=8la50eYlbYF&_r=1"><img src={tikTokIcon} className={style.footer__imgIcon} alt='Иконка Tik Tok' /></a>
                </li>
                <li className={style.footer__icon}>
                    <a className={style.footer__link} href="https://www.instagram.com/gossippbabe?igsh=MXFrcHMxZXFyMGxhag=="><img src={instIcon} className={style.footer__imgIcon} alt='Иконка Instagram' /></a>
                </li>
            </ul>
        </div>

        <span className={style.footer__line} />

        <div className={style.footer__rightGroup}>
            <h4 className={style.footer__title}>Контакты</h4>
            <a className={style.footer__link} href="gossipbabeee@gmail.com">gossipbabeee@gmail.com</a>
        </div>
    </footer>
);

export default Footer;
