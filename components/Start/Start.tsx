import styles from './Start.module.scss';
import { Row, Col } from 'antd';
import Button from '../Button/Button';
import Link from 'next/link';
import img1 from '@/public/assets/icons/start-1.svg';
import img2 from '@/public/assets/icons/start-2.svg';
import img3 from '@/public/assets/icons/start-3.svg';
import img4 from '@/public/assets/icons/start-4.svg';
import Image from 'next/image';

const list = [
    {
        title: 'Как это работает',
        icon: img1,
        text: 'Бот парсит рубрику криптовалютных бирж на предмет выхода анонса листинга новой монеты 5 раз в секунду. В момент публикации такой новости, бот ищет эту монету на других биржах и в случае ее наличия на ней, сразу покупает ее.'
    },
    {
        title: 'Сколько можно заработать',
        icon: img2,
        text: 'Сумма вашего заработка зависит от депозита и того, когда вы выйдете с монеты. Можем лишь сказать, что в среднем на анонсах цена повышается на 15-100% в первые минуты в зависимости от биржи, где происходит анонс, биржи где монета торгуется и самой монеты.'
    },
    {
        title: 'На чем заработок',
        icon: img3,
        text: 'Как правило, в момент анонса листинга на крупных биржах, на других биржах, где эта монета уже торгуется, происходит резкое увеличение ее стоимости. Мы будем первыми — купим в самом низу и продадим после вызванного анонсом пампа.'
    },
    {
        title: 'Ваши данные в безопасности',
        icon: img4,
        text: 'Мы не собираем никаких ваших данных. Вы только подключаете бота по API к серверам биржи, чтобы он мог получать данные и осуществлять на ней соответствующие действия.'
    }
]



const Start = () => {

    return (
        <div className={styles.wrapper}>
            <Row gutter={[50,50]}>
                <Col span={24}>
                    <div className={styles.main}>
                        <Row gutter={[20,20]}>
                            <Col span={24}>
                                <h1 className={styles.title}>Дмитрий, готовы начать?</h1>
                            </Col>
                            <Col span={24}>
                                <div className={styles.text}>
                                    <p>
                                    Мы рады, что вы выбрали ADTBot. Прежде чем приступать к автоматическому заработку на анонсах листингов, у нас для вас есть некоторая информация.
                                    <br/>
                                    <br/>
                                    Начать зарабатывать легко — добавьте вашего первого бота, это займет у вас меньше минуты.
                                    </p>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.action}>
                                    <div className={styles.btn}>
                                        <Button
                                            text='Подключить биржи'
                                            />
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href={'#'} className="def-link">Узнать больше</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={styles.body}>
                        <Row gutter={[40,40]}>
                            {
                                list?.map((item, index) => (
                                    <Col 
                                        md={12}
                                        span={24} 
                                        key={index}>
                                        <div className={styles.item}>
                                            <div className={styles.head}>
                                                <div className={styles.icon}>
                                                    <Image
                                                        src={item.icon}
                                                        alt='icon'
                                                        />
                                                </div>
                                                <h3 className={`${styles.label} heading_1`}>{item.title}</h3>
                                            </div>
                                            <div className={styles.text}>
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Start;