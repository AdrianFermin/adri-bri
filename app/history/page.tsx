import Image from "next/image";

export default function Home() {
    return (
      <>
        <div className="flex justify-center items-center hover:cursor-pointer" >
            <Image className="mb-5" src={"/images/NuestraHistoria.png"}  alt="Momentos Especiales" width={545} height={307}></Image>
        </div>
        <div className="font-angelia">
            <div className="text-3xl md:text-4xl font-semibold text-center grid grid-cols-8">
                <h2 className="mx-1 text-2xl md:text-3xl text-justify col-span-6 col-start-2">
                    Me gustaria conmemorar nuestro 3er San Valentin rememorando toda nuestra historia o al menos los momentos mas 
                    importantes aunque todos los pequeños detalles valen, quiero que recordemos todos los puntos importantes y fuertes
                    en nuestra relacion. Espero los disfrutes:
                </h2>
            </div>
        </div>
        <br />
        hola
      </>
    );
  }