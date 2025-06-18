import React,{useState} from 'react';
import CardLarge from '../../atoms/CardLarge'
import CardSmall from '../../atoms/CardSmall'
import Modal from '../../atoms/Modal'

import{ listIndustries,listProjects,listSkills} from '../../../../utils/constants'
import RoundedImg from "../../atoms/RoundedImg"
import BoxSocial from '../../atoms/BoxSocial';

const HeroDetail = () => {
    const [dataProject, setDataProject] = useState(undefined)

    const viewListSkills = () => {
        return listSkills.slice(0,3).map((item, index)=> (
            <CardSmall
            key={index}
            img={item.icon}
            title={item.name}
            link={item.link}
            />
        ))
    }
    return (<>
        <section className="flex max-md:flex-col-reverse w-full pt-4" >
            <div className="w-[60%] text-left text-(--text-color-black) max-xl:w-[50%] max-md:mt-8 max-md:w-full">
                <p>fajar hermawan </p>
                <div className="flex gap-8 max-xl:flex-col">
                    <div>
                        <h3 className="font-barlow max-w-[370px] text-4xl leading-7 font-bold max-xl-w-[300px] max-xl:text-3xl">Enpowering Digital Experiences Throught Frontend Development</h3>
                        <p className="text-md mt-4 max-w-[300px] leading-4 font-light">I’m a front-end web developer with a strong design sensibility,
                dedicated to transforming creative concepts into responsive,
                high-performance websites. From interactive UI/UX interfaces to
                smooth animations and scalable code, I help brands and creators
                build powerful digital experiences that truly connect with
                users.</p>
                    </div>
                    <div className="max-w-[200px] ">
                        <p className="text-sm font-bold">
                        <span className="text-xl">+62K</span>
                        Lines of Code & Counting
                        </p>
                        <p className="text-sm leading-4">
                Collaborated with clients across tech, gaming, and creative
                industries to build modern, responsive websites. Merging design
                precision with clean, scalable code to deliver exceptional
                frontend solutions.
              </p>
              <div className="mt-1 flex ">
                {listIndustries.map((item, index) => (
                    <RoundedImg key={index} src={item.icon} index= {index}/>
                ))}
                <RoundedImg key={1} text={"MORE"} index={1}/>
              </div>
                </div>
                </div>

                <div className='mt-2 flex items-center justify-between gap-4'>
                    <div className='mt-6'>
                        <button className='cursor pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray)'
                        onClick={() => {
                            window.location.href =
                    "mailto:your_email@example.com?subject=Subject&body=message%20goes%20here"
                        }}
                        >Discover More</button>
                        <BoxSocial/>
                    </div>
                    <div className='flex gap-4 max-xl:hidden'>{viewListSkills()}</div>
                </div>
            </div>
            <div className="flex w-[40%] flex-col gap-4 pl-4 max-xl:w-[50%] max-md:mt-14 max-md:w-full text-(--text-color-black) ">
            <div className='mt-16 hidden gap-1 text-(--text-color-black) max-xl:flex'>{viewListSkills()}</div>
            {listProjects.map((item, index )=> (
                <CardLarge 
                key={index}
                img={item.background}
                index={index + 1 }
                title={item.title}
                tech={item.list_tech}
                onClick={() => {
                    setDataProject(item)
                }}
                />
            ))}
            </div>
        </section>
            <Modal
            isOpen={dataProject}
            onClose={() => setDataProject(undefined)}
            data={dataProject}
            />

        </>
    );
}

export default HeroDetail
