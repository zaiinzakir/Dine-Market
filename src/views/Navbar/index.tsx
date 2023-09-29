
import React from 'react'
import Image from "next/image"

const Navbar = () => {
    return(
        <div className="py-6 px-6 flex">
            <div className="w-32">
                <Image width={400} height={400}  src={"/Logo.webp"} alt="Logo" />
                
            </div>
        </div>
    )
}

export default Navbar