import styles from './Body.module.scss';
import { Tabs } from 'antd';
import TabBody from '../TabBody/TabBody';
import { useState } from 'react';



const Body = () => {
    const [activeTab, setActiveTab] = useState('1')

    const tabs = [
        {
            key: '1',
            label: 'Gate.io',
            children: <TabBody testTitle='Gate.io'/>
        },
        {
            key: '2',
            label: 'KuCoin',
            children: <TabBody testTitle='KuCoin'/>
        },
        {
            key: '3',
            label: 'MEXC',
            children: <TabBody testTitle='MEXC'/>
        },
        {
            key: '4',
            label: 'Huobi',
            children: <TabBody testTitle='Huobi'/>
        }
    ]


    return (
        <div className={styles.wrapper}>
            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                items={tabs}
                />
        </div>
    )
}

export default Body;