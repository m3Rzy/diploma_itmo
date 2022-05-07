import '../styles/newmain.css';
import avatar from '../assets/logo.jpg';
import logoblack from '../assets/logo-black.png';
import p1 from '../assets/posts/1.png';
import p2 from '../assets/posts/2.png';
import p22 from '../assets/posts/2-2.png';
import p33 from '../assets/posts/3-3.png';
import p44 from '../assets/posts/4-4.png';
import p55 from '../assets/posts/5-5.png';
import p5 from '../assets/posts/5.png';
import vk from '../assets/posts/icons8-vk-в-круге-48.png';
import gmail from '../assets/posts/icons8-gmail-48.png';
import '../styles/allObjects.css';
import nullimg from '../assets/img-pages/null.png';




function NewMain() {
	document.title = 'Павел Сергеевич Строганов — Главная';
    return (
        <>
		
        <div id="wrapper">
			
		<header id="header">
			{/* <h1><a href="#">История о П. С. Строганове</a></h1> */}
			<h1><a href="#"><img src={logoblack} width="250px"/></a></h1>
			<nav className="links">
				
				<ul>
					<li className='icons-li'></li>
					<li className='icons-li'><a href="/search">СТАТЬИ</a></li>
					<li className='icons-li'><a href="#openModal">КОНТАКТЫ</a></li>
					{/* <li><a href="/search">ПОИСК</a></li> */}
				</ul>
			</nav>
		</header>
		<div id="openModal" className="modal">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title">Контакты</h3>
					<a href="#close" title="Close" className="close">×</a>
				</div>
				<div className="modal-body">    
							<ul className="icons">
								<li><a href="https://vk.com/itmoru" className="fa-instagram"><img src={vk} width="40px"/></a></li>
								<li></li>
								<li></li>
								<li><a href="abit@itmo.ru" className="fa-envelope"><img src={gmail} width="40px"/></a></li>
								<li></li>
								<li></li>
								<li><a href="">+7 (812) 480-04-80</a></li>
							</ul>
				</div>
				</div>
			</div>
		</div>
		<div id="main">
			
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/family">Род Строгановых</a></h4>
						<p>Служение России. Великие предприниматели и меценаты Строгановы</p>
					</div>
					<div className="meta">
						<h5>НАУЧНАЯ СТАТЬЯ</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/family" className="image featured"><img src={p5} alt="" /></a>
				<p>Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и
					государственные деятели XVI—XX веков.</p>
				<footer>
					<ul className="actions">
						<li><a href="/family" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>

			<article className="post">
				<header>
					<div className="title">
						<h4><a href="#">Современная жизнь дома</a></h4>
						<p>Общая информация</p>
					</div>
					<div className="meta">
					<h5>Университет ИТМО</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="#" className="image featured"><img src={p2} alt="" /></a>
				<p>НВ 1952 г. образован радиотехнический техникум, в состав которого вошел Ленинградский электромеханический техникум трамвайно-троллейбусного управления. В 1957 г. он переименован в Ленинградский радиотехнический техникум № 1, в 1966 г. техникум морского приборостроения. Подведомственность: до марта 1953, 1955 - 1957 гг. Министерства судостроительной промышленности СССР, март 1953 - 1955 гг. Министерства транспортного и тяжелого машиностроения СССР, июнь 1957- декабрь 1965 гг. Управления кадров и учебных заведений Ленсовнархоза, с 28 декабря 1965 г. Министерства судостроительной промышленности СССР.
				</p>
				<footer>
					<ul className="actions">
						<li><a href="#" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">Павел Сергеевич Строганов и его дом</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					<h5>"Автор №3"</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={p1} alt="" /></a>
				<p>Обер-шенк русского императорского двора, коллекционер, меценат; представитель славного рода
					Строгановых</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">Сергей Григорьевич Строганов – один из ярчайших российских вельмож</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					<h5>"Автор №3"</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={nullimg} alt="" /></a>
				<p>Либерал? Ретроград? Почвенник? Западник? Великий гуманист? Безжалостный рубака? Все эти социальные ниши вроде бы подходили ему. Но ведь так не бывает!</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">Сольвычегодск. Строганов Аникей Фёдорович</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					<h5>"Автор №3"</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={nullimg} alt="" /></a>
				<p>Строганов Аникей Фёдорович (1488-1570) — создатель солеваренной промышленности в Сольвычегодске и в Перми, крупнейший русский предприниматель своего времени, государственный деятель.</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">П. С. Строганов и его супруга</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					<h5>"Автор №3"</h5>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={nullimg} alt="" /></a>
				<p>Граф Павел Сергеевич Строганов (1823—1911) — обер-шенк русского императорского двора, коллекционер, меценат; старший брат Григория Сергеевича Строганова.</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>


			<ul className="actions pagination">
				{/* <li><a href="" className="disabled button big previous">Предыдущая страница</a></li> */}
				<li><a href="#" className="button big next">Дальше</a></li>
			</ul>
			
		</div>

		<section id="sidebar">
			<section id="intro">
				{/* <a href="#" className="logo"><img src={logo} alt="" width="400px"/></a> */}
				<header>
					<h2>Павел Сергеевич Строганов</h2>
					<p>Исторические факты о П.С. Строганове</p>
				</header>
			</section>

			<section>
				<div className="mini-posts">

					<article className="mini-post">
						<header>
							<h3><a href="/family/acollection">Коллекции графа А. С. Строганова</a></h3>
							<time className="published" datetime="2015-10-20">Граф Александр Сергеевич Строганов — крупнейший коллекционер своего времени</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="/family/acollection" className="image"><img src={nullimg} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="#">Самые яркие дела Строгановых</a></h3>
							<time className="published" datetime="2015-10-19">Это произошло благодаря первопроходцам и купцам из Новгорода, которые оценили эту местность, находящуюся на пересечении двух водных артерий.</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="#">Дача Строгановых</a></h3>
							<time className="published" datetime="2015-10-18">Большая территория между Большой Невкой и Черной речкой</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="#">СТРОГАНОВСКАЯ ИКОНОПИСНАЯ ШКОЛА</a></h3>
							<time className="published" datetime="2015-10-17">Наиболее яркое явление в поздней древнерусской иконописи. Ее хронологические рамки определяются второй половиной 16 – первой половиной 17 в.</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="#">Cтрогановское барокко</a></h3>
							<time className="published" datetime="2015-10-17">Архитектурное направение конца 17-начала 18 вв</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="#">Строгановское шитье</a></h3>
							<time className="published" datetime="2015-10-17">Вышивание было широко распространено на Руси — драгоценные ткани у нас начали производить только с XVIII века.</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="#">Тамбовское имение</a></h3>
							<time className="published" datetime="2015-10-17">Село Кариан-Знаменское расположено в 35 верстах от Тамбова, в селе Знаменское.</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={nullimg} alt="" /></a>
					</article>
				</div>
			</section>

			<section className="blurb">
				<h2>О сайте</h2>
				<p>Сайт представляет собой набор исторических и информационных фактов для ознакомления.</p>
				<ul className="actions">
					<li><a href="https://itmo.ru/ru/" className="button">Подробнее</a></li>
				</ul>
			</section>

			<section id="footer">
				<ul className="icons">
					<li className='icons-li'><a href="https://vk.com/itmoru" className="fa-instagram"><img src={vk} width="40px"/></a></li>
					<li className='icons-li'></li>
					<li className='icons-li'></li>
					<li className='icons-li'><a href="abit@itmo.ru" className="fa-envelope"><img src={gmail} width="40px"/></a></li>
				</ul>
				<p className="copyright">&copy; <a href="#">Университет ИТМО</a>.</p>
			</section>
		</section>
	</div>
        </>
    );
}

export {NewMain};