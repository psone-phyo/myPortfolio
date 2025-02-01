import React from 'react'
import { Building2, Mail, MapPin, Phone } from 'lucide-react';

const mycontact = () => {
  return (
    <div className='flex flex-col justify-center items-center border-sky-500 border p-5 rounded-lg'>
                <h1 className='text-sky-500 font-bold text-3xl mb-5'>My Contact</h1>
                <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-5 '>
                        <Mail size={32} className='text-sky-300'/>
                        <div className='text-sky-300 font-bold text-xl'>psone9921@gmail.com</div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Phone size={32} className='text-sky-300'/>
                        <div className='text-sky-300 font-bold text-xl'>+959 978-114-491</div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <MapPin size={32} className='text-sky-300'/>
                        <div className='text-sky-300 font-bold text-xl'>Kamayut Township</div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Building2 size={32} className='text-sky-300'/>
                        <div className='text-sky-300 font-bold text-xl'>Yangon, Myanmar</div>
                    </div>
                </div>
                    
                </div>
  )
}

export default mycontact