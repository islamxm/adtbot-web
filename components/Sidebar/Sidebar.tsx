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
                                        isActive={pathname === '/account/bots' || pathname?.includes('account/bots')}
                                        />
                                }
                                label='Мои боты'
                                isActive={pathname === '/account/bots' || pathname?.includes('/account/bots')}
                                link={'/account/bots'}
                                />
                            <SidebarItem
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
                                    isSubItem
                                    label='Аккаунт'
                                    link={'/account/settings/account'}
                                    isActive={pathname === '/account/settings/account' || pathname?.includes('/account/settings/account')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='API'
                                    link={'/account/settings/api'}
                                    isActive={pathname === '/account/settings/api' || pathname?.includes('/account/settings/api')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='2FA'
                                    link={'/account/settings/2fa'}
                                    isActive={pathname === '/account/settings/2fa' || pathname?.includes('/account/settings/2fa')}
                                    />
                                <SidebarItem
                                    isSubItem
                                    label='Telegram-бот'
                                    link={'/account/settings/telegram-bot'}
                                    isActive={pathname === '/account/settings/telegram-bot' || pathname?.includes('/account/settings/telegram-bot')}
                                    />
                            </SidebarItem>
                            <SidebarItem
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