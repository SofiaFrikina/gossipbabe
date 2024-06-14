import { FC } from 'react';
import { TFashionCardProps } from '../types/types';
import style from './FashionCard.module.scss';

const FashionCard: FC<TFashionCardProps> = ({ card }) => {
    return (
        <div className={style.fashionCard}>
            <img className={style.fashionCard__image} src={card.image} alt='Картинка про моду и тренды' />
            <div className={style.fashionCard__container}>
                <h3 className={style.fashionCard__title}>{card.title}</h3>
                <p className={style.fashionCard__article}>{card.article}</p>
            </div>
        </div>
    )
}

export default FashionCard;