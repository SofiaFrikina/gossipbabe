import style from './Stars.module.scss';
import { starsCardsArray } from '../../../utils/starsCardsArray';
import StarCard from '../../../widgets/StarCard';
const Stars = () => {
    return (
        <section id="stars" className={style.stars}>
            <h2 className={style.stars__title}>Звёздная жизнь</h2>
            <div className={style.stars__container}>
                {starsCardsArray.map((star) => (
                    <StarCard star={star} />
                ))}
            </div>
            <button type='button' className={style.stars__arrow}></button>
        </section>
    )
}

export default Stars;