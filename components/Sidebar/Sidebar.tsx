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

    return (
        <div className={styles.sidebar}>
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
                                        isActive={pathname === '/console/my-bots' || pathname?.includes('console/my-bots')}
                                        />
                                }
                                label='Мои боты'
                                isActive={pathname === '/console/my-bots' || pathname?.includes('console/my-bots')}
                                link={'/console/my-bots'}
                                />
                            <SidebarItem
                                isActive={pathname === '/console/statistics' || pathname?.includes('/console/statistics')}
                                icon={
                                    <IconStats 
                                        size={20}
                                        isActive={pathname === '/console/statistics' || pathname?.includes('/console/statistics')}
                                        />
                                }
                                label='Статистика'
                                link={'/console/statistics'}
                                />
                            <SidebarItem
                                menuIsOpen={settingsOpen}
                                isActive={pathname?.includes('/console/settings/') && !settingsOpen}
                                icon={
                                    <IconSettings
                                        isActive={settingsOpen || (pathname?.includes('/console/settings/') && !settingsOpen)}
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
                                    link={'/console/settings/account'}
                                    isActive={pathname === '/console/settings/account' || pathname?.includes('/console/settings/account')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='API'
                                    link={'/console/settings/api'}
                                    isActive={pathname === '/console/settings/api' || pathname?.includes('/console/settings/api')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='2FA'
                                    link={'/console/settings/2fa'}
                                    isActive={pathname === '/console/settings/2fa' || pathname?.includes('/console/settings/2fa')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='Telegram-бот'
                                    link={'/console/settings/telegram-bot'}
                                    isActive={pathname === '/console/settings/telegram-bot' || pathname?.includes('/console/settings/telegram-bot')}
                                    />
                            </SidebarItem>
                            <SidebarItem
                                icon={
                                    <IconPricing 
                                        isActive={pathname === '/console/balance-pricing' || pathname?.includes('/console/balance-pricing')}
                                        size={20}/>
                                }
                                isActive={pathname === '/console/balance-pricing' || pathname?.includes('/console/balance-pricing')}
                                label='Баланс / Тарифы'
                                link={'/console/balance-pricing'}
                                />
                            <SidebarItem
                                icon={
                                    <IconBase 
                                        isActive={pathname === '/console/guide' || pathname?.includes('/console/guide')}
                                        size={20}/>
                                }
                                label='База знаний'
                                isActive={pathname === '/console/guide' || pathname?.includes('/console/guide')}
                                link={'/console/guide'}
                                />
                            <SidebarItem
                                icon={
                                    <IconPartner 
                                        isActive={pathname === '/console/partner' || pathname?.includes('/console/partner')}
                                        size={20}/>
                                }
                                link={'/console/partner'}
                                isActive={pathname === '/console/partner' || pathname?.includes('/console/partner')}
                                label='Партнерка'

                                />
                            <SidebarItem
                                icon={
                                    <IconContacts 
                                        size={20}
                                        isActive={pathname === '/console/contacts' || pathname?.includes('/console/contacts')}
                                        />
                                }
                                isActive={pathname === '/console/contacts' || pathname?.includes('/console/contacts')}
                                label='Контакты'
                                link={'/console/contacts'}
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