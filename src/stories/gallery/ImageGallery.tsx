import { ImageGalleryProps } from './ImageGalleryProps';
import './image-gallery.scss';

export const ImageGallery = ({
    imageUrl,
    title,
    info,
    minWidth = '162px',
}: ImageGalleryProps) => {
    return (
        <div className="gallery-container" style={{ minWidth }}>
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
