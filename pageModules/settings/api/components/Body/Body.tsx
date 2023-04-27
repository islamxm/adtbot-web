import styles from './Body.module.scss';
import { Tabs } from 'antd';
import TabBody from '../TabBody/TabBody';
import { useState } from 'react';
import { IKey } from '@/pages/account/settings/api';
import {FC} from 'react'

interface I {
    gate: IKey,
    ku: IKey,
    mexc: IKey,
    huobi: IKey,

    setGate: (...args: any[]) => any,
    setKu: (...args: any[]) => any,
    setMexc: (...args: any[]) => any,
    setHuobi: (...args: any[]) => any,
}


const Body:FC<I> = ({
    gate,
    ku,
    mexc,
    huobi,

    setGate,
    setKu,
    setMexc,
    setHuobi
}) => {
    const [activeTab, setActiveTab] = useState('1')

    const tabs = [
        {
            key: '1',
            label: 'Gate.io',
            children: <TabBody values={gate} setValues={setGate} testTitle='Gate.io'/>
        },
        {
            key: '2',
            label: 'KuCoin',
            children: <TabBody values={ku} setValues={setKu} testTitle='KuCoin'/>
        },
        {
            key: '3',
            label: 'MEXC',
            children: <TabBody values={mexc} setValues={setMexc} testTitle='MEXC'/>
        },
        {
            key: '4',
            label: 'Huobi',
            children: <TabBody values={huobi} setValues={setHuobi} testTitle='Huobi'/>
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