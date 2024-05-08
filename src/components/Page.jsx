import React, { useEffect, useState } from 'react';
import MobileSideMenu from './MobileSideMenu';
import DashHeader from './DashHeader';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';

export default function Page({ title, components }) {
    const [isChecked, setIsChecked] = useState(components[0].name);

    const handleChecked = (value) => {
        setIsChecked(value);
    };

    useEffect(() => {
        setIsChecked(components[0].name);
    }, []);

    return (
        <>
            <div className='w-full pt-[80px]'>
                <DashHeader />
                <div className='widepc:w-[1920px] mobile:w-full tablet:w-full pc:w-full m-auto bg-[#F3F4F8]'>
                    <div className='w-full flex '>
                        <div className='pc:block widepc:block mobile:hidden tablet:hidden'>
                            <SideMenu />
                        </div>
                        <div className='pc:hidden widepc:hidden mobile:hidden tablet:block'>
                            <MobileSideMenu />
                        </div>
                        <div className='w-full'>
                            <div className='widepc:px-[124px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]'>
                                <h4 className='text-[28px] mobile:text-[22px] my-[30px] font-bold'>
                                    {title}
                                </h4>
                                <ul className='flex'>
                                    {components.map((component) => (
                                        <li key={component.name} className='text-[18px] mobile:text-[16px] mr-[72px] mobile:mr-[20px]'>
                                            {component.name === 'business' ? (
                                                <Link to='/business' className={`cursor-pointer pb-[10px] transition ${isChecked === component.name ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                                    {component.label}
                                                </Link>
                                            ) : 
                                            (
                                                <label className={`cursor-pointer pb-[10px] transition ${isChecked === component.name ? 'text-[#5146F0] border-b-2 border-[#5146F0]' : 'text-[#525252] border-0'}`}>
                                                    <input type='radio' name='submenu' value={component.name} defaultChecked={isChecked === component.name} onChange={() => handleChecked(component.name)} hidden />
                                                    {component.label}
                                                </label>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='w-full'>
                                {components.map((component) => (
                                    isChecked === component.name ? <component.component key={component.name} /> : null
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
