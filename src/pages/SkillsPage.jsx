import React,{useState} from "react"
import HeroBanner from "../components/commons/molecules/HeroBanner"
import { listProjects, listSkills } from "../utils/constants"
import CardSmall from "../components/commons/atoms/CardSmall"
import CardLarge from "../components/commons/atoms/CardLarge"
import Modal from "../components/commons/atoms/Modal"

const SkillPage = () => {
    const [dataProject,setDataProject] = useState(undefined)
    return(
       <>
       <section>
       <HeroBanner/>
        <div className="mt-5 text-left text-(--text-color-black)">
            <h1 className="max-w-[370px] text-xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                Skills
            </h1>
        </div>

        <div className="flex w-full gap-2 text-(--text-color-black) max-md:flex-col-reverse">
            <div className="flex w-1/2 flex-wrap gap-x-4 gap-y-19 overflow-hidden py-18 max-md:w-full max-md:items-center max-md:justify-center">
            {listSkills.map((item,index)=> (
                <CardSmall 
                key={index}
                img={item.icon}
                title={item.link}
                />
            ))}
            </div>
            <div className="flex w-1/2 flex-col gap-4 py-6 max-md:w-full">
            {listProjects.map((item, index) => (
                <CardLarge 
                key={index}
                img={item.background}
                text={item.desc}
                title={item.title}
                tech={item.list_tech}
                onClick={() => setDataProject(item)}
                />
            ))}
            </div>
        </div>
       </section>
            <Modal 
            isOpen={dataProject}
            onClose={() => setDataProject(undefined)}
            data={dataProject}
            />

       </> 
    )
}

export default SkillPage