import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Input, Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import { bolg } from '../../public/data';
import { Link } from 'react-router-dom';

const Blog = ({ shop, like, addMalumot }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = React.useState(1);
    return (
        <>
            <div className='w-full max-w-[1300px] mx-auto px-5'>
                <div className='md:flex justify-between mb-5'>
                    <h2 className='fond-bold text-4xl mb-5 md:mb-0'>Блог</h2>

                    <div className='flex md:justify-end md:w-[410px] relative'>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full rounded-3xl border border-black outline-none py-2 px-12'
                            type="search"
                            placeholder='Поиск...' />

                        <i className="fa-solid fa-magnifying-glass absolute md:left-5 left-3 top-3"></i>
                    </div>
                </div>
                <div>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {
                            bolg.map((e) => {
                                return (
                                    <li key={e.id} data-aos-delay="0" data-aos="fade-up" className={`${e.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 'block' : 'hidden'} show rounded-xl p-4 mb-14 aos-init aos-animate`}>
                                        <Link to={`/malumotlar/${e.id}`} onClick={() => addMalumot(e.id)}>
                                            <img className='w-full h-[300px] rounded-xl mb-4' src={e.img} alt="" />
                                            <div>
                                                <div className='flex justify-between items-center icon'>
                                                    <p>01.07.2023</p>
                                                    <span><i className="fa-solid fa-eye"></i> 1257</span>
                                                </div>
                                                <h2 className='font-bold text-2xl leading-normal'>{e.title}</h2>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog