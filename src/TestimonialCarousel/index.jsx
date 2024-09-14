import TestamonialCard from "./TestamonialCard.jsx";
import testimonials from "../testimonials.jsx";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';



const TestimonialCarousel =()=> {
  const [isOnLeft,setIsOnLeft] = useState(true);
  const [isOnRight,setIsOnRight] = useState(true);
  const [startingIndex,setStartingIndex] = useState(2);

  let leftButtonStyle = isOnLeft ? "text-orange-400 text-2xl" : "text-slate-50 text-2xl"
  let rightButtonStyle = isOnRight ? "text-orange-400 text-2xl" : "text-slate-50 text-2xl"

  
const allTestos = testimonials.slice(startingIndex,(startingIndex+3)).map((obj,index)=>
  <TestamonialCard testimonials={obj} key={index} />
  )
  return(
<div className="flex">
<button
  className={leftButtonStyle}
  onClick={()=>{
    if(startingIndex>0){
      setIsOnRight(true);
      setStartingIndex(startingIndex-1)
    }else{
        setIsOnLeft(false);
    }
  }}
><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
 <div className="flex items-center flex-wrap justify-center">
      
      {allTestos}
      
    </div>
<button
className={rightButtonStyle}
onClick={()=>{
  if(startingIndex<testimonials.length-3){
    setIsOnLeft(true);
    setStartingIndex(startingIndex+1)
  }else{
    setIsOnRight(false);
  }
}}
><FontAwesomeIcon icon={faCircleChevronRight} /></button>
</div>
   
    
  );
};

export default TestimonialCarousel;