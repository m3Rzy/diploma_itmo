import '../styles/family.css';
import '../styles/scroll.css';
import '../styles/allObjects.css'
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import sitmo from '../assets/logo-full.png';
import '../fonts.css';
import strog from '../assets/img-pages/strog.jpg';
import kochubej from '../assets/img-pages/kochubej.jpg'
import sgd_father from '../assets/img-pages/SGD.jpg'
import ssg_son from '../assets/img-pages/SSG.jpg'
import sas_son from '../assets/img-pages/SAS.jpg'
import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import '../styles/anchor.css';
const { Link } = Anchor;


function FamilyApp() {
    document.title = 'Род Строгановых';
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
        <div className="FamilyApp">
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            
            <div className="container-fluid" id="supertitle">
                
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>

                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" />
                        <a href="/" className="nextbutton">Назад</a>
                    </div>
                    <div className="titles">
                        <h1 className="title_main">Род Строганова</h1>
                        <h3 className="title_help">Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и государственные деятели XVI—XX веков.</h3>
                        <div className="line"></div>
                    </div>
                </div>
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="Служение России: Строгановы"/>
                                <Link href="#ssg" title="Александр Григорьевич Строганов"></Link>
                            <Link href="#part2" title="Государственный деятель и меценат" />
                        </Anchor>
                    </section>
            </div>
            
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                     
                        Служение России. Великие предприниматели и меценаты прошлого: Строгановы
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>История знаменитого рода Строгановых тесно связана с судьбами России на протяжении длительного, многовекового периода. Изменения, которые претерпевало их предпринимательское дело, формы и методы накопления капитала и хозяйствования во многом были характерны для всего Московского государства, а позднее и обширной Российской империи.
                    </p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={sgd_father} className="strog-img"></img>
                        <p className='podimg'>Портрет Григория Дмитриевича Строганова, не позднее 1715 г.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Строгановы во многих отношениях исключительная, единственная в своем роде династия. Еще в допетровскую эпоху, благодаря своему неслыханному богатству, не будучи боярской по своему происхождению, она занимала почетное место среди самых влиятельных семей, приближенных к трону. По своему положению владетелей громадных вотчин, военных форпостов на самой окраине Русского государства, Строгановы сравнимы с самыми могущественными феодалами средневековой Европы.
Даже среди дворянских родов династия Строгановых значительно выделялась своими заслугами, которые многократно отмечались в жалованных грамотах и «милостивых рескриптах».
</p>
                    </div>
                    <div className="textarea-normal">
                        <p>У <a href="#ssg" className='hyperurl'>Григория Дмитриевича Строганова</a> от двух браков родилось пять сыновей. Второй по старшинству сын, Александр (1795–1891), – граф, генерал-адъютант, член Государственного совета, пользовался немалой известностью. Воспитание он получил в корпусе инженеров путей сообщения, по окончании курса которого поступил в лейб-гвардии артиллерийскую бригаду. А. Г. Строганов находился в рядах войск, преследовавших отступавшего из России Наполеона, участвовал в сражениях под Дрезденом, Кульмом, Лейпцигом. В 1831 году Строганов участвовал в подавлении польского восстания, в 1834 году был назначен товарищем министра внутренних дел, каковым пробыл до 1836 года, когда получил пост генерал-губернатора черниговского, полтавского и харьковского. В 1839–1841 годах он вновь в Министерстве внутренних дел, теперь уже в качестве управляющего министерством. С 1849 года А. Г. Строганов являлся членом Государственного совета. Пробыв год (1854) военным губернатором Петербурга, он около девяти лет состоял новороссийским и бессарабским генерал-губернатором. Таков внушительный послужной список этого государственного деятеля.</p>
                    </div>
                    <div className="textarea-normal" id='ssg'>
                        <p><a href="#ssg" className='hyperurl'>Александр Григорьевич Строганов</a>, как и многие другие Строгановы, начиная со второй половины 1850-х годов, принимал активное участие в крупных коммерческих предприятиях. Длительное время он являлся председателем образованного в 1856 году Главного общества российских железных дорог – первого акционерного железнодорожного общества в России, на которое была возложена грандиозная задача постройки трех тысяч верст железнодорожного полотна, по существу, создания сети железных дорог в стране.</p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={ssg_son} className="strog-img"></img>
                        <p className='podimg'>Портрет Александр Григорьевича Строганова</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Известен он был и как меценат. В бытность свою в Одессе Строганов состоял президентом тамошнего «Общества истории и древностей российских», сделал много ценных пожертвований в его музей. В 1857 году он представил государю свой проект преобразования Ришельевского лицея в Новороссийский университет с юридическим и агрономическим факультетами, но по финансовым соображениям осуществление проекта было тогда отложено. После отставки от должности новороссийского генерал-губернатора Строганов был избран почетным гражданином Одессы, в которой провел последние годы жизни. Скончался он в возрасте 96 лет. Его громадная библиотека, согласно завещанию, досталась Томскому университету.</p>
                    </div>
        
                    {/* НОВЫЙ ТАЙТЛ */}

                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part2">
                            Государственный деятель и меценат
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Наибольшей известностью из нового поколения Строгановых пользовался старший сын «строптивого» дипломата <a href="#" className='hyperurl'>Сергей Григорьевич (1794–1882)</a> – выдающийся государственный деятель и меценат, с именем которого связан новый этап в истории старинной русской династии, ее возрождение и продолжение. Когда грянула Отечественная война 1812 года, Сергей Григорьевич заканчивал курс в Институте инженеров путей сообщения, куда поступил в 15 лет. Зачисленный на военную службу, он участвовал в войне с Наполеоном, отличился в Бородинском сражении. С. Г. Строганов прошел всю войну, находился в рядах русских войск, триумфально вступивших в 1814 году в Париж.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>После возвращения войск в Россию С. Г. Строганов с января 1816 года служит штаб-ротмистром в лейб-гвардии гусарском полку, расквартированном в Царском Селе, где в то же время заканчивал учебу молодой лицеист Александр Пушкин. В лицейские годы Пушкин был влюблен в Наталью Кочубей, жившую с родителями в летние месяцы на царскосельской даче. Среди знакомых юной красавицы, несомненно, был и молодой гвардейский ротмистр. В сентябре 1820 года она стала женой барона Александра Григорьевича Строганова, родного брата Сергея Григорьевича.</p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={kochubej} className="strog-img"></img>
                        <p className='podimg'>Портрет Н. В. Кочубей. 1813 г.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Продолжая военную службу С. Г. Строганов (с сентября 1828 года – генерал-майор) участвует в русско-турецкой войне 1828–1829 годов. В это же время он привлекается к работе различных государственных комитетов. Еще в чине полковника граф стал членом Комитета устройства учебных заведений (1826–1835). Первым опытом работы комитета стал новый устав гимназий, изданный 8 декабря 1828 года. Строганов принимал участие и в подготовке нового университетского устава, вступившего в силу в 1835 году.</p>
                    </div>


                    {/* ФУТЕР */}

                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Дом П. С. Строганова на Сергиевской улице</p>
                        <p className="next-h2">Дворец Строгановых, построенный по проекту архитектора Франческо Бартоломео Растрелли в 1753—1754 годах, один из образцов уникального растреллиевского «барочно-рокайльного стиля».</p>
                        <a href="/house"><button type="button" className="block">Читать</button></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid3">
                <div className="footer-pooper">
                    <img src={sitmo} width="200px" alt="" className="logo_img_footer" />
                    <p className="excep">Нашли ошибку в тексте? Выделите ее и нажмите Ctrl + Enter</p>
                    <div className="line-footer"></div>
                    <p className="rules">© 2022 ITMO Unversity</p>
                    <div className='footer-pravo'>Информация о политике конфиденциальной информации.. 
№ ФС00‑00000 выдано Роскомнадзором 0 никогда 0000 г.</div>
                </div>
            </div>
    </div>
    );

    
}

export {FamilyApp};