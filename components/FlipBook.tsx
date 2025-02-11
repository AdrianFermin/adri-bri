'use client'
import "./flipStyles.css";
import Image from "next/image";

export const FlipBook = () => {

  var images:any[] = [
    'imagen1.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen8.jpg',
    'imagen9.jpg',
    'imagen10.jpg',
    'imagen12.jpg',
    'imagen13.jpg',
    'imagen14.jpg',
    'imagen15.jpg',
    'imagen17.jpg',
    'imagen18.jpg',
    'imagen21.jpg',
    'imagen22.jpg',
    'imagen23.jpg',
    'imagen24.jpg',
    'imagen25.jpg',
  ];

  return (
    <>
      <br />
      <div className="grid grid-cols-12 md:grid-cols-4">
        <div className="gallery col-start-2">
          {
            images.map((text, index) => (
              <Image className="md:w-full w-8/12" width={100} height={100} alt={text} key={index} src={`/images/timeline/${text}`}></Image>
            ))
          }
        </div>
      </div>
    </>
  )
}