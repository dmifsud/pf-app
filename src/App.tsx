import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ImageGalleryContainer } from './stories/gallery/ImageGalleryContainer';
import { ImageGalleryProps } from './stories/gallery/ImageGalleryProps';

function App() {
    const trip = [
        {
            imageUrl: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
            title: 'Bali, Indonesia',
            info: '100 Rented props',
            minWidth: '',
        },
        {
            imageUrl: 'https://i.ibb.co/vZt1WZS/tokyo-city.jpg',
            title: 'Toyko, Japan',
            info: '234,363 Rented props',
            minWidth: '',
        },
        {
            imageUrl: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
            title: 'Sydney, Australia',
            info: '9,124 Rented props',
            minWidth: '',
        },
        {
            imageUrl: 'https://i.ibb.co/phPV00W/new-york-city.jpg',
            title: 'New York, United States',
            info: '2,541,098 Rented props',
            minWidth: '',
        },
    ];

    const mockImages = [
        {
            name: 'Outdoor living',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'Japanese housing',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'Scandinavian minimalism',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'Industrial loft',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'French country',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'Coastal beach house',
            image: 'https://picsum.photos/600/400.jpg',
        },
        {
            name: 'Mediterranean villa',
            image: 'https://picsum.photos/600/400.jpg',
        },
    ].map((image) => ({
        imageUrl: image.image,
        title: image.name,
    })) as ImageGalleryProps[];

    return (
        <div className="App">
            <ImageGalleryContainer
                imageGalleryProps={trip}
                title="Find your next trip"
                seeAllLink="#test"
            />
            <ImageGalleryContainer
                imageGalleryProps={mockImages}
                title="Explore by living style"
                variant="horizontal"
            />
        </div>
    );
}

export default App;
