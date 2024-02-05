import { useEffect, useState } from 'react';
import {
    fetchLivingStyle,
    fetchOtherExperiences,
    fetchTrips,
} from '../services/api';
import { ImageGalleryContainer } from '../stories/gallery/ImageGalleryContainer';
import { ImageGalleryProps } from '../stories/gallery/ImageGalleryProps';

export const ExploreGalleries = () => {
    const [trips, setTrips] = useState<ImageGalleryProps[]>([]);
    const [livingStyle, setLivingStyle] = useState<ImageGalleryProps[]>([]);
    const [otherExperiences, setOtherExperiences] = useState<
        ImageGalleryProps[]
    >([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tripData = await fetchTrips();
                setTrips(
                    (tripData ?? []).map((data) => ({
                        imageUrl: data.image,
                        title: data.name,
                        info: `${data.rented_props_count} Rented props`,
                        minWidth: '',
                    }))
                );
            } catch (error) {
                console.error('Error fetching trips:', error);
            }

            try {
                const livingStyleData = await fetchLivingStyle();
                setLivingStyle(
                    (livingStyleData ?? []).map((data) => ({
                        imageUrl: data.image,
                        title: data.name,
                        minWidth: '',
                    }))
                );
            } catch (error) {
                console.error('Error fetching living style:', error);
            }

            try {
                const otherExperiencesData = await fetchOtherExperiences();
                setOtherExperiences(
                    (otherExperiencesData ?? []).map((data) => ({
                        imageUrl: data.image,
                        title: data.name,
                        minWidth: '',
                    }))
                );
            } catch (error) {
                console.error('Error fetching other experiences:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ImageGalleryContainer
                imageGalleryProps={trips}
                title="Find your next trip"
                seeAllLink="#test"
            />
            <ImageGalleryContainer
                imageGalleryProps={livingStyle}
                title="Explore by living style"
                variant="horizontal"
            />
            <div style={{ marginTop: -120, position: 'relative', zIndex: 100 }}>
                {/* TODO: remove style hack. Requires further investigation */}
                {/* please note this was applied for demonstration purposes */}
                <ImageGalleryContainer
                    imageGalleryProps={otherExperiences}
                    title="Other experiences"
                    variant="horizontal"
                />
            </div>
        </div>
    );
};
