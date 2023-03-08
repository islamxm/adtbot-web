import styles from './icon.module.scss';
import { iconType } from './types';


const IconBase = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4631 10.4974C9.97544 10.4835 9.50129 10.334 9.09381 10.0658L8.11149 9.47041C8.07612 9.45567 8.03818 9.44808 7.99986 9.44808C7.96154 9.44808 7.9236 9.45567 7.88823 9.47041L6.90591 10.0658C6.58965 10.3009 6.2149 10.4446 5.82253 10.4814C5.43016 10.5181 5.03523 10.4464 4.68081 10.2741C4.35763 10.0645 4.09756 9.77098 3.92845 9.42489C3.75934 9.07881 3.68756 8.69324 3.72082 8.30948V3.06301C3.72082 1.2472 4.71058 0.25 6.5115 0.25H9.48822C11.2891 0.25 12.2789 1.2472 12.2789 3.06301V8.30948C12.3139 8.69344 12.2429 9.07964 12.0736 9.42605C11.9044 9.77245 11.6433 10.0658 11.3189 10.2741C11.0581 10.4222 10.763 10.4992 10.4631 10.4974ZM7.99986 8.33181C8.2423 8.32906 8.48112 8.39069 8.69195 8.51041L9.67427 9.10576C9.82545 9.22774 10.0051 9.30946 10.1963 9.34329C10.3876 9.37712 10.5844 9.36197 10.7682 9.29924C10.911 9.17871 11.0213 9.02424 11.0889 8.85001C11.1565 8.67578 11.1793 8.48737 11.1552 8.30204V3.06301C11.1552 1.87232 10.6566 1.36627 9.48078 1.36627H6.50406C5.32825 1.36627 4.82965 1.87232 4.82965 3.06301V8.30948C4.80552 8.49481 4.8283 8.68322 4.89591 8.85745C4.96353 9.03168 5.0738 9.18615 5.21662 9.30669C5.40047 9.36941 5.59721 9.38456 5.7885 9.35073C5.97978 9.3169 6.15939 9.23518 6.31057 9.1132L7.29289 8.51785C7.50782 8.39411 7.75186 8.32989 7.99986 8.33181Z" fill={isActive ? activeColor : color}/>
            <path d="M10.4631 10.4974C9.97544 10.4835 9.50129 10.334 9.09381 10.0658L8.11149 9.47041C8.07612 9.45567 8.03818 9.44808 7.99986 9.44808C7.96154 9.44808 7.9236 9.45567 7.88823 9.47041L6.90591 10.0658C6.58965 10.3009 6.2149 10.4446 5.82253 10.4814C5.43016 10.5181 5.03523 10.4464 4.68081 10.2741C4.35763 10.0645 4.09756 9.77098 3.92845 9.42489C3.75934 9.07881 3.68756 8.69324 3.72082 8.30948V3.06301C3.72082 1.2472 4.71058 0.25 6.5115 0.25H9.48822C11.2891 0.25 12.2789 1.2472 12.2789 3.06301V8.30948C12.3139 8.69344 12.2429 9.07964 12.0736 9.42605C11.9044 9.77245 11.6433 10.0658 11.3189 10.2741C11.0581 10.4222 10.763 10.4992 10.4631 10.4974ZM7.99986 8.33181C8.2423 8.32906 8.48112 8.39069 8.69195 8.51041L9.67427 9.10576C9.82545 9.22774 10.0051 9.30946 10.1963 9.34329C10.3876 9.37712 10.5844 9.36197 10.7682 9.29924C10.911 9.17871 11.0213 9.02424 11.0889 8.85001C11.1565 8.67578 11.1793 8.48737 11.1552 8.30204V3.06301C11.1552 1.87232 10.6566 1.36627 9.48078 1.36627H6.50406C5.32825 1.36627 4.82965 1.87232 4.82965 3.06301V8.30948C4.80552 8.49481 4.8283 8.68322 4.89591 8.85745C4.96353 9.03168 5.0738 9.18615 5.21662 9.30669C5.40047 9.36941 5.59721 9.38456 5.7885 9.35073C5.97978 9.3169 6.15939 9.23518 6.31057 9.1132L7.29289 8.51785C7.50782 8.39411 7.75186 8.32989 7.99986 8.33181Z" fill={isActive ? activeColor : color}/>
            <path d="M10.2325 16.25H5.76741C1.7265 16.25 0 14.5101 0 10.4305V8.17563C0 4.70775 1.25022 2.95148 4.04835 2.48265C4.12169 2.4685 4.19713 2.46921 4.27019 2.48475C4.34325 2.50029 4.41245 2.53034 4.47369 2.57311C4.53492 2.61589 4.58695 2.67052 4.62669 2.73377C4.66642 2.79702 4.69306 2.8676 4.70501 2.94133C4.71697 3.01507 4.714 3.09045 4.69629 3.16302C4.67858 3.23558 4.64648 3.30386 4.6019 3.36379C4.55732 3.42372 4.50117 3.4741 4.43676 3.51193C4.37235 3.54976 4.30101 3.57428 4.22695 3.58403C1.98696 3.95612 1.10883 5.24356 1.10883 8.17563V10.4305C1.10883 13.8612 2.3665 15.1337 5.75996 15.1337H10.2251C13.6185 15.1337 14.8762 13.8612 14.8762 10.4305V8.17563C14.8762 5.19891 13.9683 3.91147 11.6316 3.56171C11.5592 3.55096 11.4897 3.52607 11.427 3.48846C11.3643 3.45086 11.3097 3.40127 11.2661 3.34253C11.2226 3.28379 11.1911 3.21705 11.1733 3.14613C11.1556 3.0752 11.152 3.00147 11.1627 2.92915C11.1735 2.85684 11.1984 2.78734 11.236 2.72464C11.2736 2.66194 11.3232 2.60727 11.3819 2.56373C11.4406 2.5202 11.5074 2.48866 11.5783 2.47091C11.6492 2.45317 11.723 2.44957 11.7953 2.46032C14.6976 2.89195 15.9925 4.64821 15.9925 8.17563V10.4305C15.9999 14.5101 14.2734 16.25 10.2325 16.25Z" fill={isActive ? activeColor : color}/>
            <path d="M10.2325 16.25H5.76741C1.7265 16.25 0 14.5101 0 10.4305V8.17563C0 4.70775 1.25022 2.95148 4.04835 2.48265C4.12169 2.4685 4.19713 2.46921 4.27019 2.48475C4.34325 2.50029 4.41245 2.53034 4.47369 2.57311C4.53492 2.61589 4.58695 2.67052 4.62669 2.73377C4.66642 2.79702 4.69306 2.8676 4.70501 2.94133C4.71697 3.01507 4.714 3.09045 4.69629 3.16302C4.67858 3.23558 4.64648 3.30386 4.6019 3.36379C4.55732 3.42372 4.50117 3.4741 4.43676 3.51193C4.37235 3.54976 4.30101 3.57428 4.22695 3.58403C1.98696 3.95612 1.10883 5.24356 1.10883 8.17563V10.4305C1.10883 13.8612 2.3665 15.1337 5.75996 15.1337H10.2251C13.6185 15.1337 14.8762 13.8612 14.8762 10.4305V8.17563C14.8762 5.19891 13.9683 3.91147 11.6316 3.56171C11.5592 3.55096 11.4897 3.52607 11.427 3.48846C11.3643 3.45086 11.3097 3.40127 11.2661 3.34253C11.2226 3.28379 11.1911 3.21705 11.1733 3.14613C11.1556 3.0752 11.152 3.00147 11.1627 2.92915C11.1735 2.85684 11.1984 2.78734 11.236 2.72464C11.2736 2.66194 11.3232 2.60727 11.3819 2.56373C11.4406 2.5202 11.5074 2.48866 11.5783 2.47091C11.6492 2.45317 11.723 2.44957 11.7953 2.46032C14.6976 2.89195 15.9925 4.64821 15.9925 8.17563V10.4305C15.9999 14.5101 14.2734 16.25 10.2325 16.25Z" fill={isActive ? activeColor : color}/>
            </svg>
        </div>
    )
}

export default IconBase;