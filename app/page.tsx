import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="font-angelia text-center justify-center text-wrap">
        <div className="flex justify-center items-center hover:cursor-pointer" >
            <Image className="my-5" src={"/images/Titulo.png"}  alt="Momentos Especiales" width={545} height={307}></Image>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Esto es una pagina hecha por Adrian y dedicada a Anais</h2>
        <br />
          <div className="grid grid-cols-8">
            <div className="mx-1 text-2xl md:text-3xl text-justify col-span-6 col-start-2">
              El proposito de esta pagina es hacerte un regalo hecho con mis propias manos que quiza no sea una manualidad
              o algo fisico pero es algo que puedo hacerte personalmente sin tener que pedirlo o comprarlo y queria al menos intentar
              darte algo lindo de San Valentin en este sentido, espero te guste.
              <br /><br />
              <div className="grid grid-cols-4 md:grid-cols-6">
                <p className="col-span-2 md:col-start-2">De: Adri</p>
                <p className="col-span-2 md:col-start-5">Para: Bri</p>
              </div>
            </div>
          </div>
        <br />
      </div>
    </>
  );
}
