import { ImageGalleryProps } from './ImageGalleryProps';
import './image-gallery.scss';

export const ImageGallery = ({ imageUrl, title, info }: ImageGalleryProps) => {
    return (
        <div className="gallery-container">
            <div className="image-container">
                <img src={imageUrl} />
            </div>
            <div className="info-container">
                <h3>{title}</h3>
                {info ? <small>{info}</small> : null}
            </div>
        </div>
    );
};
