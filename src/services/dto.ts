export interface ImageResponse {
    name: string;
    image: string;
}

export interface TripsResponse extends ImageResponse {
    rented_props_count: number;
}
