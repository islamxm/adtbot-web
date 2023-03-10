import styles from './Button.module.scss';
import { buttonPropsTypes, buttonVariants } from './types';
import {FC} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const Button:FC<buttonPropsTypes> = ({
    onClick,
    beforeIcon,
    afterIcon,
    text,
    disabled,
    variant = 'default',
    style,
    fill,
    load
}) => {

    const switchVariant = (variant: buttonVariants | undefined) => {
        switch(variant) {
            case 'default':
                return styles.default
            case 'blue':
                return styles.blue
            case 'simple':
                return styles.simple
            default:
                return ''
        }
    }

    const textMargin = (before: React.ReactNode, after: React.ReactNode) => {
        if(before && !after) {
            return styles.ml
        }
        if(!before && after) {
            return styles.mr
        }
        if(before && after) {
            return styles.mm
        }
        if(!before && !after) {
            return ''
        }
    }

    return (
        <button 
            disabled={disabled}
            onClick={onClick}
            className={`${styles.button} ${switchVariant(variant)} ${fill ? styles.fill : ''} ${load ? styles.load : ''}`}
            style={style}
            >
            <div className={styles.loader}>
                <LoadingOutlined/>
            </div>
            {
                beforeIcon ? (
                    <div className={`${styles.before} ${styles.icon}`}>
                        {beforeIcon}
                    </div>
                ) : null            
            }
            {
                text ? (
                    <div className={`${styles.text} ${textMargin(beforeIcon, afterIcon)}`}>{text}</div>
                ) : null
            }
            {
                afterIcon ? (
                    <div className={`${styles.after} ${styles.icon}`}>
                        {afterIcon}
                    </div>
                ) : null
            }
        </button>
    )
}

export default Button;