import styles from './PassResetModal.module.scss';
import {Modal, ModalProps} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {Row, Col} from 'antd';
import ApiService from '@/service/apiService';
import {useState, useCallback, useRef, useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import { updateCaptcha } from '@/store/actions';
const service = new ApiService();


const PassResetModal:React.FC<ModalProps> = ({
    open = true,
    onCancel,
    width = 455,
    title,
    centered = false
}) => {
    const dispatch = useAppDispatch()

    const recapRef = useRef<any>()
    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState('')
    const [captcha_token, setcaptcha_token] = useState('')


    


    const onSubmit = useCallback(() => {
        if(email && captcha_token) {
            // setLoad(true)
            // service.forgotPassword({email}, captcha_token).then(res => {
            //     console.log(res)
            // }).finally(() => {
            //     setLoad(false)
            // })
        }
    }, [email, captcha_token])

    useEffect(() => {
        if(recapRef?.current) {
            console.log(recapRef?.current)
        }
    }, [recapRef])


    return (
        <Modal
            onCancel={onCancel}
            open={open}
            width={width}
            title={title}
            centered={centered}
            className={`${styles.wrapper} modal`}
            >
            <div className={styles.body}>
                <Row gutter={[15,15]}>
                    <Col span={24}>
                        <Input  
                            placeholder='debra.holt@example.com'
                            type='email'
                            label='Email'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            value={email}
                            />
                    </Col>
                    {
                        open ? (
                            <Col span={24}>
                                <ReCAPTCHA
                                    sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
                                    size={'normal'}
                                    className="custom-recap"
                                    ref={recapRef}

                                    onChange={e => {
                                        if(e) {
                                            dispatch(updateCaptcha(e))
                                            setcaptcha_token(e)
                                        }
                                    }}
                                    />
                            </Col>
                        ) : null
                    }
                    <Col span={24}>
                        <Button
                            load={load}
                            disabled={email && captcha_token ? false : true}
                            onClick={onSubmit}
                            text='Сброс пароля'
                            fill
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default PassResetModal;

