import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ImageGalleryContainer } from './stories/gallery/ImageGalleryContainer';

function App() {
    const mockImages = [
        {
            imageUrl: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
            title: 'Bali, Indonesia',
            info: '345 Rented props',
        },
        {
            imageUrl: 'https://i.ibb.co/vZt1WZS/tokyo-city.jpg',
            title: 'Tokyo, Japan',
            info: '123 Rented props',
        },
        {
            imageUrl: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
            title: 'Sydney, Australia',
            info: '456 Rented props',
        },
    ];

    return (
        <div className="App">
            <ImageGalleryContainer
                imageGalleryProps={mockImages}
                title="Just a title"
                seeAllLink="#test"
            />
        </div>
    );
}

export default App;
