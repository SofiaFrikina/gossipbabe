import style from './FashionPage.module.scss';
import { fashionCardsArray } from '../../../utils/fashionCardsArray';
import FashionCard from '../../../widgets/FashionCard';
const FashionPage = () => {
    return (
        <section id="fashion" className={style.fashion}>
            <h2 className={style.fashion__title}>Мода и тренды</h2>
            <div className={style.fashion__container}>
                {fashionCardsArray.map((card) => (
                    <FashionCard card={card} />
                ))}
            </div>
            <button type='button' className={style.fashion__arrow}></button>
        </section>
    )
}

export default FashionPage;