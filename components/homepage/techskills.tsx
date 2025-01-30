import React from 'react'
import { Progress } from "@/components/ui/progress"

const techskills = () => {
    const techData = [
        {title: 'HTML', value: 95, logo: '/logos/html.svg'},
        {title: 'CSS', value: 90, logo: '/logos/css.svg'},
        {title: 'Bootstrap', value: 75, logo: '/logos/bootstrap.svg'},
        {title: 'Tailwind', value: 80, logo: '/logos/tailwind.svg'},
        {title: 'Javascript(ES6)', value: 95, logo: '/logos/javascript.svg'},
        {title: 'PHP', value: 80, logo: '/logos/php.svg'},
        {title: 'Laravel', value: 70, logo: '/logos/laravel.svg'},
        {title: 'Vue.js', value: 60, logo: '/logos/vue.svg'},
        {title: 'React.js', value: 75, logo: '/logos/react.svg'},
        {title: 'Node.js', value: 85, logo: '/logos/nodejs.svg'},
        {title: 'Express.js', value: 85, logo: '/logos/expressjs.svg'},
        {title: 'Next.js', value: 85, logo: '/logos/nextjs.svg'},
    ]
  return (
    <div className=''>
        <h1 className='font-bold text-sky-600 text-3xl text-center mb-5'>Tech Skills</h1>
        <div className='md:grid md:grid-cols-2 gap-3 grid grid-cols-1'>
            {
                techData.map((item, index) => (
                    <div className='grid-col-1 mx-[10%]' key={index}>
                        <div className='text-xl text-sky-400 flex items-center justify-start gap-2 mb-2'>
                            <img src={item.logo} alt="" className='w-[30px]'/>
                            <span>
                                {item.title}
                            </span>
                        </div>
                        <Progress value={item.value} indicatorColor='bg-sky-500'/>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default techskills