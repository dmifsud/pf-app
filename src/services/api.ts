import axios from 'axios';
import { ImageResponse, TripsResponse } from './dto';

const ROOT = 'https://pfx-interview.s3.ap-southeast-2.amazonaws.com';

export const fetchTrips = async (): Promise<TripsResponse[] | undefined> => {
    try {
        const response = await axios.get(`${ROOT}/trips.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // TODO: fallback as this won't work due to CORS
        return [
            {
                image: 'https://i.ibb.co/hcwLryT/bali-indonesia.jpg',
                name: 'Bali, Indonesia',
                rented_props_count: 100,
            },
            {
                image: 'https://i.ibb.co/vZt1WZS/tokyo-city.jpg',
                name: 'Toyko, Japan',
                rented_props_count: 234363,
            },
            {
                image: 'https://i.ibb.co/mhKDThR/sydney-city.jpg',
                name: 'Sydney, Australia',
                rented_props_count: 9124,
            },
            {
                image: 'https://i.ibb.co/phPV00W/new-york-city.jpg',
                name: 'New York, United States',
                rented_props_count: 2541098,
            },
        ];
    }
};

export const fetchLivingStyle = async (): Promise<
    ImageResponse[] | undefined
> => {
    try {
        const response = await axios.get(`${ROOT}/living-style.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [
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
        ];
    }
};

export const fetchOtherExperiences = async (): Promise<
    ImageResponse[] | undefined
> => {
    try {
        const response = await axios.get(`${ROOT}/other-experiences.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [
            {
                name: 'Learn the culture',
                image: 'https://picsum.photos/500/500.jpg',
            },
            {
                name: 'Online events',
                image: 'https://picsum.photos/500/500.jpg',
            },
        ];
    }
};
