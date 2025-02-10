'use client'
import Image from "next/image";
import { redirect } from "next/navigation";

export const Logo = () => (
    <div className="flex justify-center items-center hover:cursor-pointer" >
        <Image onClick={() => {redirect('/')}} src={"/images/Titulo.png"} alt="Titulo" width={545} height={307}></Image>
    </div>
)