'use client'
import { FlipBook } from "@/components/FlipBook";
import Image from "next/image";
import {Modal} from "antd";
import { useState } from "react";
import Fireworks from "@fireworks-js/react";

export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen2(true);
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      alert('Ocurrio un error, intenta otra vez')
    };

    return (
      <>
        <div className="flex justify-center items-center" >
            <Image className="my-5" src={"/images/MomentosEspeciales.png"}  alt="Momentos Especiales" width={545} height={307}></Image>
        </div>
        <div>
          <FlipBook></FlipBook>
        </div>
        <br /><br />
        <div className="grid grid-cols-5">
          <div className="col-span-3 col-start-2 font-angelia text-justify font-semibold text-lg">
              Desde que te conoci hemos tenido momentos increibles como viste en la linea de tiempo y aun momenticos
              como vernos en la universidad, hablar por llamada, todo eso son momentos especiales contigo y quiero vivir
              aun mas, se que quiza ultimamente me sienta un poco distante, pero quiero intentar con todo lo que este
              en mi mano para que nuestra relacion siga floreciendo y creciendo poco a poco.
          </div>
        </div>
        <br />
        <div className="grid grid-cols-3">
          <div className="cursor-pointer ms-5" onClick={() => {alert("Hola")}}>Hola?</div>
          <div className="cursor-pointer ms-5 col-start-3" onClick={showModal}>Romeo?</div>
        </div>
        <Modal title="Propuesta Indecente" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
        okText='Vamos' cancelText='Nos quedamos'>
          <div className="font-angelia font-semibold text-justify text-lg">
            Si te invito a una copa y me acerco a tu boca
            Si te robo un besito, a ver, ¿te enojas conmigo?
            ¿Que dirias si esta noche te seduzco en mi coche?
            Que se empanen los vidrios y la regla es que goces.
            Si levanto tu falda, ¿me darias el derecho?

          </div>
        </Modal>

        <Modal title="VAMOOOOO!!!" open={isModalOpen2}
        onOk={() => {setIsModalOpen2(false)}} onCancel={() => {setIsModalOpen2(false)}}>
          <div className="font-semibold text-center text-lg">
            <Fireworks></Fireworks>
            SUUUUUUUUUU!!!!!
          </div>
        </Modal>
        <br />
      </>
    );
  }