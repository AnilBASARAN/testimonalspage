import TestamonialCard from "./TestamonialCard.jsx";
import testimonials from "../testimonials.jsx";

const TestimonialCarousel =()=> {
const allTestos = testimonials.map((obj,index)=>
  <TestamonialCard testimonials={obj} key={index} />
  )
  return(

    <div className="flex ">
      {allTestos}
    </div>
    
  );
};

export default TestimonialCarousel;