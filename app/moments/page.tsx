import Image from "next/image";

export default function Home() {
    return (
      <>
        <div className="flex justify-center items-center" >
            <Image className="my-5" src={"/images/MomentosEspeciales.png"}  alt="Momentos Especiales" width={545} height={307}></Image>
        </div>
      </>
    );
  }