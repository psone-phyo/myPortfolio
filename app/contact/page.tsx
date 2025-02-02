import React from 'react'
import ContactForm from '@/components/contactpage/contactform';
import MyContact from '@/components/contactpage/mycontact';
const Contact = () => {
  return (
    <div className='grid grid-cols-1'>  
        <div className='min-h-screen mb-10 lg:mb-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 mt-20'>
                <MyContact/>
                <div className=''>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact