import React from 'react';
import './index.less'

export interface AppCardProps {
    appId: number
    appName: string
    decName: string
  }
  

const AppCard: React.FC<AppCardProps> = (props)=> {
    console.log(props, 'props');
    
    return (
        <div className='app-card'>
            appCard
        </div>
    );
}

export default AppCard;