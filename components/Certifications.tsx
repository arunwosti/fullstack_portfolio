import React from 'react'
import { HoverEffect } from './ui/CardHover'
import { FaLocationArrow } from 'react-icons/fa'

const Certifications = () => {

    const certificates = [
        {
            title: "Frontend Design",
            description:
              "A technology company that builds economic infrastructure for the internet.",
            link: "/WebDesign-Certificate.jpg", 
        },
        {
            title: "Flutter App Development",
            description: "A technology company that builds economic infrastructure for the internet.",
            link: "/Flutter.jpg",
        },
        {
            title: "Introduction to CyberSecurity",
            description: "A technology company that builds economic infrastructure for the internet.",
            link: "/Cisco-Certificate.png",
        },
        {
            title: "Core Java",
            description: "A technology company that builds economic infrastructure for the internet.",
            link: "/java.jpg",
        }
    
    ]
  return (
    <div className="py-20" id="certificates">
        <h1 className="heading">
        All trainings and 
        <span className="text-purple">certifications</span>
      </h1>
        <HoverEffect items={certificates} />
    </div>
  )
}

export default Certifications