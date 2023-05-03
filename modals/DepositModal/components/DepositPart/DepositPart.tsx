import { useState } from 'react';
import styles from './DepositPart.module.scss';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {Row, Col} from 'antd';
import {TbCopy} from 'react-icons/tb';
import Link from 'next/link';
import copyValue from '@/helpers/copyValue';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import notify from '@/helpers/notify';
import { updateUserData } from '@/store/actions';

const service = new ApiService()

const DepositPart = ({
    closeModal,
    target,
    type
}:{
    closeModal?: (...args: any[]) => any,
    target?: string,
    type: 1 | 2 | 3
}) => {
    const dispatch = useAppDispatch()
    const {tokens: {access}} = useAppSelector(s => s)
    const [load, setLoad] = useState(false)
    const [value, setValue] = useState<string>('')

    const onSave = () => {
        if(value && access && target) {
            setLoad(true)
            service.deposit({
                txid: value,
                payment_method: type
            }, access).then(res => {
                console.log(res)
                if(res === true) {
                    notify('Баланс успешно пополнен', 'SUCCESS')
                    service.getUserData(access).then(res => {
                        if(res?.email) {
                            dispatch(updateUserData(res))
                        }
                    }).finally(() => {
                        setLoad(false)
                        setValue('')
                    })
                } else {
                    notify('Произошла ошибка', 'ERROR')
                    setLoad(false)
                }
            })
        }
    }


    return (
        <div className={styles.wrapper}>
            <Row gutter={[30,30]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            Адрес кошелька для пополнения баланса аккаунта платформы
                        </Col>
                        <Col span={24}>
                            {/* input */}
                            <div className={styles.field}>
                                <div className={styles.input}>
                                    <Input
                                        readOnly
                                        placeholder='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                        value={target}
                                      
                                        />
                                </div>
                                <div className={styles.action}>
                                    <Button
                                        beforeIcon={<TbCopy/>}
                                        onClick={() => copyValue({
                                            value: '0x513ba2bFe3Bb352283E1BabA2E742E838ba63958',
                                            notifyLabel: 'Адрес кошелька скопирован'
                                        })}
                                        />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            После перевода и одного подтверждения сети введите TXID (хэш транзакции) в поле для пополнения баланса аккаунта платформы:
                        </Col>
                        <Col span={24}>
                            {/* input */}
                            <div className={styles.field}>
                                <div className={styles.input}>
                                    <Input
                                        value={value}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                                        placeholder='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                        />
                                </div>
                                {/* <div className={styles.action}>
                                    <Button
                                        beforeIcon={<TbCopy/>}
                                        />
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    {/* action */}
                    <div className={styles.action}>
                        <div className={styles.main}>
                            <div className={styles.item}>
                                <Button
                                    load={load}
                                    disabled={!value}
                                    onClick={onSave}
                                    text='Подтвердить'
                                    />
                            </div>
                            <div className={styles.item}>
                                <Button
                                    onClick={() => {
                                        if(closeModal) closeModal()
                                    }}
                                    variant={'simple'}
                                    text='Отмена'
                                    />
                            </div>
                        </div>
                        <div className={styles.ex}>
                            <div className={styles.item}>
                                <Link className='def-link' href='#'>Не знаете как оплатить?</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DepositPart;