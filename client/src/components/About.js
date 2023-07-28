import React from 'react'
import './About.css';
const About = () => {
  return (
    <>
    <h1 className="region-title">Select a region to plant a tree.</h1>

    <div className='aboutContainer'>

    <div className='northAmerica'>
    <a href='https://onetreeplanted.org/collections/north-america' target="_blank" id='northAmercia'>
    <img alt="North America" src="images/northamerica.jpeg"/></a>
    </div>

    <div className='latinAmerica'>
    <a href='https://onetreeplanted.org/collections/latin-america' target="_blank" id='latinAmerica'>
    <img alt="Latin America" src="images/latinamerica.jpeg"/>
    </a>
    </div>

    <div className='europe'>
    <a href='https://onetreeplanted.org/collections/europe' target="_blank" id='europe'>
    <img alt="Europe" src="images/europe.jpeg"/></a>
    </div>

    <div className='asia'>
    <a href='https://onetreeplanted.org/collections/asia' target="_blank" id='asia'>
    <img alt="Asia" src="images/asia.jpeg"/></a>
    </div>

    <div className='africa'>
    <a href='https://onetreeplanted.org/collections/africa' target="_blank"  id='Africa'>
    <img alt="Africa" src="images/africa.jpeg"/></a>
    </div>

    <div className='pacific'>
    <a href='https://onetreeplanted.org/collections/the-pacific' target="_blank"  id='pacific'>
    <img alt="Pacific" src="images/pacific.jpeg"/></a>
    </div>
    </div>
    </>
  )
}

export default About;