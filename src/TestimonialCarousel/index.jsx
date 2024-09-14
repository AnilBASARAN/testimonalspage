import TestamonialCard from "./TestamonialCard.jsx";
import testimonials from "../testimonials.jsx";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';



const TestimonialCarousel =()=> {

  const [startingIndex,setStartingIndex] = useState(2);

  
const allTestos = testimonials.slice(startingIndex,(startingIndex+3)).map((obj,index)=>
  <TestamonialCard testimonials={obj} key={index} />
  )
  return(
<div className="flex">
<button
  className="text-orange-400 2xl"
  onClick={()=>{
    if(startingIndex>0){
      setStartingIndex(startingIndex-1)
    }else{

    }
  }}
><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
 <div className="flex items-center flex-wrap justify-center">
      
      {allTestos}
      
    </div>
<button
className="text-orange-400 2xl"
onClick={()=>{
  if(startingIndex<testimonials.length-1){
    setStartingIndex(startingIndex+1)
  }else{
    
  }
}}
><FontAwesomeIcon icon={faCircleChevronRight} /></button>
</div>
   
    
  );
};

export default TestimonialCarousel;