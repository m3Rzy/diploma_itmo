import logo from '../assets/logo-whiye.png';
import picture from '../assets/next.svg';
import '../styles/house.css';
import '../styles/allObjects.css';
import '../fonts.css';
import sitmo from '../assets/logo-full.png';
import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import '../styles/anchor.css';
const { Link } = Anchor;


function HouseApp() {
    document.title = 'Дом П. С. Строганова';
    const [targetOffset, setTargetOffset] = useState(undefined);
    const [scrollTop, setScrollTop] = useState(0);
    const [vizy, onOpacity] = useState(0)
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        var opacity = 0;
        var vizy = 0;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height * 100);
        opacity = (winScroll / 100)
        if (opacity >= 4.7) {
          vizy = 100;
        }
        onOpacity(vizy, 1000)
        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        
        return () => window.removeEventListener("scroll", onScroll)
    })

    useEffect(() => {
        setTargetOffset(window.innerHeight / 14);
    }, []);

    return (
        <div className = "HouseApp">
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-house" id="supertitle">
        <div className="listheader2">
            <a href="/">
                <div className="logo">
                    <img src={logo} alt="" width="250px" className="logo_img-house" />
                </div>
            </a>

            <div className="nextbtn">
                <img src={picture} alt="#" className="nextsvg" />
                <a href="/" className="nextbutton">Назад</a>
            </div>
            <div className="titles">
                <h1 className="title_main">Дом П. С. Строганова на Сергиевской улице</h1>
                <h3 className="title_help">Дворец Строгановых, построенный по проекту архитектора Франческо Бартоломео Растрелли в 1753—1754 годах, один из образцов уникального растреллиевского «барочно-рокайльного стиля».</h3>
                <div className="line"></div>

            </div>
        </div>
        <section className='anchor-mine'>
            <Anchor targetOffset={targetOffset} affix={true} style={{opacity: `${vizy}%`}}>
                <Link href="#supertitle" title="Заголовок"/>
                <Link href="#part1" title="Общая история"/>
            </Anchor>
        </section>
    </div>
    <div className="container-fluid2">
        <div className="listheader-house">
        <div style={{marginTop: 75}}></div>
            <div className="subject5"> 
                <h className="title-veka" id="part1">
                    Общая история
                </h>
            </div>
            <div className="subject6">
                <p>По переписи населения 1737 г. участок принадлежал капитану-поручику преображенского полка Федору Фирсову. У вдовы Фирсова его купил придворный двора цесаревны Елизаветы Петровны Андрей Каштарев. Дом, скорее всего, был деревянный.</p>
            </div>
            <div className="subject7">
                <p> В 1740-х гг. владелец - Александр Александрович Меншиков, сын А. Д. Меншикова, в те годы секунд-майор Преображенского полка. После вступления на престол Петра II в 1727 г. был сослан вместе с отцом в Березов. Императрица Анна Иоановна
                    возвратила его в Петербург. При Елизавете Александр - генерал-майор; при Екатерине II - генерал-аншеф. А. А. Меньшиков - единственный мужчина, награжденный орденом св. влкм. Екатерины (награждались только женщины).</p>
            </div>
            <div className="subject7">
                <p>В 1749 г. двор купил обер-комиссар Иван Петрович Стеллих. В 1758 г. арх. Кнебель произвел обмер участка, видимо, в связи с переходом владения к Борису Ивановичу Княжнину, псковскому вице-губернатору. Его сын Яков, будущий поэт, жил в этом
                    доме. Яков женился на дочери основателя русского театра А. П. Сумарокова Екатерине, одной из первых русских поэтесс. В 1772 г. Я. Б. Княжнин продал доставшийся от отца дом. Тогда дом был деревянным на каменном фундаменте.

                </p>
            </div>
            {/* <div className="subject2">
                <p>Следующий владелец - протопоп Петропавловского собора Василий Алексеев, затем советник И.И. Татищев, позже - генерал-майор С.М. Давыдов. По просроченной закладной дом перешел к князьям Несвитским (Несвицким), Ивану и Петру, сыновьям петербургского
                    губернатора, вице-адмирала В. Ф. Несвитского. Дом принадлежал Несвитским, служившим в лейб-гвардии Конном полку, в 1792-1794 гг. В начале XIX в. участок принадлежал представителям семейства Строгановых. Сначала Елизавете Александровне,
                    вдове Александра Николаевича Строганова, затем их сыну, дипломату Григорию Александровичу. Г.А. Строганов был двоюродным дядей Н. Н. Гончаровой (Пушкиной). В 1857 г. владельцами стали П.С. Строганов, внук Г. А., и его жена Анна Дмитриевна,
                    дочь известного военного историка Д.П. Бутурлина.
                </p>
            </div> */}
            <div className="subject7">
                <p>
                    В 1857 г. по проекту арх. И.А. Монигетти началось возведение двухэтажного особняка. В 1877 г. по проекту арх. М.Е. Месмахера по Сергиевской (Чайковского) ул. сделали пристройку в три окна для домовой церкви. Главный вход находился на Сергиевской ул. Парадные
                    помещения располагались справа от беломраморной лестницы. В вестибюле стоит мраморная лисица (часть герба Строгановых), держащая картуш с вензелем "СС". Такой же вензель украшает угол дома. Первоначально основной двухэтажный объем
                    располагался традиционно для Строгановых глаголем, т. е. выходил сразу на две улицы: Сергиевскую (сейчас это ул.Чайковского) и Моховую. Над углом возвышался купол, придававший всему зданию торжественный вид. Въезд располагался со стороны
                    Сергиевской улицы, в сторону которой были обращены ворота.


                </p>
            </div>
            <div className="subject7">
                <p>
                    Многое в доме напоминает о бывших хозяевах, и сейчас на балконе можно увидеть вензель из двух переплетенных букв «С». Такой же вензель украшает чугунные ворота. Внутри дома основной достопримечательностью, доступной для любого посетителя, является прекрасная
                    беломраморная лестница. Раньше её украшали скульптуры ангелов, однако в 90-е годы ХХ в. их увезли на реставрацию и не вернули до сих пор. Потолок в холле украшен лепниной и росписью с библейским сюжетом. На втором этаже посетителей
                    встречает загадочный зверь, многие наверняка озадачились бы вопросом, кто же это? Оказывается, лисица – символ семьи. Она держит в лапах картуш с вензелем «S». До недавнего времени был открыт «Дубовый зал», в котором при Строгановых
                    размещалась столовая. Она была «сердцем» дома. Сюда ведут четыре двери, связывающие ее с гостиными, внутренними комнатами и лестницей. Этот зал оформлен в стиле фламандского барокко. Здесь сохранился камин, на котором стоят две фигуры,
                    выполненные из дуба. Это опять лисицы. Когда-то они держали герб Строгановых, но теперь лапы у зверьков обрублены.

                </p>
            </div>
            <div className="next-article">
                        <p className="next-h1">Род Строгановых</p>
                        <p className="next-h2">Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и государственные деятели XVI—XX веков.</p>
                        <a href="/family"><button type="button" className="block">Читать</button></a>
                    </div>
        </div>
    </div>
    
    <div className="container-fluid3">
                <div className="footer-pooper">
                    <img src={sitmo} width="200px" alt="" className="logo_img_footer" />
                    <p className="excep">Нашли ошибку в тексте? Выделите ее и нажмите Ctrl + Enter</p>
                    <div className="line-footer"></div>
                    <p className="rules">© 2021 ITMO Unversity</p>
                </div>
            </div>
        </div>
    );
}

export {HouseApp};