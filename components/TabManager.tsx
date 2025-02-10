'use client'

import { redirect, usePathname } from "next/navigation"
import { useRouter } from "next/router";
import { useState } from "react"

export const TabManager = () => {

    const pathName = usePathname();

    return (
        <>
            <ul className="flex text-white font-valentin flex-wrap text-sm font-medium text-center justify-center relative">
                <li className="md:text-5xl hover:cursor-pointer" onClick={() => {redirect("/history")}}>
                    <div className={`border-t-2 border-x-2 mx-0.5 border-white rounded-t-md md:mx-5 transition-all duration-100 ${pathName.startsWith("/history") ? "bg-[#FF8FA3]" : "bg-[#8F0700] hover:bg-[#7FCFDD]"}`}>
                        <div className="mx-4 py-2 transition-all duration-300 hover:-translate-y-1 select-none">
                            Nuestra Historia
                        </div>
                    </div>
                </li>
                <li className="md:text-5xl hover:cursor-pointer" onClick={() => {redirect("/moments")}}>
                    <div className={`border-t-2 border-x-2 mx-0.5 border-white rounded-t-md md:mx-5 transition-all duration-100 ${pathName.startsWith("/moments") ? "bg-[#FF8FA3]" : "bg-[#8F0700] hover:bg-[#7FCFDD]"}`}>
                        <div className="mx-4 py-2 transition-all duration-300 hover:-translate-y-1 select-none">
                            Momentos Especiales
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}