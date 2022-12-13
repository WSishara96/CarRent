import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {vehicleInfo} from "../utils/constans";
import VehicleCard from "./VehicleCard";

const ImgCraousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };

    return (
        <div className='w-[320px] md:container mx-auto overflow-hidden'>
            <Carousel autoPlay={true} infinite responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} itemClass='px-10 md:px-2'>
                {vehicleInfo.map((vehicle) => (
                    <VehicleCard vehicle={vehicle} />
                ))}
            </Carousel>
        </div>
    )
}

export default ImgCraousel