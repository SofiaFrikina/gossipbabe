import style from './Main.module.scss';
import General from '../../../entities/General';
import News from '../../../entities/News';
import FashionPage from '../../../entities/FashionPage';
import Stars from '../../../entities/Stars';
import Music from '../../../entities/Music';
import Art from '../../../entities/Art';
const Main = () => {
    return (
        <main className={style.main}>
            <General />
            <News />
            <FashionPage />
            <Stars />
            <Music />
            <Art />
        </main>
    )
}

export default Main;