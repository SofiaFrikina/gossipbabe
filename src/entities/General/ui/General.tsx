import style from './General.module.scss';
import gen1 from '../../../shared/icons/gen1.jpg';
import gen2 from '../../../shared/icons/gen2.jpg';
import gen3 from '../../../shared/icons/gen3.jpg';
const General = () => {
    return (
        <section className={style.general}>
            <h1 className={style.general__title}>GOSSIP BABE - журнал для тех, кто хочет окунуться в мир
                актуальных новостей о моде, знаменитостях, музыке и искусстве.</h1>
            <div className={style.general__group}>
                <img className={style.general__img1} src={gen1} alt="Танцовщицы" />
                <img className={style.general__img2} src={gen2} alt="Журнал" />
                <img className={style.general__img3} src={gen3} alt="Цветочное платье" />
            </div>
        </section>
    )
}

export default General;