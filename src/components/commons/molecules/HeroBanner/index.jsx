import { Navigate, useNavigate } from "react-router-dom"
import CardMedium from "../../atoms/CardMedium"
import DoubleCurvedText from "../../atoms/doubleCurveTeks"

const HeroBanner = () => {
    const navigate = useNavigate()
    const viewCurveText = (type) => {
        return(
            <div className="absolute top-1  transform -transform-x-1/2 h-27 w-27 flex flex-col items-center gap-2 justify-center rounded-full">
                <DoubleCurvedText type={type}/>
            </div>
        )
    }
    return (
        <>
        
        <section className="relative h-[460px] w-full rounded-b-4xl flex items-center justify-center">
            <img src="/assets/bg-2.jpg" alt="banner " 
            className="h-full w-full rounded-4xl object-cover shadow-md"/>
            <div className="absolute bg-(--bg-primary-cray) h-32 w-32
                             rounded-full -bottom-18 -translate-x-1/2 transform left-1/2"/>
            <div className="absolute -bottom-16 left-1/2 flex flex-col items-center justify-center gap-2 
                            h-28 w-28 -translate-x-1/2 transform cursor-pointer  rounded-full
                            bg-(--bg-secondary-cray) shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 ">
               {viewCurveText("top")}
                <i className="fa-solid fa-arrow-up rotate-45 text-xl text-white"></i>
                {viewCurveText("bottom")}
            </div>
            <div className="absolute right-4 bottom-4 flex flex-col gap-6 max-md:bottom-14 ">
                <CardMedium 
                title= "skill"
                bgImg={"/assets/unnamed.jpg"}
                onClick={()=> navigate('/skills')}
                />
                <CardMedium 
                title= "about"
                bgImg={"/assets/fajar.jpg"}
                onClick={()=> navigate('/about')}
                />
            </div>
        </section>
        <div className="flex  items-center justify-between mt-5 py-2 rounded-2xl w full bg-(--bg-tertiary-cray) gap-3">
            
        </div>
            
        </>
    )
}  

export default HeroBanner