import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo-whiye.png';
import sitmo from '../assets/logo-full.png';
import picture2 from '../assets/next.svg';
import '../styles/collection.css'
import mapfuture from '../assets/img-pages/mapfuture.jpg'
import { Anchor } from 'antd';
import { Footer } from './components/footer'
import { FooterWidget } from './components/footerwidget'
import { SrcLine } from './components/srcline'
import { FeedBackWidget } from './components/feedback';
const { Link } = Anchor;



function BarokkoApp() {
    document.title = 'Строгановское барокко';
    const history = useNavigate();
    const [buttonPopup, setButtonPopup] = useState(false);

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
        console.log(opacity)
        if (opacity >= 6.8) {
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
        <div className='BarokkoApp'>
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-barokko" id="supertitle">
                
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>
                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" onClick={() => history(-1)}/>
                        <a className='backButton-my' onClick={() => history(-1)}>Назад</a>
                    </div>
                    {/* <button onClick={() => history(-1)}></button>  */}
                    <div className="titles">
                        <h1 className="title_main">Строгановское барокко</h1>
                        <h3 className="title_help">Архитектурное направление конца 17-начала 18 вв.</h3>
                        <div className="line"></div>
                        <FooterWidget>
                            <li className='footer-data'>📅 07.02.2022</li>
                            <li className='footer-write'>🖋 Университет ИТМО</li>
                            <li className='footer-write'>📄 Статья</li>
                            <li className='footer-write'>🕓  1 минута</li>
                        </FooterWidget>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#barokko-main" title="Общая информация" />
                            
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="barokko-main">                     
                        Общая информация
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Cтрогановское барокко – архитектурное направение конца 17-начала 18 вв. Постройки строгановского барокко созданы по  заказу русского землевладельца, солепромышленника и политического деятеля Григория Дмитриевича Строганова (1656-1715). 

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Основные черты строгановского барокко: сохранение традиционного для древнерусской архитектуры пятиглавия, пышный барочный декор. Этим строгановское барокко отличалась от московского барокко – нарышкинского и голицынского барокко. Этим архитектурным стилистическим направлениям напротив были присущи многоярусность, опора на украинское или польское барокко, заимствования из архитектуры Ренессанса, маньеризма, опора на австрийскую архитектуру (голицынское барокко). Вместе с другими зодчими строгановские мастера решали новые художественные и практические задачи, стоящие перед русской архитектурой того времени, но они шли к общим целям своими путями, ища новое в пределах старых композиционных схем: осуществленное ими световое пятиглавие над кубическим бесстолпным храмом явилось венцом исканий русских мастеров конца XVII в.


                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Григорий Дмитриевич Строганов был одним из самых влиятельных людей новой России. При Петре Первом он выполнял, скорее, функции «ходячего кошелька», так как спонсировал флот и развитие портовых городов. Однако именно он предпринял удачную попытку достичь Московских земель, переехав из старинного города Строгановых – Сольвычегодска сначала в Нижний Новгород, а потом в Москву. Строительство многочисленных деревянных и каменных родовых храмов было, пожалуй, не данью его особой религиозности, а стремлением показать свои неограниченные экономические возможности, формой утверждения своей значимости. Возведение первого памятника (исторически) из череды памятников строгановского барокко – собора Введенского монастыря – стало символом утверждения нового Строганова, способного конкурировать со своими знаменитыми предками (т.к. строилось как антипод построенному по приказу Аники Строганова Благовещенского собора в Сольвычегодске). 

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        К строгановскому барокко относят четыре постройки: собор Введенского монастыря в Сольвычегодске (1689- 1693 гг.), Казанскую церковь в Устюжне (1694 г.), Смоленскую церковь в Гордеевке (1694-1697 гг.) и Рождественскую церковь в Нижнем Новгороде (1697-1703 гг.). Судя по характеру архитектуры, особенно деталей, все эти постройки возвел один зодчий (скорее всего, русский зодчий, так как он был хорошо знаком с московской архитектурой). 

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Объемно-планировочная структура Введенского собора очень проста – это квадратное в плане бесстолпное здание с тремя апсидами, стоящее на подклете, образующем с трех сторон крытую галерею. Наиболее оригинальной является конструкция его перекрытия: сомкнутый свод с распалубками и вырезанными углами, создающий систему перекрещивающихся арок, позволил зодчему на бесстолпном объеме установить пятиглавие, все главы которого световые. В интерьере получилось легкое и свободное пространство, хорошо освещенное как сверху, так и через большие боковые окна. Снаружи здание разделено карнизом на два яруса и оформлено двухъярусным ордером. 

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Сравнительно небольшие церкви в Устюжне (ныне Вологодская обл.) и Гордеевке очень сходны между собою. Они представляют собой бесстолпные объемы, к которым с севера примыкают приделы, а с запада – колокольня (в Устюжне колокольни нет, хотя сохранились пилоны ее основания). 

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Наконец, последняя по времени в ряду этих строгановских построек – Рождественская церковь – отличается особым богатством декоративного оформления. Здесь к бесстолпному квадратному в плане объему с запада примыкает довольно длинная трапезная, а несколько в стороне стоит высокая многоярусная колокольня. Здание поднято на высокий подклет и перекрыто сомкнутым сводом с пятью световыми главами. В отличие от собора Введенского монастыря, в Рождественской церкви конструкция свода явно отражена снаружи. Это достигается выделением верхнего крестообразного в плане яруса под боковыми главами. Чрезвычайно декоративно оформленные главы с узорными железными крестами венчают здание. В интерьерах строгановские храмы почти полностью лишены декоративного убранства и на фоне беленых стен ярко рисуются роскошные резные иконостасы.

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Также по заказу Строганова была возведена гражданская постройка – палаты Строганова в усолье, а также надвратная Иоанно-Предтеченская церковь в Троице-Сергиевой лавре (Сергиев Посад) (1693-1699 гг.).
Смелость и своеобразие конструктивных решений и исключительное качество выполнения всех работ свидетельствуют о таланте зодчего и высокой квалификации выполнявших постройку мастеров. Зодчий, несомненно, великолепно знал классические архитектурные формы и широко использовал их в оформлении всех четырех храмов. Канонические формы ордеров – колонны, капители, антаблементы, фронтоны и даже сам характер применения этих форм дают основания утверждать, что зодчий не только знал западноевропейскую архитектуру, но понимал логику использования ордерной системы. В то же время некоторая традиционность плановых композиций и применение привычных для XVII в. деталей (арки с гирьками, изразцовые вставки и пр.) склоняют к убеждению, что строительством руководил не иноземец, а русский зодчий. Насыщенность декоративной резьбой, образующей порой вокруг окон пышные картуши, заметно отличает строгановские постройки от нарышкинских.

                        </p>
                    </div>
                    
                    {/* <FooterWidget /> */}
                    {/* ФУТЕР */}
                    <SrcLine>
                        <li><a>Раппопорт П.А. Древнерусская архитектура. – СПб.: Строй-издат. С.-Петербургское отд-ние, 1993. – 289 с.</a></li>
                        <li><a>Брайцева О.Б. Строгановские постройки рубежа XVII - XVIII веков. Москва, 1977.</a></li>
                    </SrcLine>
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Строгановское шитье</p>
                        <p className="next-h2">
                        
                        Вышивание было широко распространено на Руси — драгоценные ткани у нас начали производить только с XVIII века.
                        </p>
                        <a href="/sewing"><button type="button" className="block">Читать</button></a>
                    </div>
                </div>

                <FeedBackWidget trigger={buttonPopup} setTrigger={setButtonPopup} />
                                    
                <div className="container-fluid3">
                    <Footer />
                </div> 
            </div>
            
        </div>
    )
}

export {BarokkoApp};