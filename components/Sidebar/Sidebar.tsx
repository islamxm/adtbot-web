import styles from './Sidebar.module.scss';
import {FC, useEffect, useState} from 'react';
import { sidebarItemPropsTypes, sidebarPropsTypes } from './types';
import logoImg from '@/public/assets/logo.svg';
import Image from 'next/image';
import SidebarList from './components/SidebarList/SidebarList';
import SidebarItem from './components/SidebarItem/SidebarItem';
import { useRouter } from 'next/router';
import telegram from '@/public/assets/icons/telegram.svg';
import twitter from '@/public/assets/icons/twitter.svg';
import youtube from '@/public/assets/icons/youtube.svg';
import Button from '../Button/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import AddBotModal from '@/modals/AddBotModal/AddBotModal';
import logoSm from '@/public/assets/logo-sm.svg';
import {FiChevronLeft} from 'react-icons/fi';
import {useRef} from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypesRedux';
import { toggleMenu } from '@/store/actions';
import {GrClose} from 'react-icons/gr';
import { Row, Col } from 'antd';
import Balance from '../Balance/Balance';
import DepositModal from '@/modals/DepositModal/DepositModal';
import PmHistoryModal from '@/modals/PmHistoryModal/PmHistoryModal';


// ICONS
import IconMyBots from '@/icons/IconMyBots';
import IconStats from '@/icons/IconStats';
import IconPricing from '@/icons/IconPricings';
import IconBase from '@/icons/IconBase';
import IconPartner from '@/icons/IconPartner';
import IconContacts from '@/icons/IconContacts';
import IconExit from '@/icons/IconExit';
import IconSettings from '@/icons/IconSettings';


