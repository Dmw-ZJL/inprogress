import React, { useEffect, useState } from 'react';
import AppCard from '@/components/appCard';
import './index.less'

const HomePage :React.FC = ()=> {
const [appList] =  useState([
    {
        appId: 1,
        appName: 'resumes',
        decName: '简历',
    },
])
console.log(appList, 'appList');

useEffect(()=>{})
  return (
    <div className='homePage'>
        <div className="home-container">
            <div className="app-container">
                {appList.map(item => (<AppCard {...item} key={item.appId} />))}
            </div>
        </div>
    </div>
  );
}

export default HomePage;