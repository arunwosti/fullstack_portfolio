import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import React from "react";
import {GridGlobe} from "./GridGlobe";
import { AnimatedTooltip } from "./Tooltip";
import { technologies } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img, 
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?:string;  
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id :number;
}) => {
  return (
    <div
      className={cn(
       "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={`${id===6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>
        {/* if id is 6 then only render this div or animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm dmd:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        {id===3 && (
          <div className="flex  flex-row  w-fit absolute pt-7 " >
          <AnimatedTooltip items={technologies}/>
          </div>
        )}

        
        

        {id===2 && <GridGlobe/>}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2 top-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['React.js / Next.js','Express','Mongo DB','Typescript'].map(
                (item) => (
                  <span key={item} className="py-2 lg:py-1 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                )
              )}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
