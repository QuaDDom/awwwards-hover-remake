import './Gallery.scss';
import { images } from "../data";
import GalleryItem from './GalleryItem';

export default function Gallery() {
    return (
        <div className='gallery'>
            {
                images.map((url)=>(
                    <GalleryItem url={url} key={url}/>
                ))
            }
        </div>
    )
}
