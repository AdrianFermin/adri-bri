'use client'
import { Col, Row, Image as AntImg, Timeline } from "antd";
import { redirect } from "next/navigation";
import { Logo } from "./Logo";
import { SiTinder } from "react-icons/si";
import Image from "next/image";

export const MomentsTimeline = () => {

    const items = [
        {
            children: 
            <>
                <div className="font-angelia">
                    <h3 className="font-semibold text-xl md:text-3xl">Como nos conocimos</h3>
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
            dot: <SiTinder id="timeline1" href="#timeline1" className="text-xl md:text-3xl"/>,
            color: 'red',
        },
        {
            children: 'Prueba 2'
        }
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