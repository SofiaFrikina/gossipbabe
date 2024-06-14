import style from './News.module.scss';
import newsImg from '../../../shared/icons/newsImg.png';
const News = () => {
    return (
        <section id="news" className={style.news}>
            <h2 className={style.news__title}>Последние новости от Gossip Babe</h2>
            <div className={style.news__container}>
                <img className={style.news__image} src={newsImg} alt="Картинка в статье" />
                <div className={style.news__article}>
                    <div className={style.news__nameblock}>
                        <h3 className={style.news__name}>Отношения Алёны Шишковой и Павла Дурова</h3>
                        <span className={style.news__line} />
                    </div>
                    <p className={style.news__paragraph}>Алёна Шишкова и Павел Дурак. Ура. Они вместе. Я рада. Ура ура . Кошмар. О нет. Я люблю моду и стиль, но что же я не люблю я хз о нет что делаьиттиьтьт...</p>
                </div>
            </div>
            <button type='button' className={style.news__arrow} />
        </section>
    )
}

export default News;