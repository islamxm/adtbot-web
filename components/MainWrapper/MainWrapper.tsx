import styles from './MainWrapper.module.scss';
import { useAppSelector } from '@/hooks/useTypesRedux';
import {useEffect} from 'react';
import ApiService from '@/service/apiService';

const service = new ApiService()

const MainWrapper = ({
    children
}: {
    children?: React.ReactNode
}) => {
    const {tokens: {access}} = useAppSelector(s => s)


    useEffect(() => {
        if(access) {
            service.getUserData(access).then(res => {
                console.log(res)
            })
        }
    }, [access])



    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )

}


export default MainWrapper;