import style from './Music.module.scss';
import { musicCardsArray } from '../../../utils/musicCardsArray';
import MusicCard from '../../../widgets/MusicCard';
const Music = () => {
    return (
        <section id="music" className={style.music}>
            <h2 className={style.music__title}>Музыка</h2>
            <div className={style.music__container}>
                {musicCardsArray.map((musicCard) => (
                    <MusicCard musicCard={musicCard} />
                ))}
            </div>
            <button type='button' className={style.music__arrow}></button>
        </section>
    )
}

export default Music;