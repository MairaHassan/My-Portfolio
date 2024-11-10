import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="flip-right">
            <h2 className='text-4xl md:text-5xl'>Skills</h2>
            <p className='text-gray-600 pt-2' >
                I have a strong foundation in web development, with expertise in HTML, CSS, TypeScript, JavaScript, and Next.js. 
                I'm also proficient in Tailwind CSS, which I use for efficient styling and design. 
                I'm highly interested in advancing my web design skills by exploring the latest technologies in this field.
                </p>
        </div>
        <div>
            <div className='grid grid-cols-4 text-blue text-3xl sm:text-4xl'>
            <div className='space-y-2'>
                <h2 data-aos="flip-right">ArcGIS (ArcMap)</h2>
                <h2 data-aos="flip-right">Microsoft</h2>
                <h2 data-aos="flip-right">GIS Mapping</h2>
            </div>
            <div className='space-y-2'>
                <h2 data-aos="flip-right">Canva</h2>
                <h2 data-aos="flip-right">Google Earth</h2>
                <h2 data-aos="flip-right">Data Visualization</h2>
            </div>
            <div className='space-y-2'>
                <h2 data-aos="flip-right">Typescript</h2>
                <h2 data-aos="flip-right">React.js</h2>
                <h2 data-aos="flip-right">Next.js</h2>
            </div>
            <div className='space-y-2'>
                <h2 data-aos="flip-right">Tailwind</h2>
                <h2 data-aos="flip-right">CSS</h2>
                <h2 data-aos="flip-right">Node.js</h2>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
