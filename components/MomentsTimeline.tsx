'use client'
import { Col, Row, Image as AntImg, Timeline } from "antd";
import { redirect } from "next/navigation";
import { Logo } from "./Logo";
import { SiTinder } from "react-icons/si";
import { IoHeartHalf } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaBus } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const MomentsTimeline = () => {

    const items = [
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Como nos conocimos</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">12 de Junio 2022</p>
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
            dot: <SiTinder className="text-xl md:text-3xl"/>,
            color: 'red',
        },
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">50/50</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">30 de Agosto 2022</p>
                    <div>
                        <p className="text-lg">
                            Yo desde que empezamos a hablar estuve claro que queria todo contigo y fui por eso desde
                            el inicio, pero la jovencita no estaba segura con su derecho y su razon, pero habia una
                            frase que odiaba y era cada que hablabamos de "nosotros" y me decias 50/50...
                        </p>
                    </div>
                </div>
            </>,
            dot: <IoHeartHalf className="text-xl md:text-3xl"/>,
            color: 'red',
        }, 
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Nuestra Historia: Inicio</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">17 de Septiembre 2022</p>
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
            dot: <GiLovers className="text-xl md:text-3xl"/>,
            color:'red',
        },
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Mi primera visita</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">30 de Octubre 2022</p>
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
            dot: <FaBus className="text-xl md:text-3xl"/>,
        },
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Nuestro Primer Desacato</h3>
                    <p className="text-gray-500 mb-2 md:text-lg">27 de Noviembre 2022</p>
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
            dot: <MdOutlinePool className="text-xl md:text-3xl"/>,
        },
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Primer dia de Clases</h3>
                    <p className="text-gray-500 mb-2 md:text-lg"></p>
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
            dot: <PiStudentBold className="text-xl md:text-3xl"/>,
            color:'gray',
        },
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl me-1">Primer dia de Clases</h3>
                    <p className="text-gray-500 mb-2 md:text-lg"></p>
                    <div>
                        <p className="text-lg">
                            Quiza no sea 
                        </p>
                        <Row className="my-4" justify={"end"}>
                            <Col>
                                <AntImg width={100} src={"/images/timeline/imagen1.jpg"} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </>,
            dot: <PiStudentBold className="text-xl md:text-3xl"/>,
            color:'red',
        },
    ]

    return (
        <>
            <div className="grid grid-cols-10">
                <div className="col-span-8 col-start-2">
                    <Timeline mode="right" items={items}></Timeline>
                </div>
            </div>
        </>
    )
}