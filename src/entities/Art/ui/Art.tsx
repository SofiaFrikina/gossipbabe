import style from './Art.module.scss';
import { artCardsArray } from '../../../utils/artCardsArray';
import ArtCard from '../../../widgets/ArtCard';
const Art = () => {
    return (
        <section id="art" className={style.art}>
            <h2 className={style.art__title}>Искусство</h2>
            <div className={style.art__container}>
                {artCardsArray.map((artCard) => (
                    <ArtCard artCard={artCard} />
                ))}
            </div>
            <button type='button' className={style.art__arrow}></button>
        </section>
    )
}

export default Art;