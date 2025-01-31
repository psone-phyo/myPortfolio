import React from 'react'

const footer = () => {
    const socialmedia = [
        {title: 'Facebook', logo: '/socialmedia/facebook.svg', link: '#'},
        {title: 'Instagram', logo: '/socialmedia/instagram.svg', link: '#'},
        {title: 'LinkedIn', logo: '/socialmedia/linkedIn.svg', link: '#'},
        {title: 'Github', logo: '/socialmedia/github.svg', link: '#'},
    ]

    const navigation = [
        {title: 'Home', link: '#'},
        {title: 'Projects', link: '#'},
        {title: 'About', link: '#'},
        {title: 'Blog', link: '#'},
        {title: 'Contact', link: '#'},
    ]
  return (
    <div className='h-[500px] bg-[#1b1c28] flex justify-center items-start py-10'>
        <div className='mx-[10%] flex justify-evenly items-start w-full'>
            <div className='text-sky-200'>
                <h1 className='text-sky-500 text-2xl mb-5'>My Social Media</h1>
                <div className='flex flex-col gap-x-2 gap-y-5'>
                    {
                        socialmedia.map((item,index) => (
                        <div className='flex justify-start items-center gap-x-2' key={index}>
                            <img src={item.logo} alt="" className='w-[30px]'/>
                            <a href={item.link} className='hover:underline'>{item.title}</a>
                        </div>
                        ))
                    }
                    
                </div>
            </div>

            <div className='text-sky-200'>
                <h1 className='text-sky-500 text-2xl mb-5'>Navigation</h1>
                <div className='flex flex-col gap-x-2 gap-y-2'>
                    {
                        navigation.map((item,index) => (
                        <div className='flex justify-start items-center gap-x-2' key={index}>
                            <a href={item.link} className='hover:underline'>{item.title}</a>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer