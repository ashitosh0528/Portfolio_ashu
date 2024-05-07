import React from 'react'
import img from '../images/css.png'
import img1 from '../images/html.png'
import img2 from '../images/github.png'
import img3 from '../images/graphql.png'
import img4 from '../images/javascript.png'
import img5 from '../images/nextjs.png'
import img6 from '../images/react.png'
import img7 from '../images/tailwind.png'


const Experience = () => {
    const experiences =[
        {
            id:1,
            experience:img,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:2,
            experience:img1,
            title:"HTML",
            style:'shadow-orange-500'

        },
        {
            id:3,
            experience:img2,
            title:"GIT-HUB",
            style:'shadow-gray-400'

        },
        {
            id:4,
            experience:img3,
            title:"GRAPTH-SQL",
            style:'shadow-pink-400'

        },
        {
            id:5,
            experience:img4,
            title:"JAVASCRIPT",
            style:'shadow-yellow-500'

        },
        {
            id:6,
            experience:img5,
            title:"NEXT.JS",
            style:'shadow-white'

        },
        {
            id:7,
            experience:img6,
            title:"REACT",
            style:'shadow-blue-600'

        },
        
        {
            id:8,
            experience:img7,
            title:"TELWIND CSS",
            style:'shadow-sky-400'

        }
    ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">
            Experience
          </p>
          <p className="py-6">
            This are the technologies I have worked with
          </p>
        </div>
      
    


      <div className=" w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {
experiences.map(({id,experience,title,style})=>(

    <div key={id} 
    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
    >
    <img
      src={experience}
      alt=""
      className="w-20 mx-auto"
    />
    <p className='mt-4'>{title}</p>
    </div>

))
      }
       
        </div>
      </div>
    </div>
  )
}

export default Experience