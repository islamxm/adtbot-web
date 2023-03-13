import {Modal, ModalFuncProps, Row, Col} from 'antd';
import {FC} from 'react';
import {Tabs} from 'antd';
import { useState } from 'react';
import DepositPart from './components/DepositPart/DepositPart';






const DepositModal:FC<ModalFuncProps> = ({
    onCancel,
    width,
    open,
}) => {
    const [activeTab, setActiveTab] = useState('1')


    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }
    
    const tabs = [
        {
            label: 'USDT (TRC20)', 
            key: '1',
            children: <DepositPart closeModal={onCancel}/>
        },
        {
            label: 'USDT (ERC20)', 
            key: '2',
            children: <DepositPart closeModal={onCancel}/>
        },
    ]


    return (
        <Modal
            title={'Выберите способ пополнения счета'}
            open={open}
            width={width}
            onCancel={closeHandle}
            className={`modal`}
            >
            
            <Tabs
                onChange={(key) => setActiveTab(key)}
                activeKey={activeTab}
                items={tabs}
                />
        </Modal>
    )
}

export default DepositModal;