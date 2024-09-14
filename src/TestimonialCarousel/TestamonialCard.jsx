const TestamonialCard=(props)=>{
  const {testimonials} = props;

  return(
    <div className="cardContainer flex flex-col w-60 h-[500px] items-center border-2 border-nataural-400 p-2 m-2 ">

      
      <div className="flex flex-col items-center bg-orange-200 w-full p-2">
      <img alt="" src={testimonials.portrait} className="w-24" />
      </div>
      <div className="flex flex-col items-center text-stone-500 leading-relaxed">
      
      <div className="text-amber-600"><i class="fa-regular fa-star mr-2"></i>{testimonials.rating}</div>
      <div className="text-xl text-neutral-600">{testimonials.name}</div>
      <div>{testimonials.text}</div>
      
      </div>
      
      
      
    </div>
    
    
  );
};

export default TestamonialCard;