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
            children: <DepositPart type={1} target='TJofsFoQdRjJ86EBp5U4DXEmTjwQpRkc9G' closeModal={onCancel}/>
        },
        {
            label: 'USDT (BEP20)',
            key: '3',
            children: <DepositPart type={3} target='0x524c1480eAB39F7441626879933f89Fed92309F2' closeModal={onCancel}/>
        },
        {
            label: 'USDT (ERC20)', 
            key: '2',
            children: <DepositPart type={2} target='0x524c1480eAB39F7441626879933f89Fed92309F2' closeModal={onCancel}/>
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