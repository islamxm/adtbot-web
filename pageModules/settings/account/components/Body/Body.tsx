import styles from './Body.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Switch from '@/components/Switch/Switch';
import Radio from '@/components/Radio/Radio';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
const Body = () => {

    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            <Input
                                type='email'
                                label='Email'
                                placeholder='debra.holt@example.com'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Имя'
                                placeholder='Bessie Cooper'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Текущий пароль'
                                type='password'
                                placeholder='*************************'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Новый пароль'
                                type='password'
                                placeholder='*************************'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Повторить новый пароль'
                                type='password'
                                placeholder='*************************'
                                />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <div className={styles.ex}>
                        <Row gutter={[35,35]}>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <h3 className={styles.head}>Управление уведомлениями</h3>
                                    <div className={styles.body}>
                                        <Row gutter={[15,15]}>
                                            <Col span={24}>
                                                <Switch
                                                    id='mail'
                                                    labelText='Почта'
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Switch
                                                    id='telegram'
                                                    labelText='Телеграм'
                                                    />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <h3 className={styles.head}>Язык</h3>
                                    <div className={styles.body}>
                                        <Row gutter={[15,15]}>
                                            <Col span={24}>
                                                <Radio
                                                    value={'en'}
                                                    id='en'
                                                    name='lang'
                                                    labelText='Английский'
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Radio
                                                    id='ua'
                                                    labelText='Українська'
                                                    value={'ua'}
                                                    name={'lang'}
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Radio
                                                    id='ru'
                                                    labelText='Русский'
                                                    value={'ru'}
                                                    name={'lang'}
                                                    />
                                            </Col>
                                            
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.body}>
                                        <ThemeSwitch
                                            id='theme'
                                            labelText='Цветовой режим'
                                            />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Body;