import React from 'react';
import Link from "next/link";

const VehicleCard = ({vehicle}) => {
    return (
        <div className='vehicle w-[240px] flex justify-center items-center flex-col relative h-[350px] shadow-lg cursor-auto'>
            <div className="inner">
                <div className="content">
                    <div className="font-bold uppercase text-center p-[8px] transition-all duration-500 ease-in-out text-white">{vehicle.name}</div>
                    <h2 className='text-white'>$ {vehicle.pricePerDay}/day</h2>
                </div>

                <div className="lower">
                    <img src={`/asset/vehicle/${vehicle.image}`} alt=""/>
                    <div className="feature">
                        <ul className="feature_list">
                            {vehicle?.features?.map((feature, index) => (
                                <li key={`feature${index}`}>{feature}</li>
                            ))}
                        </ul>
                        <div className="see_more">
                            <Link href={`/vehicles/${vehicle.id}`}>See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard