import './App.css';
import TestimonialCarousel from "./TestimonialCarousel";

const App = () => {
  
  return (
    <div className="outerContainer flex justify-center">
      
      <div className="innerContainer w-full max-w-4xl flex flex-col items-center">

        <div className="border-b-4 border-b-orange-200 text-3xl flex  justify-center  p-4 m-4">Al's favourite shop</div>       
      
      <TestimonialCarousel />
       
    </div>
    
    </div>
  );
};

export default App;
