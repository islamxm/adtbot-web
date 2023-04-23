import styles from './MainWrapper.module.scss';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import {useEffect} from 'react';
import ApiService from '@/service/apiService';
import { updateUserData } from '@/store/actions';

const service = new ApiService()

const MainWrapper = ({
    children
}: {
    children?: React.ReactNode
}) => {
    const {tokens: {access}} = useAppSelector(s => s)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(access && dispatch) {
            service.getUserData(access).then(res => {
                if(res) {
                    dispatch(updateUserData(res))
                }
            })
        }
    }, [access, dispatch])



    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )

}


export default MainWrapper;