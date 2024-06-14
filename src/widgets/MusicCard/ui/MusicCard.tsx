import { FC } from 'react';
import { TMusicCardProps } from '../types/types';
import style from './MusicCard.module.scss';

const MusicCard: FC<TMusicCardProps> = ({ musicCard }) => {
    return (
        <div className={style.musicCard}>
            <img className={style.musicCard__image} src={musicCard.image} alt='Картинка про моду и тренды' />
            <div className={style.musicCard__container}>
                <h3 className={style.musicCard__title}>{musicCard.title}</h3>
                <p className={style.musicCard__article}>{musicCard.article}</p>
            </div>
            <div className={style.musicCard__group}>
                <div className={style.musicCard__leftSight}>
                    <span className={style.musicCard__line} />
                    <div className={style.musicCard__leftArrow}></div>
                </div>
                <div className={style.musicCard__centerArrow}></div>
                <div className={style.musicCard__rightSight}>
                    <div className={style.musicCard__rightArrow}></div>
                    <span className={style.musicCard__line} />
                </div>
            </div>
        </div>
    )
}

export default MusicCard;