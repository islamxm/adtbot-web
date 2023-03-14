import styles from './icon.module.scss';
import { iconType } from './types';


const SortIcon = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
           <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.527 5.6737H2.25901C0.68709 5.6737 0.041225 4.75786 0.829561 3.63937L1.46593 2.73912L2.1023 1.83887C2.89063 0.720377 4.17761 0.720377 4.96595 1.83887L5.60232 2.73912L6.23868 3.63937C7.02702 4.75786 6.38115 5.6737 4.80923 5.6737H3.527Z" stroke={isActive ? activeColor : color} stroke-width="0.643035" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.527 8.32642H2.25901C0.68709 8.32642 0.041225 9.24226 0.829561 10.3608L1.46593 11.261L2.1023 12.1613C2.89063 13.2797 4.17761 13.2797 4.96595 12.1613L5.60232 11.261L6.23868 10.3608C7.02702 9.24226 6.38115 8.32642 4.80923 8.32642H3.527Z" stroke={isActive ? activeColor : color} stroke-width="0.643035" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


        </div>
    )
}

export default SortIcon;