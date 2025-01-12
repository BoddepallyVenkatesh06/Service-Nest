import { Button } from '../../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BusinessList({ businessList, title }) {

    console.log("business list data = ", businessList)

    return (
        <div className='mt-5 wrapper'>
            <h2 className='font-bold text-center sm:text-left text-[22px]'>{title}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business) => (
                    <Link href={'/details/' + business.id}
                        key={business.id} className='rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 duration-300 transition-all ease-in-out flex flex-col h-full'>
                        <Image src={business?.images[0].url}
                            alt={business.name}
                            width={500}
                            height={200}
                            className='h-[150px] md:h-[200px] object-cover rounded-lg'
                        />
                        <div className='flex flex-col justify-around h-full p-3 gap-1'>
                            <h2 className='p-1 w-fit bg-purple-200 text-primary rounded-full px-2 text-[12px]'>
                                {business?.category?.name}
                            </h2>
                            <h2 className='font-bold text-lg'>{business.name}</h2>
                            <h2 className='text-primary'>{business.contactPerson}</h2>
                            <h2 className='text-gray-500 text-sm'>{business.address.split(" ").slice(0, 15).join(" ")}</h2>
                                <p className='text-green-700 font-semibold bg-green-100 w-fit p-2 rounded-xl  '>
                                    Price : {business.price}
                                </p>

                                <Button className="rounded-lg mt-3">Book Now</Button>
                        </div>
                    </Link>
                ))
                    :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BusinessList