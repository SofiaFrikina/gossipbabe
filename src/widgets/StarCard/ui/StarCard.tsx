import { FC } from 'react';
import { TStarCardProps } from '../types/types';
import style from './StarCard.module.scss';

const StarCard: FC<TStarCardProps> = ({ star }) => {
    return (
        <div className={style.starCard}>
            <img className={style.starCard__image} src={star.image} alt='Картинка про моду и тренды' />
            <div className={style.starCard__container}>
                <h3 className={style.starCard__title}>{star.title}</h3>
                <p className={style.starCard__article}>{star.article}</p>
            </div>
        </div>
    )
}

export default StarCard;