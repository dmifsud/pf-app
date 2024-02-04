import { ImageGallery } from './ImageGallery';
import { ImageGalleryProps } from './ImageGalleryProps';
import './image-gallery-container.scss';

interface ImageGalleryContainerProps {
    imageGalleryProps: ImageGalleryProps[];
    title?: string;
    seeAllLink?: string;
}

export const ImageGalleryContainer = ({
    imageGalleryProps,
    title,
    seeAllLink,
}: ImageGalleryContainerProps) => {
    return (
        <div className="main-container">
            <div className="title-container">
                {title ? <h2>{title}</h2> : null}
                {seeAllLink ? <a href={seeAllLink}>See all</a> : null}
            </div>
            <div className="image-gallery-container">
                {imageGalleryProps.map((props, index) => (
                    <ImageGallery key={index} {...props} />
                ))}
            </div>
        </div>
    );
};
