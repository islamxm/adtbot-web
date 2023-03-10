import styles from './AddBotModal.module.scss';
import {FC} from 'react';
import { addBotModalPropsTypes } from './types';
import { Modal } from 'antd';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';


const anonceOpts = [
    {value: '1', label: 'Binance'},
    {value: '2', label: 'Coinbase'},
    {value: '3', label: 'Huobi'},
    {value: '4', label: 'KuCoin'},
    {value: '5', label: 'OKX'},
    {value: '6', label: 'Kraken'},
    {value: '7', label: 'Bitstamp'},
    {value: '8', label: 'Bitfinex'},
    {value: '9', label: 'Bybit'},
    {value: '10', label: 'Bithumb'},
]

const buyOpts = [
    {value: '1', label: 'Gate.io'},
    {value: '2', label: 'Some option'},
]


const AddBotModal:FC<addBotModalPropsTypes> = ({
    open,
    onCancel
}) => {

    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }

    return (
        <Modal
            open={open}
            onCancel={closeHandle}
            width={635}
            title="Создание бота"
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[25,25]}>
                <Col span={24}>
                    {/* body */}
                    <Row gutter={[15,15]}>
                        <Col span={12}>
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Select
                                        hint={'text text'}
                                        label={'Анонс'}
                                        options={anonceOpts}
                                        defaultValue={anonceOpts[0]}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'текст текст текст текст текст текст'}
                                        label='Объем'
                                        placeholder='140 USDT'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'текст текст'}
                                        label='TP'
                                        placeholder='2%'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'текст текст'}
                                        label='Сумма'
                                        placeholder='150 USDT'
                                        />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Select
                                        hint={'text text'}
                                        label={'Покупка'}
                                        options={buyOpts}
                                        defaultValue={buyOpts[0]}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'текст текст'}
                                        label='Slippage'
                                        placeholder='30%'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'текст текст'}
                                        label='SL'
                                        placeholder='3%'
                                        />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    {/* action */}
                    <div className={styles.action}>
                        <div className={styles.item}>
                            <Button
                                text='Создать и запустить'
                                />
                        </div>
                        <div className={styles.item}>
                            <Button
                                text='Создать'
                                variant={'simple'}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default AddBotModal;