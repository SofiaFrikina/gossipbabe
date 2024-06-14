import { FC } from 'react';
import { TArtCardProps } from '../types/types';
import style from './ArtCard.module.scss';

const ArtCard: FC<TArtCardProps> = ({ artCard }) => {
    return (
        <div className={style.artCard}>
            <img className={style.artCard__image} src={artCard.image} alt='Картинка про моду и тренды' />
            <div className={style.artCard__container}>
                <h3 className={style.artCard__title}>{artCard.title}</h3>
                <p className={style.artCard__article}>{artCard.article}</p>
            </div>
        </div>
    )
}

export default ArtCard;