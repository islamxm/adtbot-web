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
import {AiOutlineHistory} from 'react-icons/ai';
import {HiOutlineCash} from 'react-icons/hi';


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
                                        isActive={pathname === '/account/bots' || pathname?.includes('account/bots')}
                                        />
                                }
                                label='Мои боты'
                                isActive={pathname === '/account/bots' || pathname?.includes('/account/bots')}
                                link={'/account/bots'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                isActive={pathname === '/account/stats' || pathname?.includes('/account/stats')}
                                icon={
                                    <IconStats 
                                        size={20}
                                        isActive={pathname === '/account/stats' || pathname?.includes('/account/stats')}
                                        />
                                }
                                label='Статистика'
                                link={'/account/stats'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                menuIsOpen={settingsOpen}
                                isActive={pathname?.includes('/account/settings/') && !settingsOpen}
                                icon={
                                    <IconSettings
                                        isActive={settingsOpen || (pathname?.includes('/account/settings/') && !settingsOpen)}
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
                                    link={'/account/settings/account'}
                                    isActive={pathname === '/account/settings/account' || pathname?.includes('/account/settings/account')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='API'
                                    link={'/account/settings/api'}
                                    isActive={pathname === '/account/settings/api' || pathname?.includes('/account/settings/api')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='2FA'
                                    link={'/account/settings/2fa'}
                                    isActive={pathname === '/account/settings/2fa' || pathname?.includes('/account/settings/2fa')}
                                    />
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='Telegram-бот'
                                    link={'/account/settings/telegram-bot'}
                                    isActive={pathname === '/account/settings/telegram-bot' || pathname?.includes('/account/settings/telegram-bot')}
                                    />
                            </SidebarItem>
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconPricing 
                                        isActive={pathname === '/account/billing' || pathname?.includes('/account/billing')}
                                        size={20}/>
                                }
                                isActive={pathname === '/account/billing' || pathname?.includes('/account/billing')}
                                label='Баланс / Тарифы'
                                link={'/account/billing'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconBase 
                                        isActive={pathname === '/account/guide' || pathname?.includes('/account/guide')}
                                        size={20}/>
                                }
                                label='База знаний'
                                isActive={pathname === '/account/guide' || pathname?.includes('/account/guide')}
                                link={'/account/guide'}
                                />
                            <SidebarItem  
                                isParentHidden={isHidden}
                                icon={
                                    <IconPartner 
                                        isActive={pathname === '/account/affiliate' || pathname?.includes('/account/affiliate')}
                                        size={20}/>
                                }
                                link={'/account/affiliate'}
                                isActive={pathname === '/account/affiliate' || pathname?.includes('/account/affiliate')}
                                label='Партнерка'

                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconContacts 
                                        size={20}
                                        isActive={pathname === '/account/contacts' || pathname?.includes('/account/contacts')}
                                        />
                                }
                                isActive={pathname === '/account/contacts' || pathname?.includes('/account/contacts')}
                                label='Контакты'
                                link={'/account/contacts'}
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
                        {
                            !isHidden ? (
                                <Col span={24} className={styles.balance}>
                                    <div className={styles.action_item}>
                                        <Balance/>
                                    </div>
                                </Col>
                            ) : null
                        }
                        
                        <Col span={24} className={styles.deposit}>
                            <div className={styles.action_item}>
                                <Button
                                    style={{minWidth: 45, minHeight: 45}}
                                    beforeIcon={<HiOutlineCash/>}
                                    text={isHidden ? '' : 'Пополнить'}
                                    variant={'blue'}
                                    fill={!isHidden}
                                    onClick={openDepositModal}
                                    rounded={isHidden}
                                    />
                            </div>
                        </Col>
                        {/* <Col span={24} className={styles.history}>
                            <div className={styles.action_item}>
                                <Button
                                    beforeIcon={<AiOutlineHistory/>}
                                    onClick={openHistModal}
                                    style={{minWidth: 45, minHeight: 45}}
                                    text={isHidden ? '' : 'История'}
                                    variant={'default'}
                                    fill={!isHidden}
                                    rounded={isHidden}
                                    />
                            </div>
                        </Col> */}
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
                    </Row>
                    </Col>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;