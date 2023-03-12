import styles from './Sidebar.module.scss';
import {FC, useState} from 'react';
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
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [addBotModal, setAddBotModal] = useState<boolean>(false)

    const openAddBotModal = () => setAddBotModal(true)
    const closeAddBotModal = () => setAddBotModal(false)

    return (
        <div className={styles.sidebar}>
            <AddBotModal
                open={addBotModal}
                onCancel={closeAddBotModal}
                />
            <div className={`${styles.wrapper} ${isActive ? styles.active : ''} custom-scroll`}>
                <div className={styles.logo}>
                    <Image
                        className={styles.img}
                        src={logoImg}
                        width={122}
                        height={30}
                        alt={'logo'}
                        />
                </div>
                <div className={styles.body}>
                    <div className={styles.list}>
                        <SidebarList>
                            <SidebarItem
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
                                    isSubItem
                                    label='Аккаунт'
                                    link={'/profile/settings/account'}
                                    isActive={pathname === '/profile/settings/account' || pathname?.includes('/profile/settings/account')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='API'
                                    link={'/profile/settings/api'}
                                    isActive={pathname === '/profile/settings/api' || pathname?.includes('/profile/settings/api')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='2FA'
                                    link={'/profile/settings/2fa'}
                                    isActive={pathname === '/profile/settings/2fa' || pathname?.includes('/profile/settings/2fa')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='Telegram-бот'
                                    link={'/profile/settings/telegram-bot'}
                                    isActive={pathname === '/profile/settings/telegram-bot' || pathname?.includes('/profile/settings/telegram-bot')}
                                    />
                            </SidebarItem>
                            <SidebarItem
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
                    <Button
                        onClick={openAddBotModal}
                        style={{minWidth: 45, minHeight: 45}}
                        text='Создать бот'
                        beforeIcon={<AiOutlinePlus/>}
                        variant={'default'}
                        fill
                        />
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;