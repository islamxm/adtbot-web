import styles from './TwoAuthModal.module.scss';
import {Modal, ModalProps, Row, Col} from 'antd';
import {FiUnlock} from 'react-icons/fi';
import {useState, useEffect} from 'react';
import AuthCode from 'react-auth-code-input';
import Button from '@/components/Button/Button';
import Router from 'next/router';
import ApiService from '@/service/apiService';
import { Cookies } from 'typescript-cookie';
import { useAppDispatch } from '@/hooks/useTypesRedux';
import { updateTokens } from '@/store/actions';
import notify from '@/helpers/notify';

interface I extends ModalProps {
    data: any,
    token: string,
    saveMe?: boolean
    onLogin?: (...args: any[]) => any,
    onResetData?: (...args: any[]) => any
}


const service = new ApiService()

const TwoAuthModal: React.FC<I> = ({
    open,
    width,
    title,
    onCancel,

    onResetData,

    token,
    data,
    saveMe
    // onLogin
}) => {
    const dispatch = useAppDispatch()
    const [status, setStatus] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [load, setLoad] = useState(false)
    

    // useEffect(() => {
    //     if(value?.length === 6 && value !== '000000') {
    //         setStatus('success')
    //     } 
    //     if(value?.length === 6 && value === '000000') {
    //         setStatus('error')
    //     }
    //     if(value?.length < 6) {
    //         setStatus('')
    //     }
        
    // }, [value])


    const onLogin = () => {
        if(value && data && token) {
            service.verify2FToken({totp_code: value, totp_verify_token: token}).then(res => {
                // console.log(res)
                if(res?.status === 20) {
                    setStatus('error')
                }
                if(res?.status === 1) {
                    setValue('')
                    onResetData && onResetData()
                }
                if(res?.access_token) {
                    setStatus('success')

                    service.getOAuth2Token(data).then(data => {
                        if(data?.status === 200) {
                            data?.json().then(r => {
                                if(saveMe) {
                                    Cookies.set('adtbot-console-access-token', r?.access_token) //access_token
                                    Cookies.set('adtbot-console-refresh-token', r?.refresh_token) //refresh_token
                                    dispatch(updateTokens({access: r?.access_token, refresh: r?.refresh_token}))
                                    if(r?.is_first_login === true) {
                                        Router.push('/')
                                    }
                                    if(r?.is_first_login === false) {
                                        Router.push('/account/bots')
                                    }
                                    
                                } else {
                                    Cookies.remove('adtbot-console-access-token') //access_token
                                    Cookies.remove('adtbot-console-refresh-token') //refresh_token
                                    dispatch(updateTokens({access: r?.access_token, refresh: r?.refresh_token}))
                                    if(r?.is_first_login === true) {
                                        Router.push('/')
                                    }
                                    if(r?.is_first_login === false) {
                                        Router.push('/account/bots')
                                    }
                                }
                            })
                        } else {
                            notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                            onResetData && onResetData()
                        }
                    })
                    

                }

            })
        }
    }


    

    return (
        <Modal
            open={open}
            // onCancel={onCancel}
            title={title}
            width={width}
            className={`${styles.wrapper} modal`}
            >
            <div className={styles.body}>
                <Row gutter={[30, 30]}>
                    <Col span={24}>
                        <div className={styles.icon}>
                            <div className={`${styles.icon_el} ${status === 'error' ? styles.error : ''} ${status === 'success' ? styles.success : ''}`}>
                                <FiUnlock/>
                            </div>
                        </div>  
                    </Col>
                    <Col span={24}>
                        <Row gutter={[10,10]}>
                            <Col span={24}>
                                <h4 className={`${styles.title} heading_1`}>Двухфакторная аутентификация</h4>
                            </Col>
                            <Col span={24}>
                                <div className={styles.subtitle}>Введите 6-значный код из приложения для двухфакторной аутентификации.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className={styles.code}>
                            <AuthCode 
                                containerClassName={`${styles.fields} ${status === 'error' ? styles.error : ''} ${status === 'success' ? styles.success : ''}`} 
                                inputClassName={styles.input} 
                                onChange={setValue} 
                                allowedCharacters={'numeric'}/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Button
                            text='Войти'
                            fill
                            disabled={value?.length !== 6}
                            onClick={onLogin}
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default TwoAuthModal;