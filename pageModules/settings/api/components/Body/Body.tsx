import styles from './Body.module.scss';
import { Tabs } from 'antd';
import TabBody from '../TabBody/TabBody';
import { useState } from 'react';
import { IKey } from '@/pages/account/settings/api';
import {FC} from 'react'

interface I {
    balance?: {
        BuyingIP: string[],
        GateBalance: any,
        HuobiBalance: any,
        KuCoinBalance: any,
        MEXCBalance: any
    },


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
    balance,

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
            children: <TabBody ips={balance?.BuyingIP} balance={balance?.GateBalance} values={gate} setValues={setGate} testTitle='Gate.io'/>
        },
        {
            key: '2',
            label: 'KuCoin',
            children: <TabBody ips={balance?.BuyingIP} balance={balance?.KuCoinBalance} values={ku} setValues={setKu} testTitle='KuCoin'/>
        },
        {
            key: '3',
            label: 'MEXC',
            children: <TabBody ips={balance?.BuyingIP} balance={balance?.MEXCBalance} values={mexc} setValues={setMexc} testTitle='MEXC'/>
        },
        {
            key: '4',
            label: 'Huobi',
            children: <TabBody ips={balance?.BuyingIP} balance={balance?.HuobiBalance} values={huobi} setValues={setHuobi} testTitle='Huobi'/>
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