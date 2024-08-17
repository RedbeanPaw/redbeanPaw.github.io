import { useState, useCallback, useEffect, FC, useRef, useMemo } from "react";
import Image from "next/image";
import { PhoneIcon, AddIcon, CloseIcon } from '@chakra-ui/icons'

export const ProductCard: FC<any> = ({ sub, title, bgImage, icon, description }) => {
  const [isOnMouse, setIsOnMouse] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const backdropStyle = useMemo(() => {
    if (isShow) return 'backdrop-blur-2xl contrast-75';
    return isOnMouse ? 'backdrop-blur-md' : ''
  }, [isOnMouse, isShow])

  return (
    <section className={`relative cursor-pointer w-full h-[300px] rounded-lg overflow-hidden`} onMouseEnter={() => {
      setIsOnMouse(true)
    }}
      onMouseLeave={() => {
        setIsOnMouse(false)
      }}
      onClickCapture={() => setIsShow(!isShow)}
    >
      <>
        <Image src={bgImage} fill objectFit="cover" alt={title} />
        <article className={`absolute w-full h-full p-6 text-white transition-all ${backdropStyle}`}>
          <div className="flex justify-between items-start">
            <div>
              {!isShow && <Image src={icon} alt={title} width={60} height={60} />}
              <p className="my-4 font-bold">{sub}</p>
              {
                isShow ?
                  <div className="h-[260px] overflow-y-auto pb-16 pr-4">
                    <p className="whitespace-pre-wrap text-sm">{description}</p>
                  </div>
                  : <h2 className="whitespace-pre-wrap text-2xl">{title}</h2>
              }
            </div>
            {isShow ? <CloseIcon onClick={() => setIsShow(false)} /> : <AddIcon onClick={() => setIsShow(true)} />}
          </div>
        </article>
      </>
    </section>
  );
};
