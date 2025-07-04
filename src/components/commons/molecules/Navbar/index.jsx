import InputSearch from "../../atoms/inputSearch/InputSearch"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import BoxProfile from "../../atoms/boxProfile";

const listNavbar = [
    {name: "home", path: "/"},
    {name: "About", path: "/about"},
    {name: "skills", path: "/skills"}
]

const Navbar = () => {
  const [search, setSearch]= useState("")
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

    return(
        <>
        <header className=" absolute top-4 z-50 mt-2 h-12 flex items-center justify-between  px-4 w-(--my-width-nav)">
          
          <section className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-between gap-6 bg-(--bg-primary-cray) rounded-full">
                <p className=" font-(--font-anciza ) ml-3 text-sm text-(--text-color-black)">menu</p>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100"onClick={() => setIsOpen(!isOpen)} >
                    <i className="fa-solid fa-bars  text-xl text-(--text-color-black)">
                    </i>
                </button>
            </div>
          </section>
          <section className=" flex items-center justify-between gap-5 max-md:hidden">
            <InputSearch
             value={search}
             onSearch={() => console.log(search)}
             onChange={(e)=> setSearch (e)}
            />
            
          <BoxProfile
          name={'fajar hermawan'}
          onClick={() => console.log("profile")}
          picture={`${base}icons/unnamed.jpg`}
          />
          </section>
        </header>
        <>
        <div
          className={`fixed top-0 left-0 mx-auto flex h-[100vh] w-full items-center justify-between bg-black/50 px-4 ${isOpen ? "z-50 overflow-hidden opacity-100" : "-z-1 opacity-0"}`}
          onClick={() => setIsOpen(!isOpen)}
        ></div>

        <aside
          className={`${
            isOpen ? "z-50 -translate-x-0" : "-z-1 translate-x-100"
          } fixed top-0 right-0 h-[100vh] w-64 bg-(--bg-secondary-cray) transition-transform duration-300 2xl:absolute 2xl:h-full`}
        >
          <div className="flex h-full flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-xmark text-(--text-color-black)"></i>
            </button>

            {listNavbar.map((item, index) => (
              <p
                key={index}
                className="w-full cursor-pointer px-4 py-2 text-lg font-semibold text-(--text-color-black) opacity-80 transition duration-300 ease-in-out hover:bg-(--bg-primary-cray) hover:opacity-100 text-center"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </p>
            ))}
          </div>
        </aside>
        </>
        </>
        
    )
}

export default Navbar