const Sidebar:FC<sidebarPropsTypes> = ({
    isActive
}) => {
    const {pathname, replace} = useRouter()
    const {isMenuOpen} = useAppSelector(s => s)
    const dispatch = useAppDispatch();
    const sidebarBodyRef = useRef<HTMLDivElement>(null)
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [addBotModal, setAddBotModal] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const [depositModal, setDepositModal] = useState<boolean>(false)
    const [histModal, setHistModal] = useState<boolean>(false)

    const openHistModal = () => setHistModal(true)
    const closeHistModal = () => setHistModal(false)

    const openDepositModal = () => setDepositModal(true)
    const closeDepositModal = () => setDepositModal(false)


    const openAddBotModal = () => setAddBotModal(true)
    const closeAddBotModal = () => setAddBotModal(false)

    const toggleSidebar = () => {
        setIsHidden(s => !s);
    }

    useEffect(() => {
        if(settingsOpen) {
            setIsHidden(false)
        }
    }, [settingsOpen])

    useEffect(() => {
        if(isHidden) {
            setSettingsOpen(false)
        }
    }, [isHidden])

    useEffect(() => {
        if(dispatch) {
            dispatch(toggleMenu(false))
        }
    }, [pathname, dispatch])

    return (
        <div className={`${styles.sidebar} ${isHidden ? styles.hidden : ''} ${isMenuOpen ? styles.open : ''}`}>
            <PmHistoryModal
                open={histModal}
                onCancel={closeHistModal}
                />
            <DepositModal
                open={depositModal}
                onCancel={closeDepositModal}
                />
            <AddBotModal
                open={addBotModal}
                onCancel={closeAddBotModal}
                />
            <button  
                onClick={toggleSidebar}
                className={styles.toggle}>
                <div className={styles.icon}>
                <FiChevronLeft/>
                </div>
            </button>
            <div ref={sidebarBodyRef} className={`${styles.wrapper}  custom-scroll`}>
                <button 
                    onClick={() => dispatch(toggleMenu(false))}
                    className={styles.close}>
                    <GrClose/>
                </button>
                <div className={styles.logo}>
                    {
                        isHidden ? (
                            <Image
                                className={styles.img}
                                src={logoSm}
                                width={35}
                                height={35}
                                alt={'logo'}
                        />
                        ) : (
                            <Image
                                className={styles.img}
                                src={logoImg}
                                width={122}
                                height={30}
                                alt={'logo'}
                                />
                        )
                    }
                    
                </div>
                <div className={styles.body}>
                    <div className={styles.list}>
                        <SidebarList>
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconMyBots 
                                        size={20}
                                        isActive={pathname === '/profile/bots' || pathname?.includes('profile/bots')}
                                        />
                                }
                                label='Мои боты'
                                isActive={pathname === '/profile/bots' || pathname?.includes('/profile/bots')}
                                link={'/profile/bots'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                isActive={pathname === '/profile/stats' || pathname?.includes('/profile/stats')}
                                icon={
                                    <IconStats 
                                        size={20}
                                        isActive={pathname === '/profile/stats' || pathname?.includes('/profile/stats')}
                                        />
                                }
                                label='Статистика'
                                link={'/profile/stats'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                menuIsOpen={settingsOpen}
                                isActive={pathname?.includes('/profile/settings/') && !settingsOpen}
                                icon={
                                    <IconSettings
                                        isActive={settingsOpen || (pathname?.includes('/profile/settings/') && !settingsOpen)}
                                        size={20}
                                        />
                                }
                                onClick={() => setSettingsOpen(s => !s)}
                                isButton
                                label='Настройки'
                            >
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='Аккаунт'
                                    link={'/profile/settings/account'}
                                    isActive={pathname === '/profile/settings/account' || pathname?.includes('/profile/settings/account')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='API'
                                    link={'/profile/settings/api'}
                                    isActive={pathname === '/profile/settings/api' || pathname?.includes('/profile/settings/api')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='2FA'
                                    link={'/profile/settings/2fa'}
                                    isActive={pathname === '/profile/settings/2fa' || pathname?.includes('/profile/settings/2fa')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='Telegram-бот'
                                    link={'/profile/settings/telegram-bot'}
                                    isActive={pathname === '/profile/settings/telegram-bot' || pathname?.includes('/profile/settings/telegram-bot')}
                                    />
                            </SidebarItem>
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconPricing 
                                        isActive={pathname === '/profile/billing' || pathname?.includes('/profile/billing')}
                                        size={20}/>
                                }
                                isActive={pathname === '/profile/billing' || pathname?.includes('/profile/billing')}
                                label='Баланс / Тарифы'
                                link={'/profile/billing'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconBase 
                                        isActive={pathname === '/profile/guide' || pathname?.includes('/profile/guide')}
                                        size={20}/>
                                }
                                label='База знаний'
                                isActive={pathname === '/profile/guide' || pathname?.includes('/profile/guide')}
                                link={'/profile/guide'}
                                />
                            <SidebarItem  
                                isParentHidden={isHidden}
                                icon={
                                    <IconPartner 
                                        isActive={pathname === '/profile/affiliate' || pathname?.includes('/profile/affiliate')}
                                        size={20}/>
                                }
                                link={'/profile/affiliate'}
                                isActive={pathname === '/profile/affiliate' || pathname?.includes('/profile/affiliate')}
                                label='Партнерка'

                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconContacts 
                                        size={20}
                                        isActive={pathname === '/profile/contacts' || pathname?.includes('/profile/contacts')}
                                        />
                                }
                                isActive={pathname === '/profile/contacts' || pathname?.includes('/profile/contacts')}
                                label='Контакты'
                                link={'/profile/contacts'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconExit 
                                        size={20}
                                        />
                                }
                                isButton
                                onClick={() => replace('/auth/login')}
                                label='Выход'
                                />
                        </SidebarList>
                    </div>
                    <div className={styles.soc}>
                        <a href='#' target={'_blank'} className={styles.item}>
                            <Image
                                alt='telegram'
                                src={telegram}
                                className={styles.img}
                                width={15}
                                height={15}
                                />
                        </a>
                        <a href='#' target={'_blank'} className={styles.item}>
                            <Image
                                alt='twitter'
                                src={twitter}
                                className={styles.img}
                                width={15}
                                height={15}
                                />
                        </a>
                        <a href='#' target={'_blank'} className={styles.item}>
                            <Image
                                alt='youtube'
                                src={youtube}
                                className={styles.img}
                                width={15}
                                height={15}
                                />
                        </a>
                    </div>
                </div>
                <div className={styles.action}>
                    <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24} className={styles.balance}>
                            <div className={styles.action_item}>
                                <Balance/>
                            </div>
                        </Col>
                        <Col span={24} className={styles.addbot}>
                            <div className={styles.action_item}>
                                <Button
                                    onClick={openAddBotModal}
                                    style={{minWidth: 45, minHeight: 45}}
                                    rounded={isHidden}
                                    text={isHidden ? '' : 'Создать бот'}
                                    beforeIcon={<AiOutlinePlus/>}
                                    variant={'default'}
                                    fill={!isHidden}
                                    />
                            </div>
                        </Col>
                        <Col span={24} className={styles.deposit}>
                            <div className={styles.action_item}>
                                <Button
                                    style={{minWidth: 45, minHeight: 45}}
                                    text={'Пополнить'}
                                    variant={'blue'}
                                    fill
                                    onClick={openDepositModal}
                                    />
                            </div>
                        </Col>
                        <Col span={24} className={styles.history}>
                            <div className={styles.action_item}>
                                <Button
                                    onClick={openHistModal}
                                    style={{minWidth: 45, minHeight: 45}}
                                    text={'История'}
                                    variant={'default'}
                                    fill
                                    />
                            </div>
                        </Col>
                    </Row>
                    </Col>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;