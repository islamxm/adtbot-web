import styles from './Body.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {TbCopy} from 'react-icons/tb';
import copyValue from '@/helpers/copyValue';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';
import { useEffect, useState } from 'react';


const service = new ApiService()


const Body = () => {
    const {tokens: {access}, userData} = useAppSelector(s => s)
    const [users, setUsers] = useState<any[]>([])
    const [link, setLink] = useState('');

    useEffect(() => {
        if(access) {
            service.getReferalUsers(access).then(r => {
                console.log(r)
                setUsers(r)
            })

            service.getReferalLink(access).then(r => {
                setLink(r)
            })
        }
    }, [access])


    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            Ваша реферальная ссылка:
                        </Col>
                        <Col span={24}>
                            <div className={styles.field}>
                                
                                <div className={styles.input}>
                                    <Input
                                        placeholder={link}
                                        value={userData?.user_own_referal}
                                        readOnly
                                        />
                                </div>
                                <div className={styles.action}>
                                    <Button
                                        disabled={!link}
                                        beforeIcon={<TbCopy/>}
                                        onClick={() => {
                                            copyValue({
                                                value: link,
                                                notifyLabel: 'Партнерская ссылка скопирована'
                                            })
                                        }}
                                        />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <p>
                    Реферальная программа ADTBot позволит вам и вашим друзьям зарабатывать еще больше. При регистрации по данной ссылке, пользователь подключается с начальным балансом 10 USDT.
                    <br/>
                    <br/>
                    При каждом пополнении счета платформы рефералом, на ваш баланс автоматически будет начисляться 10% комиссии от внесенной им суммы.
                    <br/>
                    <br/>
                    <br/>
                    Правила реферальная программы:
                    <br/>
                    <br/>
                    1. Величина комиссии - 10% от суммы взноса партнера;
                    <br/>
                    2. Продолжительность начисления комиссий - бессрочно;
                    <br/>
                    3. Ваш аккаунт и аккаунт партнера должны быть активными;
                    <br/>
                    4. Администрация ADTBot оставляет за собой право пересмотреть условия предоставления реферальной программы.
                    <br/>
                    <br/>
                    <br/>
                    {
                        users?.length > 0 ? (
                            <>
                                Пользователи, зарегистрированные по реферальной ссылке:
                                <br/>
                                <br/>
                                {
                                    users?.map((i, index) => (
                                        <>
                                            {index + 1}. {i.username}  —  Активен
                                            <br/>
                                        </>
                                    ))
                                }
                            </>
                        ) : null
                    }
                    </p>

                </Col>
            </Row>
        </div>
    )
}


export default Body;