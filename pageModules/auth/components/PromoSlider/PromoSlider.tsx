import styles from './PromoSlider.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade";


import img1 from '@/public/assets/promo-img-1.png'
import img2 from '@/public/assets/promo-img-2.png'
import img3 from '@/public/assets/promo-img-3.png'

import {Row, Col} from 'antd';


const content = [
    {
        img: img1,
        title: 'Как работает бот',
        text: 'Круглосуточный мониторинг разделов анонсов листингов 10 топовых бирж с периодичностью 5 запросов в секунду.',
        id: '1'
    },
    {
        img: img2,
        title: 'Как работает бот',
        text: 'Мгновенная покупка на одной из бирж, где эта монета уже торгуется.',
        id: '2'
    },
    {
        img: img3,
        title: 'Как работает бот',
        text: 'Автоматическая продажа на установленный Take Profit или продажа вручную.',
        id: '3'
    }
]




const PromoSlider = () => {

    return (
        <div className={styles.wrapper}>
            <Swiper 
                modules={[Autoplay]}
                autoplay={{
                    delay: 4000
                }}
                // effect='fade'
                className={styles.slider}>
                {
                    content && content.map((item, index) => (
                        <SwiperSlide 
                            className={styles.slide} 
                            key={item.id}
                            >
                            <div className={styles.inner}>
                                <Row gutter={[20,20]}>
                                    <Col span={24}>
                                        <div className={styles.img}>
                                            <Image
                                                width={485}
                                                height={505}
                                                src={item.img}
                                                alt="Promo-1"
                                                placeholder={'blur'}
                                                />
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <h3 className={styles.title}>
                                            {item.title}
                                        </h3>
                                    </Col>
                                    <Col span={24}>
                                        <div className={styles.text}>
                                            <p>
                                                {item.text}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                        </SwiperSlide>
                    ))
                }
                {/* <div className={styles.pag}></div> */}
            </Swiper>
        </div>
    )
}

export default PromoSlider;