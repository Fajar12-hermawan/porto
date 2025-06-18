const CardMedium = ({ bgImg, title, onClick }) => {
    return (
    <button onClick={onClick} className="relative h-34 w-34 flex flex-col justify-end bg-cover bg-center text-white shadow-lg rounded-2xl max-md:h-28 max-md:w-28">
            <img src= {bgImg} className="h-full w-full object-cover
            transition-transform duration-300 ease-in-out hover:scale-110
            " alt={title}/>
            <p className="absolute bottom-1 px-2 left-1/2 -translate-x-1/2 transform truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 text-center text-sm-semibold whitespace-nowrap text-white shadow-md backdrop-blur-md">
            {title}
            </p>
            <div className="absolute top-2 right-2 flex h-5 w-5 scale-75 items-center justify-center   rounded-[20px] border border-white/20 bg-white/10 text-center text-sm-semibold text-white shadow-md backdrop-blur-transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
            <i className="fa-solid fa-arrow-up rotate-45 text-xs text-white"></i>
            </div>
            </button>
    ) 
}

export default CardMedium