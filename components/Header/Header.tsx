import styles from './Header.module.scss';
import { headerPropsTypes } from './types';
import {FC, useState} from 'react';
import Balance from '../Balance/Balance';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import PmHistoryModal from '@/modals/PmHistoryModal/PmHistoryModal';
import DepositModal from '@/modals/DepositModal/DepositModal';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';
import IconButton from '../IconButton/IconButton';
import Sidebar from '../Sidebar/Sidebar';


const Header:FC<headerPropsTypes> = ({
    head
}) => {
    const {pathname} = useRouter()
    const [historyModal, setHistoryModal] = useState(false)
    const [depositModal, setDepositModal] = useState(false)

    const openHistoryModal = () => setHistoryModal(true)
    const closeHistoryModal = () => setHistoryModal(false)

    const openDepositModal = () => setDepositModal(true)
    const closeDepositModal = () => setDepositModal(false)

    return (
        <header className={styles.wrapper}>
            <PmHistoryModal
                open={historyModal}
                onCancel={closeHistoryModal}
                />
            <DepositModal
                open={depositModal}
                onCancel={closeDepositModal}
                width={650}
                />
            <div className={styles.inner}>
                <div className={styles.top}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={logo}
                            alt="logo"
                            width={122}
                            height={30}
                            />
                    </Link>
                    <button className={`${styles.burger}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={styles.main}>
                    <h2 className={styles.head}>
                        {head}
                    </h2>
                    <div className={styles.body}>
                        {
                            pathname === '/profile/billing' ? (
                                <>
                                    <div className={styles.item}>
                                        <Button
                                            onClick={openDepositModal}
                                            style={{padding: '10px 40px'}}
                                            text='Пополнить'
                                            variant={'default'}
                                            />
                                    </div>
                                    <div className={styles.item}>
                                        <Button
                                            style={{padding: '10px 40px'}}
                                            onClick={openHistoryModal}
                                            text='История'
                                            variant={'blue'}
                                            />
                                    </div>
                                </>
                            ) : null
                        }
                        <div className={styles.item}>
                            <Balance/>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;