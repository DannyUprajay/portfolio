import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import validator from "validator/es";
import assets from "./asset.jsx";
// import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/';


const Home = () => {

    // Nav
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navLinks = useRef([]);
    const sectionEls = useRef([]);

    //Contact form
    const [messageSubmit, setMessageSubmit] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef(null);

    let currentSection;

    useEffect(() => {
        navLinks.current = document.querySelectorAll('.nav_link');
        sectionEls.current = document.querySelectorAll('.section');

        const handleScroll = () => {
            sectionEls.current.forEach(sectionEl => {
                if (window.scrollY >= sectionEl.offsetTop - 200) {
                    currentSection = sectionEl.id;

                    if (currentSection === 'home') {
                        // Remove 'active' class from all nav links
                        navLinks.current.forEach(navLink => {
                            navLink.classList.remove('active');
                        });
                    }
                }
            });

            navLinks.current.forEach(navLink => {
                if (navLink.href.includes(currentSection) && currentSection !== 'home') {
                    // Remove 'active' class from any other section
                    document.querySelector('.active')?.classList.remove('active');
                    navLink.classList.add('active');
                }
            });
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentSection]);

    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    // };

    const validateEmail = e => {
        const email = e.target.value;
        if (validator.isEmail(email)) {
            setMessage('Thank you');
        } else {
            setMessage('Please, enter valid Email!');
        }
    };

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_kl1w8ml', 'template_gmeb9x3', form.current, 'htvVX7LITFJ9ult9M')
            .then(
                result => {
                    console.log(result.text);
                    console.log('ok');
                    setMessageSubmit('Votre message à bien été envoyé!');
                },
                error => {
                    console.log(error.text);
                    console.log('nope');
                }
            );
    };

    return (
        <>

            <nav>
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <Fade top delay={1000}>

                            <p>UD</p>
                        </Fade>

                        {/*<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">*/}
                        <ul className={'navbar-nav'}>
                            <Fade left delay={200}>
                                <li>

                                    <a href={'#presentation'}
                                       className="block py-2 px-3 nav_link text-center rounded md:border-0  md:p-0 "
                                    >
                                        Présentation
                                    </a>
                                </li>
                            </Fade>
                            <Fade left delay={400}>

                                <li>

                                    <a href={'#projet'}
                                       className="block py-2 px-3 nav_link  text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    >
                                        Projets
                                    </a>
                                </li>
                            </Fade>
                            <Fade left delay={600}>

                                <li>
                                    <a href={'#contact'}
                                       className="block nav_link py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    >
                                        Me contacter
                                    </a>
                                </li>
                            </Fade>

                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <header className={"header justify-between flex items-center"}>

                    <div className={'flex gap-3'}>

                        <Fade top delay={1000}>

                            <a href="https://github.com/DannyUprajay" target="_blank"
                               rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </Fade>
                        <Fade top delay={1400}>

                            <a href="https://www.linkedin.com/in/danny-uprajay/" target="_blank"
                               rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </Fade>

                    </div>
                    <Fade top delay={1800}>

                        <a href={assets.cv} download={"Cv"} className={'cv'}>
                            <button className="font-bold py-2 px-4 rounded inline-flex items-center">
                                <p>Mon CV</p>
                            </button>
                        </a>
                    </Fade>


                </header>
            </section>
            <main >


                <section className="portfolio text-left section" id={'home'}>

                    <Reveal>

                        <h1 className="font-bold ">Hey, je m'appelle Danny<span></span></h1>
                        <h4>Je suis <span>Développeur web</span></h4>
                        <p>Je viens tout juste de finir ma formation de développeur web </p>


                        <a
                            href="#contact"

                        >
                            <button>Me contacter
                            </button>

                        </a>
                    </Reveal>

                </section>


                <a name="presentation"></a>
                <section id={'presentation'} className={"section presentation block justify-center mx-auto w-11/12"}>
                    <Reveal>
                        <div className={'header_sectionHeader__aMRKR'}>
                            <h2 className={'text-center text-6xl'}>About <span></span></h2>
                            <div className="header_line__AkXvu"></div>
                        </div>
                    </Reveal>

                    <div className={'grid lg:grid-cols-2 md:grid-cols-1 gap-20 '}>


                        <div className={'text-left col-2  '}>

                            <Reveal duration={1000} delay={1000}>
                                <p className={'text-left mb-10 text_resume'}>

                                    Salut ! Je m'appelle Danny, j'ai 27 ans et je suis développeur web. J'ai
                                    récemment achevé ma formation en développement web chez Human Booster, validant
                                    ainsi le
                                    titre RNCP niveau 5 (BAC+ 2).

                                    <br/> <br/>

                                    Pendant ma formation, j'ai eu l'opportunité d'explorer divers langages de
                                    programmation tels
                                    que PHP avec son remarquable framework Symfony, ainsi que JavaScript avec son
                                    framework Angular.
                                    Cette expérience a été vraiment enrichissante ! 🚀

                                    <br/><br/>

                                    En dehors de cela, je suis passionné par la 3D. Ayant acquis une bonne expérience
                                    personnelle
                                    sur Blender par le passé, je me lance actuellement le défi de combiner ma passion
                                    pour la 3D avec le codage en utilisant Three.js.

                                    <br/><br/>

                                    Je suis actuellement à la recherche de nouvelles opportunités où je pourrais en
                                    apprendre plus sur ma passion pour le code.
                                    Si vous pensez avoir une offre qui pourrait m'intéresser, faisons connaissance ! 🔗


                                </p>
                            </Reveal>
                            <Reveal>
                                <div className={' flex items-center'}>

                                    <p className={'link'}>Liens <i className="fa-solid fa-arrow-right"></i></p>

                                    <div className={'link_icon flex gap-5'}>


                                        <a href="https://github.com/DannyUprajay" target="_blank"
                                           rel="noopener noreferrer"><i
                                            className="fa-brands fa-github"></i></a>
                                        <a href="https://www.linkedin.com/in/danny-uprajay/" target="_blank"
                                           rel="noopener noreferrer"><i
                                            className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </Reveal>
                        </div>


                        <div className={'resume_tech'}>
                            <div className={'resume_tech mb-14'}>
                                <Reveal>
                                    <h5 className={'text-2xl mb-6'}><i
                                        className="fa-solid fa-user-graduate"></i> Utilisée en cours</h5>
                                </Reveal>

                                <Reveal>
                                    <div className={'flex gap-2 mb-4'}>
                                        <span className={'tech'}>JavaScript</span>
                                        <span className={'tech'}>Angular</span>
                                        <span className={'tech'}>HTML</span>
                                        <span className={'tech'}>Github</span>

                                    </div>
                                </Reveal>

                                <Reveal>
                                    <div className={'flex gap-2 mb-4'}>
                                        <span className={'tech'}>Symfony</span>
                                        <span className={'tech'}>Bootstrap</span>
                                        <span className={'tech'}>PHP</span>
                                        <span className={'tech'}>MYSQL</span>
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <div className={'flex gap-2'}>
                                        <span className={'tech'}>CSS</span>
                                        <span className={'tech'}>TypeScript</span>
                                        <span className={'tech'}>SCSS</span>
                                        <span className={'tech'}>Postman</span>


                                    </div>
                                </Reveal>
                            </div>
                            <div className={'resume_tech'}>


                            <Reveal>
                                <h5 className={'text-2xl mb-6'}><i className="fa-solid fa-user-clock"></i> Utilisée
                                    personnellement </h5>
                            </Reveal>
                            <Reveal>
                                <div className={'flex gap-2 mb-4'}>
                                    <span className={'tech'}>React.js</span>
                                    <span className={'tech'}>Three.js</span>
                                    <span className={'tech'}>Tailwind</span>
                                    <span className={'tech'}>Blender</span>
                                </div>
                            </Reveal>
                            </div>
                        </div>

                    </div>

                </section>
                <a name="projet"></a>
                <section id={'projet'}
                         className="section projet grid grid-cols-1 text-center justify-center items-center relative">

                    <div className={'header_sectionHeader__aMRKR'}>
                        <div className="header_line__AkXvu"></div>

                        <h2 className={"text-white text-center text-6xl mx-auto"}>Projets <span></span></h2>
                    </div>

                    <div className={"flex justify-center"}>


                        <div className={"grid grid-cols-1 justify-center items-center gap-5 text_projet "}>
                            <Fade left>
                                <div
                                    className={` overflow-hidden card relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-white shadow-md flex-row`}>
                                    <div
                                        className=" m-0 text-gray-700 rounded-r-none overflow-hidden  bg-clip-border rounded-xl shrink-0">
                                        <img src={assets.logoNft} alt="card-image-projetNft"
                                             className=" object-cover w-80 h-full "/>
                                    </div>

                                    <div className="p-6 mt-5 w-10/12 justify-end ">
                                        <h6
                                            className="block mb-4 text-2xl font-sans antialiased font-semibold leading-relaxed tracking-normal uppercase">
                                            Lové NFT
                                        </h6>

                                        <p className="block mb-8 text_projet ">
                                            Lové NFT est une application web qui permet de des NFT et bien plus encore
                                        </p>

                                        <div className={'mb-5 flex justify-around'}>
                                            <h3>Symfony <i
                                                className="fa-brands fa-symfony"></i></h3>
                                            <h3>Angular <i className="fa-brands fa-angular"></i></h3>

                                        </div>

                                        <div>

                                            <a href="https://github.com/DannyUprajay/NFT_business_case" target="_blank"
                                               rel="noopener noreferrer"
                                               className={"me-4 font-bold"}>Code <small>(Back)</small> </a>

                                            <a href="https://github.com/DannyUprajay/Angular_NFT_HOME" target="_blank"
                                               rel="noopener noreferrer"
                                               className={"me-4 font-bold"}>Code <small>(Front)</small> <br/></a>


                                            <a className={'font-bold'} href="#">Live démo</a>

                                        </div>
                                    </div>

                                </div>
                            </Fade>

                            <Fade right>
                                <div
                                    className={` overflow-hidden card relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-white shadow-md flex-row`}>

                                    <div
                                        className="relative w-5/5 m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                        <img
                                            src={assets.logoMma}
                                            alt="card-image-projetNft" className="object-cover w-80 h-full"/>
                                    </div>
                                    <div className="p-6 mt-5">
                                        <h6
                                            className="block text-2xl mb-4  font-semibold   uppercase">
                                            MMA PULSE
                                        </h6>
                                        <p className="block mb-8 text_projet">
                                            MMA PULSE est un site pour explorer le club, ses sports et plus encore
                                        </p>
                                        <div className={'mb-5 flex justify-around'}>
                                            <h3>Symfony <i
                                                className="fa-brands fa-symfony"></i></h3>
                                            <h3>Scss</h3>

                                        </div>
                                        <div>
                                            <a href="https://github.com/DannyUprajay/Projet-stage" target="_blank"
                                               rel="noopener noreferrer" className={"me-4 font-bold"}>Code</a>
                                            <a href="#" className={'font-bold'}>Live démo</a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                        </div>

                    </div>

                </section>


                <a name="contact"></a>

                <Reveal>
                    <section className="section" id="contact">

                        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

                            <div className="mb-4">
                                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                                        Mon profil vous intéresse ? </p>
                                    <h2
                                        className="font-heading text-center mx-auto mb-4 mt-5 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                        Contactez-moi <span></span>
                                    </h2>

                                </div>
                            </div>

                            <div className="flex contact_info items-stretch justify-center">
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
                                    <div className="h-full pr-6">

                                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                            N'hésitez pas à me contacter pour tout complément d'information, ou toute
                                            autre
                                            question =)
                                        </p>

                                        <ul className="mb-6 md:mb-0">
                                            <li className="flex">

                                                <div
                                                    className="flex h-10 w-10 items-center justify-center rounded text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24"
                                                         fill="none" stroke="currentColor" className="h-6 w-6">
                                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                        <path
                                                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                        </path>
                                                    </svg>
                                                </div>


                                                <div className="ml-4 mb-4">
                                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Adresse

                                                    </h3>
                                                    <p className="text-gray-600 dark:text-slate-400">20 rue de la
                                                        république</p>
                                                    <p className="text-gray-600 dark:text-slate-400">69190,
                                                        saint-fons</p>
                                                </div>

                                            </li>
                                            <li className="flex">

                                                <div
                                                    className="flex h-10 w-10 items-center justify-center rounded text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24"
                                                         fill="none" stroke="currentColor" className="h-6 w-6">
                                                        <path
                                                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                        </path>
                                                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                                                    </svg>
                                                </div>


                                                <div className="ml-4 mb-4">
                                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-slate-400">Numéro:
                                                        07.67.41.39.01</p>
                                                    <p className="text-gray-600 dark:text-slate-400">E-mail:
                                                        danny.uprajay@gmail.com</p>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">

                                        <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>

                                        {/*<form action="">*/}

                                        <form ref={form} onSubmit={sendEmail}>
                                            <span style={{fontWeight: "bold", color: "green"}}>{messageSubmit}</span>
                                            <div className="mb-6">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <div className="mx-0 mb-1 sm:mb-4">
                                                        <label htmlFor="name"
                                                               className="pb-1 text-xs uppercase tracking-wider"></label>
                                                        <input type="text" id="name" autoComplete="given-name"
                                                               placeholder="Nom"
                                                               className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                                                               name="to_name"/>

                                                    </div>
                                                    <div className="mx-0 mb-1 sm:mb-4">
                                                        <label
                                                            className="pb-1 text-xs uppercase tracking-wider"></label>
                                                        <input type="email" id="email"
                                                               onChange={(e) => validateEmail(e)}
                                                               autoComplete="email" placeholder="E-mail*"
                                                               className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4  sm:mb-0"
                                                               name="from_name"/>
                                                        <span
                                                            style={{fontWeight: "bold", color: "red"}}>{message}</span>
                                                    </div>
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <textarea required id="textarea" name="message" cols="30" rows="5"
                                                              placeholder="Message...*"
                                                              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"></textarea>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit"
                                                        className="w-full px-6 py-3 font-xl rounded-md sm:mb-0"
                                                        value="Send">Send Message
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </Reveal>
            </main>

        </>


    );

};

export default Home;