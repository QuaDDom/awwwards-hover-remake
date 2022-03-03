import { useEffect, useRef, useState } from 'react';
import './GalleryItem.scss';
import cn from 'classnames';

interface Props{
    url: string
}

export default function GalleryItem({url}: Props) {
    const [reveal, setReveal] = useState(false);
    const maskedRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    
    const handleMouseMove = (e: any)=>{
        let posX = e.clientX;
        let posY = e.clientY;

        e.current.style.top = posX + 'px';
        e.current.style.left = posY+ 'px';
    }

    useEffect(()=>{
        setTimeout(()=>{
            setReveal(true);
        }, 100)
    },[])

    return (
        <div className={cn("gallery-item-wrapper", {"is-reveal": reveal})}>
            <div className="gallery-item" onMouseMove={handleMouseMove}>
                <div className="gallery-item-image sepia" style={{backgroundImage: `url(${url})`}}/>
                <div 
                className="gallery-item-image masked"  
                style={{backgroundImage: `url(${url})`}}
                ref={maskedRef}
                />
            </div>
        </div>
    )
}
