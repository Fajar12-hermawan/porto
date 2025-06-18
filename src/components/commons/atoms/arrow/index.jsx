const Arrow = () => {
    return(
        <>
        <div className="relative right-1 bottom-100">
        <div className=" absolute top-2 right-2 flex h-5 w-5 scale-75 items-center justify-center rounded-[20px] border border-white/20 bg-white/10 text-center text-sm-semibold text-white shadow-md backdrop-blur-transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
            <i className="  fa-solid fa-arrow-up rotate-45 text-xl text-white"></i>
            </div>
            <div className="absolute top-90 w-full flex flex-items-center justify-center">
            <button className="bg-white/10 px-2 text-white border-1 font-bold rounded hover:scale-110 ">read more</button>
            </div>
        </div>
        </>
    )
}

export default Arrow