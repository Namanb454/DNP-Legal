import React from 'react'
import { FaUser } from 'react-icons/fa'
import { GiJusticeStar, GiTeamIdea } from 'react-icons/gi'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { MdFamilyRestroom } from 'react-icons/md'
import { TbReportMoney } from 'react-icons/tb'
import { VscSaveAs } from 'react-icons/vsc'

const Service = () => {
    const services = [
        {
            'name': 'civil',
            'icon': <GiJusticeStar />,
        },
        {
            'name': 'Criminal',
            'icon': <FaUser />,
        },
        {
            'name': 'Matrimonial',
            'icon': <MdFamilyRestroom />,
        },
        {
            'name': 'Income Tax',
            'icon': <TbReportMoney />,
        },
        {
            'name': 'GST',
            'icon': <VscSaveAs />,
        },
        {
            'name': 'Intellectual Property Rights',
            'icon': <GiTeamIdea />,
        },
    ]
    return (
        <div id='services'>
            {/* Icon Blocks */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 h-full mx-auto bg-neutral-900 text-white">
                <h2 className='md:text-5xl text-3xl font-semibold text-center p-10'>Services</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
                    {/* Icon Block */}
                    {services.map((data, index) => {
                        return (

                            <div className="text-center border hover:border-amber-500 p-10 rounded bg-neutral-950">
                                <div className="flex justify-center items-center size-16 border border-amber-500 rounded-full mx-auto">

                                    <h2 className='text-amber-500 text-3xl'>
                                        {data.icon}
                                    </h2>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-xl font-semibold capitalize">{data.name}</h3>
                                    <p className="mt-1 text-neutral-200">Responsive, and mobile-first project on the web</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* End Icon Blocks */}
        </div>

    )
}

export default Service
