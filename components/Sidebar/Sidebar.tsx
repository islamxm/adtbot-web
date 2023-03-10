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
    const sidebarBodyRef = useRef<HTMLDivElement>(null)
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [addBotModal, setAddBotModal] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)

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

    // useEffect(() => {
    //     if(settingsOpen) {
    //         console.log(sidebarBodyRef?.current?.scrollHeight)
    //     }
    // }, [sidebarBodyRef?.current?.scrollHeight, settingsOpen])

    return (
        <div className={`${styles.sidebar} ${isHidden ? styles.hidden : ''}`}>
            <AddBotModal
                open={addBotModal}
                onCancel={closeAddBotModal}
                />
            <button  
                onClick={toggleSidebar}
                className={styles.toggle}>
                <FiChevronLeft/>
            </button>
            <div ref={sidebarBodyRef} className={`${styles.wrapper}  custom-scroll`}>
                
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
                                label='?????? ????????'
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
                                label='????????????????????'
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
                                label='??????????????????'
                            >
                                <SidebarItem
                                    isParentHidden={isHidden}
                                    isSubItem
                                    label='??????????????'
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
                                    label='Telegram-??????'
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
                                label='???????????? / ????????????'
                                link={'/profile/billing'}
                                />
                            <SidebarItem
                                isParentHidden={isHidden}
                                icon={
                                    <IconBase 
                                        isActive={pathname === '/profile/guide' || pathname?.includes('/profile/guide')}
                                        size={20}/>
                                }
                                label='???????? ????????????'
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
                                label='??????????????????'

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
                                label='????????????????'
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
                                label='??????????'
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
                        rounded={isHidden}
                        text={isHidden ? '' : '?????????????? ??????'}
                        beforeIcon={<AiOutlinePlus/>}
                        variant={'default'}
                        fill={!isHidden}
                        />
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;