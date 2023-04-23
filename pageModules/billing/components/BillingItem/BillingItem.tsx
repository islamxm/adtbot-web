import styles from './BillingItem.module.scss';
import { billingItemPropsTypes } from '../../types';
import {FC} from 'react';
import { Row, Col } from 'antd';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';

const BillingItem:FC<billingItemPropsTypes> = ({
    isTop,
    price,
    title,
    list,
    isCurrent,
    onSelect,
    id,
    load
}) => {

    return (
        <div className={`${styles.wrapper} ${isTop ? styles.top : ''}`}>
            <div className={styles.body}>
                <Row gutter={[20,20]}>
                    {
                        isTop ? (
                            <Col span={24}>
                                <div className={styles.ex}>
                                    <div className={styles.badge}>Популярный</div>
                                </div>
                            </Col>
                        ) : null
                    }
                    <Col span={24}>
                        <div className={styles.price}>
                            <span>${price}</span> / месяц
                        </div>
                    </Col>
                    <Col span={24}>
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                    </Col>
                    <Col span={24}>
                        <div className={styles.descr}>
                            <Row gutter={[10,10]}>
                                {
                                    list?.map((item, index) => (
                                        <Col key={index}>
                                            <div className={styles.part}>
                                                <div className={styles.head}>{item.head}</div>
                                                <ul className={styles.list}>
                                                    {
                                                        item.ul?.map((i, index) => (
                                                            <li className={styles.item} key={index}>
                                                                <a href={i.link} target={'_blank'} className={styles.link}>
                                                                    <div className={styles.icon}>
                                                                        <Image
                                                                            width={20}
                                                                            height={20}
                                                                            src={i.icon}
                                                                            alt={''}
                                                                            />
                                                                    </div>
                                                                    <div className={styles.label}>{i.label}</div>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Button
                            onClick={() => onSelect && onSelect(id)}
                            disabled={isCurrent}
                            load={load}
                            text={isCurrent ? 'Текущий тариф' : 'Выбрать тариф'}
                            variant={isTop ? 'default' : 'blue'}
                            fill
                            />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BillingItem;