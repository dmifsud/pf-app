import { ImageGallery } from './ImageGallery';
import { ImageGalleryProps } from './ImageGalleryProps';
import './image-gallery-container.scss';

interface ImageGalleryContainerProps {
    imageGalleryProps: ImageGalleryProps[];
    title?: string;
    seeAllLink?: string;
    variant?: 'stacked' | 'horizontal';
}

export const ImageGalleryContainer = ({
    imageGalleryProps,
    title,
    seeAllLink,
    variant = 'stacked',
}: ImageGalleryContainerProps) => {
    return (
        <div className={`main-container ${variant}`}>
            <div className="title-container">
                {title ? <h2>{title}</h2> : null}
                {seeAllLink ? <a href={seeAllLink}>See all</a> : null}
            </div>
            <div className={`image-gallery-container ${variant}`}>
                {imageGalleryProps.map((props, index) => (
                    <ImageGallery
                        key={index}
                        {...props}
                        minWidth={
                            variant === 'horizontal' ? '50vw' : props.minWidth
                        }
                    />
                ))}
            </div>
        </div>
    );
};
