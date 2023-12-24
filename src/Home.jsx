import React, {useRef, useState, useEffect } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import validator from "validator/es";
import assets from "./asset.jsx";
import {Link} from "react-router-dom";






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

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

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

            <nav >
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    {/*<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">*/}
                    {/*    <h3 className="self-center text-white text-2xl font-semibold whitespace-nowrap ">*/}
                    {/*        Uprajay Danny*/}
                    {/*    </h3>*/}
                    {/*</Link>*/}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <p>UD</p>
                        {/*<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">*/}
                        <ul className={'navbar-nav'}>
                            <li>

                                <a href={'#presentation'}
                                   className="block py-2 px-3 nav_link text-center rounded md:border-0  md:p-0 "
                                >
                                    Présentation
                                </a>
                            </li>
                            <li>

                                <a href={'#projet'}
                                   className="block py-2 px-3 nav_link  text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a href={'#contact'}
                                   className="block nav_link py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Me contacter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <header className={"header justify-between flex items-center"}>


                    <a href="https://github.com/" target="_blank"
                       rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>

                    <a href={assets.cv} download={"Cv"}>
                        <button className="font-bold py-2 px-4 rounded inline-flex items-center">
                            <p>Mon CV</p>
                        </button>
                    </a>


                </header>
            </section>
            <main className={'container mx-auto w-1/2'}  style={{position: "relative",  overflow: 'hidden'}}>





                    <section className="portfolio text-left section" id={'home'}>

                        <h1 className="font-bold ">Hey,I'm Danny<span></span></h1>
                        <h4>Je suis <span>Développeur web</span> </h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos enim error esse et eum labore laboriosam laudantium obcaecati quam quia quisquam quo repellendus rerum sint suscipit temporibus, veniam voluptas?</p>

                        <a
                            href="#contact"

                        >
                            <button>Me contacter
                            </button>

                        </a>

                    </section>



                <a name="presentation"></a>
                <section id={'presentation'} className={"section presentation container mx-auto"}>

                    <div className={'header_sectionHeader__aMRKR'}>
                    <h2 className={'text-center text-7xl'}>About <span></span> </h2>
                    <div className="header_line__AkXvu"></div>
                    </div>


                    <div className={'grid lg:grid-cols-2 md:grid-cols-1 container mx-auto gap-20 '}>



                        <div className={'text-left col-2  '}>

                            <p className={'text-left mb-10'}>

                                Salut, je m'appelle Danny, j'ai 27 ans et je suis développeur web. J'ai
                                récemment achevé ma formation en développement web chez Human Booster, validant ainsi le
                                titre RNCP niveau 5 (BAC+ 2). <br/> br Je souhaite désormais mettre en pratiques mes compétences
                                dans le monde professionnel.
                            </p>
                            <p className={'mb-10'}>| Technologies : <i
                                className="fa-brands fa-symfony "></i> <i className="fa-brands fa-angular"></i> <i
                                className="fa-brands fa-react"></i> <i className="fa-solid fa-database"></i>
                                <i className="fa-brands fa-bootstrap"></i> <i className="fa-brands fa-figma"></i> |</p>

                        </div>




                        <div className={""}>
                            <h5>Utilisée en cours</h5>

                        </div>

                    </div>

                </section>

                <hr/>
                <a name="projet"></a>
                <section id={'projet'} className="section projet grid grid-cols-1 text-center justify-center items-center relative">

                    <h2 className={"text-white text-center"}>Projets récents</h2>

                    <div className={"flex justify-center"}>


                        <div className={"grid grid-cols-1 justify-center items-center gap-5 "}>

                            <div className={` overflow-hidden card relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-white shadow-md flex-row`}>
                                <div
                                    className=" m-0 text-gray-700 rounded-r-none overflow-hidden  bg-clip-border rounded-xl shrink-0">
                                    <img src={assets.logoNft} alt="card-image-projetNft"
                                         className=" object-cover w-80 h-full "/>
                                </div>

                                <div className="p-6 mt-5 w-10/12 justify-end ">
                                    <h6
                                        className="block mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal uppercase">
                                        Lové NFT
                                    </h6>

                                    <p className="block mb-8 font-sans antialiased font-normal leading-relaxed ">
                                        Lové NFT est une application web qui permet de des NFT et bien plus encore...
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

                            <div  className={` overflow-hidden card relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-white shadow-md flex-row`}>

                                <div
                                    className="relative w-5/5 m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                    <img
                                        src={assets.logoMma}
                                        alt="card-image-projetNft" className="object-cover w-80 h-full"/>
                                </div>
                                <div className="p-6 mt-5">
                                    <h6
                                        className="block  mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                        MMA PULSE
                                    </h6>
                                    <p className="block mb-8 font-sans antialiased font-normal leading-relaxed ">
                                        MMA PULSE est un site pour explorer le club, ses sports et plus encore ...
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


                        </div>

                    </div>

                </section>

                <a name="contact"></a>
                <section  className="section" id="contact">

                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                                    Mon profil vous intéresse ? </p>
                                <h2
                                    className="font-heading mb-4 mt-5 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                    Contactez-moi
                                </h2>

                            </div>
                        </div>

                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">

                                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                        N'hésitez pas à me contacter pour tout complément d'information, ou toute autre
                                        question =)
                                    </p>

                                    <ul className="mb-6 md:mb-0">
                                        <li className="flex">

                                            <div
                                                className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                                                    :
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">20 rue de la
                                                    république</p>
                                                <p className="text-gray-600 dark:text-slate-400">69190, saint-fons</p>
                                            </div>

                                        </li>
                                        <li className="flex">

                                            <div
                                                className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                                                           placeholder="Nom*"
                                                           className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                                                           name="to_name"/>

                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <input type="email" id="email" onChange={(e) => validateEmail(e)}
                                                           autoComplete="email" placeholder="E-mail*"
                                                           className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4  sm:mb-0"
                                                           name="from_name"/>
                                                    <span style={{fontWeight: "bold", color: "red"}}>{message}</span>
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

            </main>

        </>


    );

};

export default Home;