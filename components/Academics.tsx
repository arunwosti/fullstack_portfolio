
import React from "react";
import { Timeline } from "./ui/Timeline";

export function Academics() {
  const data = [
    {
      title: "2025-2023",
      content: (
        <div>
            <h1 className="text-neutral-500 dark:text-neutral-200 text-xl md:text-l font-bold mb-3">
                Lambton College
            </h1>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">FullStack Software Development</h3>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2"> Post Graduate</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This pursuit has allowed me to refine my technical expertise in MERN stack development, database management, 
          and dynamic web application design while fostering problem-solving skills through hands-on projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "2021-2017",
      content: (
        <div>
            <h1 className="text-neutral-500 dark:text-neutral-200 text-xl md:text-l font-bold mb-3">
                The British College
            </h1>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">BSc hons Computing</h3>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2"> Bachelors Degree</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I have gained a diverse skill set, including web development, basic mathematics, networking, ethical hacking, Android development, and computer fundamentals.
           These experiences have sharpened my problem-solving abilities and fostered a passion for continuous learning in technology.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },

    {
        title: "2015-2017",
        content: (
          <div>
              <h1 className="text-neutral-500 dark:text-neutral-200 text-xl md:text-l font-bold mb-3">
                  Goldengate International College
              </h1>
              <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2"> Computer Science</h3>
              <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2"> Higher Secondary</h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In my higher secondary education, I gained foundational knowledge in computer hardware and software, providing me with a solid 
            understanding of how technology functions at its core. This has laid the groundwork for my further exploration and learning in the tech field.
            </p>
            <div className="grid grid-cols-2 gap-4">
              
            </div>
          </div>
        ),
      },
    
  ];
  return (
    <div className="w-full " id="academics">
      <Timeline data={data} />
    </div>
  );
}
