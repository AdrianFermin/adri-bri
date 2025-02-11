'use client'
import { Col, Row, Image as AntImg, Timeline, Button, Collapse } from "antd";
import { redirect } from "next/navigation";
import { Logo } from "./Logo";
import { SiTinder, SiAnimalplanet  } from "react-icons/si";
import { IoHeartHalf } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaBus, FaBirthdayCake, FaTree, FaAirbnb   } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { PiStudentBold  } from "react-icons/pi";
import { BsCalendarDate, BsCalendarHeart  } from "react-icons/bs";
import { TbBeach, TbChristmasTreeFilled  } from "react-icons/tb";

export const MomentsTimeline = () => {

    const collapseItems: any[] = [
        [
            {
                key: '1',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Como nos conocimos</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">12 de Junio 2022</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Todo empezo en tinder cuando vi esta imagen de la jovencita con una descripcion tan
                                sencilla como "Se hacer postres"
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={100} src={"/images/timeline/imagen1.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ella dice que me dio Like por error y nuestra primera interaccion comenzo con una mentirita
                                inofensiva de ambas partes, asi que estamos a mano😅.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen2.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '2',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">50/50</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">30 de Agosto 2022</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                    <div>
                        <p className="text-lg">
                            Yo desde que empezamos a hablar estuve claro que queria todo contigo y fui por eso desde
                            el inicio, pero la jovencita no estaba segura con su derecho y su razon, pero habia una
                            frase que odiaba y era cada que hablabamos de "nosotros" y me decias 50/50...
                        </p>
                    </div>
                </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '3',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Nuestra Historia: Inicio</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">17 de Septiembre 2022</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese fue el dia de nuestra primera salida cuando viniste a Sambil, comimos helados y fuimos
                                a los trampolines, recuerdo que estabas mega nerviosa no dejabas de hablar y hasta volteaste
                                tu yogen sin querer, eso y la caida hizo que todos mis nervios se fueran y ahi confirme aun mas
                                que eras tu la indicada. No hay fotos, pero recuerdo que llevaste un outfit similar a este:
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen3.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ese dia confirmamos nuestra relacion, pero nuca olvidare como 2 dias antes me enviaste una foto de tu
                                "novio" y era una foto mia, la emocion de ese dia la recuerdo incluso hoy 23 meses depues.
                            </p>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '4',
                label: 
                <>
                    <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl">Mi primera visita</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">30 de Octubre 2022</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese dia fue la primera vez que fui a tu casa y cuando conoci a tu padre, señor miedo tenia
                                yo pero no me dieron ningun machetazo ese dia por suerte, pero lo que si me dieron fue un cabesazo,
                                digo, mi primer beso😂
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={100} src={"/images/timeline/imagen5.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ese dia fue muy bonito, fue la primera vez que pudimos pasar un dia juntos y fuimos donde tu tia,
                                compramos dulces, andamos un poco ahi y la pasamos bien, y tambien intentaste robarte mi abrigo,
                                no puede negar el color. Adjunto pruebas:
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen4.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '5',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Nuestro Primer Desacato</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">27 de Noviembre 2022</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Esta vez practicamente me auto di permiso para irme a Bani un finde completo con George y
                                Lesly, recuerdo que mis padres no estaban muy contentos que digamos, pero el que tenga miedo
                                a morir que no nazca.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen6.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ese dia tambien me diste un regalo que fue un llavero y todavia lo tengo en mi llave, quiza no
                                al 100% me algo queda, salio de calidad la verdad
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen7.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '6',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Primer dia de Clases</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">14 de Enero 2023</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                El 14 de Enero es una fecha que esta marcada en nuestro calendario mental, fue el
                                primer dia que viniste a tomar clases a la uni, recuerdo que fui contigo, conociste a Grey
                                desayunamos y luego nos fuimos a andar como todo estudiante el primer dia.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen8.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ese dia fue la primera vez que viniste a mi casa, conociste a mi hermana, mi abuela y a Sakura
                                muy importante. Tu cara de "Seguro esta hablando con otra"
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen9.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '7',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Dia del Zoologico</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">26 de Febrero 2023</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese dia tuvimos una de las mejores citas de nuestra relacion, nos pasamos el dia en el
                                zoologico, dimos muchas vueltas y salimos con las piernas hechas mierda, pero se disfruto
                                y mucho.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen10.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Luego fuimos a un restaurante asiatico y comiste dumplings verdes que te gustaron mucho,
                                a ti no te gusto la foto pero a mi me encanta esa cara de felicidad que tenias cuando
                                estabas comiendo.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen11.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '8',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-lg md:text-3xl">Nuestra Historia: Primer Aniversario</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">17 de Septiembre 2023</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                El primer aniversario juntos, lo que empezo con un like por error ser termino convirtiendo
                                en tu mejor error y lo mejor que me pudo haber pasado aunque fuese sin querer, ese dia fuimos
                                al mirador e hicimos un picnic muy bueno la verdad.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={100} src={"/images/timeline/imagen12.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '9',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Primer Cumple Juntos</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">26 de Octubre 2023</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Fue el primer cumple de uno de los dos que pudimos pasar juntos y me hicieron toda una
                                sorpresa con bizcocho, fue mi familia y todo eso, cumple de 22 de fortnite y yo el mas
                                feliz contigo al lado.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen13.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Luego me viste jugar y nos pasamos el dia viendo memes y hablando disparates,
                                no se que te estaba mostrando pero se parecia divertido por tu cara.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen14.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '10',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Salida Elegante</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">10 de Diciembre 2023</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Para ese dia se me ocurrio hacer una salida un poco diferente y vestirnos lindos y
                                elegantes e ir a un restaurante "lujoso" y comer elegantes y fisnos.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen15.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Tambien recuerdo que cuando llegaste te grabe un video y te hice un "meme" porque
                                estabas hermosa.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <video width={150} src="/images/timeline/video1.mp4" controls/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '11',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Visita al Jardin Botanico</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">13 de Enero 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese no fue ningun dia especial pero decidimos salir, fue nuestra primera salida del ano
                                pasado y aunque caminamos un buen valio la pena, vimos muchas cosas bonitas y la pasamos super.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen17.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Tambien te tome esta foto linda en el puente que crujia potente, pero se confio y no se cayo
                                por suerte.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen18.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '12',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Viaje al Airbnb</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">4 de Marzo 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Habiamos planeado hace mucho una salida asi hace mucho y al fin pudimos hacerla,
                                yo fui a Bani y nos pasamos todo el dia en un Aribnb, cocinamos, comimos y cosas
                                no aptas para aqui, pero fue espectacular ese dia.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen19.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Ese dia tambien fue cuando te regale tu anillo y aunque no fue por eso
                                ya no podias decirme que el anillo pa cuando?
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen20.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '12',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Salida con tu Abuelo</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">23 de Junio 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese dia conoci a tu abuelo y un poco cagado estaba, pero bueno, aunque al final
                                fue un poco incomodo el dia fue 10/10 comiendo las yaniquecas gigantes y hablando
                                toyos.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen21.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '13',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Mi Graduacion</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">2 de Agosto 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese dia alquilaste un vestido especialmente para ir, fuiste con mi familia y todo,
                                al final de esa carrera el estres que tuve tu lo sabes y el alivio que tenia contigo
                                era lo que me ayudaba a sobrellevarlo mejor.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen22.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Luego de la graduacion fuimos a tomarnos la sesion de fotos y al final comimos
                                mofongo en Adrian Tropical.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen26.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '14',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-lg md:text-3xl">Nuestra Historia: Segundo Aniversario</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">17 de Septiembre 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                En nuestro segundo aniversario repetimos ir al mirador sur y vimos a dos palomas peleando
                                incluso le pusimos musica de linking park de fondo. Y lo peor es que solo tenemos foto de 
                                eso de todo el dia.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <video width={150} src="/images/timeline/video2.mp4" controls/>
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Luego de eso fuimos a comer a Rafelo y estuvo bien bueno, de ese dia ya no tenemos 
                                mas fotos pero pongo esta en la que sales hermosa sonriendo al natural.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen23.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '15',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Salida de Navidad</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">17 de Noviembre 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Ese dia fui a tu casa y me invitaste a pala pizza y al final la habian mudado de sitio
                                y tuvimos que ir caminando hasta alla bajo el sol y con miedo que nos atraquen.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen24.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Luego fuimos a comer helados y a dar vueltas por las tiendas y al final no encontramos
                                nada, solamente unas frutas muy poco legales y calderos bien caros.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen25.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
        [
            {
                key: '16',
                label: 
                <>
                    <div className="font-angelia">
                        <h3 className="font-semibold text-xl md:text-3xl">Daypass</h3>
                        <p className="text-gray-500 mb-2 md:text-lg">14 de Diciembre 2024</p>
                    </div>
                </>,
                children:
                <>
                    <div className="font-angelia">
                        <div>
                            <p className="text-lg">
                                Esa fue nuestra ultima salida pero ha sido igual de las mejores, nos fuimos a un monte a
                                un pasadia para los dos, comimos mucho, armamos rompecabezas, nos reimos, vimos videos, de
                                todo un poco. 
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={200} src={"/images/timeline/imagen27.jpg"} />
                                </Col>
                            </Row>
                            <p className="text-lg">
                                Incluso tenia piscina y nos pusimos a brechar desde arriba mientras comiamos tostitos
                                y disfrutabamos la piscina aunque el agua estaba peor que Alaska.
                            </p>
                            <Row className="my-4" justify={"end"}>
                                <Col>
                                    <AntImg width={150} src={"/images/timeline/imagen28.jpg"} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>,
                showArrow: false
            }
        ],
    ]

    const items = [
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[0]}></Collapse>
            </>,
            dot: <SiTinder className="text-xl md:text-3xl"/>,
            color: 'red',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[1]}></Collapse>
            </>,
            dot: <IoHeartHalf className="text-xl md:text-3xl"/>,
            color: 'red',
        }, 
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[2]}></Collapse>
            </>,
            dot: <GiLovers className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[3]}></Collapse>
            </>,
            dot: <FaBus className="text-xl md:text-3xl"/>,
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[4]}></Collapse>
            </>,
            dot: <MdOutlinePool className="text-xl md:text-3xl"/>,
        },
        {
            children: 
            <>
                <div id="2023" className="font-angelia">
                    <h3 className="font-semibold text-4xl md:text-3xl me-2">2023</h3>
                </div>
            </>,
            dot: <BsCalendarDate className="text-3xl md:text-3xl"/>,
            color: 'blue'
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[5]}></Collapse>
            </>,
            dot: <PiStudentBold className="text-xl md:text-3xl"/>,
            color:'gray',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[6]}></Collapse>
            </>,
            dot: <SiAnimalplanet className="text-xl md:text-3xl"/>,
            color:'green',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[7]}></Collapse>
            </>,
            dot: <BsCalendarHeart  className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[8]}></Collapse>
            </>,
            dot: <FaBirthdayCake  className="text-xl md:text-3xl"/>,
            color:'blue',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[9]}></Collapse>
            </>,
            dot: <FaBowlFood className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <div id="2024" className="font-angelia">
                    <h3 className="font-semibold text-4xl md:text-3xl me-2">2024</h3>
                </div>
            </>,
            dot: <BsCalendarDate className="text-3xl md:text-3xl"/>,
            color: 'blue'
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[10]}></Collapse>
            </>,
            dot: <FaTree className="text-xl md:text-3xl"/>,
            color:'green',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[11]}></Collapse>
            </>,
            dot: <FaAirbnb className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[12]}></Collapse>
            </>,
            dot: <TbBeach className="text-xl md:text-3xl"/>,
            color:'blue',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[13]}></Collapse>
            </>,
            dot: <PiStudentBold className="text-xl md:text-3xl"/>,
            color:'gray',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[14]}></Collapse>
            </>,
            dot: <BsCalendarHeart className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[15]}></Collapse>
            </>,
            dot: <TbChristmasTreeFilled  className="text-xl md:text-3xl"/>,
            color:'green',
        },
        {
            children: 
            <>
                <Collapse ghost items={collapseItems[16]}></Collapse>
            </>,
            dot: <MdOutlinePool className="text-xl md:text-3xl"/>,
            color:'blue',
        },
        {
            children: 
            <>
                <div id="2025" className="font-angelia">
                    <h3 className="font-semibold text-4xl md:text-3xl me-2">2025</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">Coming soon....</p>
                </div>
            </>,
            dot: <BsCalendarDate className="text-3xl md:text-3xl"/>,
            color: 'blue'
        },
    ]

    return (
        <>
            <div>
                <Row className="my-4" justify={"center"}>
                    <Button className="mx-2 bg-[#8F0700] hover:bg-[#7FCFDD]" type="primary" size="large">
                        <a href="#2023">2023</a>
                    </Button>
                    <Button className="mx-2 bg-[#8F0700] hover:bg-[#7FCFDD]" type="primary" size="large">
                        <a href="#2024">2024</a>
                    </Button>
                    <Button className="mx-2 bg-[#8F0700] hover:bg-[#7FCFDD]" type="primary" size="large">
                        <a href="#2025">2025</a>
                    </Button>
                </Row>
            </div>
            <br />
            <div className="grid grid-cols-10">
                <div className="col-span-8 col-start-2">
                    <Timeline mode="right" items={items}></Timeline>
                </div>
            </div>
        </>
    )
}