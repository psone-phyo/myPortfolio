import React from 'react'
import ServiceCard from '@/components/service/servicecard';

const ServicePage = () => {

    const Services = [
        {title: 'Dynamic Web Application', icon: '/services/dynamicweb.svg'},
        {title: 'API Development', icon: '/services/api.svg'},
        {title: 'Static Website', icon: '/services/staticweb.svg'},
        {title: 'Responsive Web Design', icon: '/services/responsive.svg'},
        {title: 'Reasonable Price', icon: '/services/price.svg'},
        {title: 'Punctuality', icon: '/services/time.svg'},
    ]
  return (
    <div className='min-h-screen mb-10'>
        <h1 className='font-bold text-3xl text-sky-600 text-center mt-10 mb-5'>What I can offer</h1>
        <div className='flex justify-center items-center'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                Services.map((item, index) => (
                    <ServiceCard item={item} key={index}/>
                ))
            }
        </div>
    </div>
    </div>
    
  )
}

export default ServicePage