import styles from './Body.module.scss';
import { useEffect, useState } from 'react';
import Done from '../Done/Done';
import Enable from '../Enable/Enable';
import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';

const service = new ApiService()

const Body = () => {
    const {tokens: {access}} = useAppSelector(s => s)

    const [done, setDone] = useState<any>();
    
    useEffect(() => {
        if(access) {
            service.getTgKey(access).then(res => {
                if(res) {
                    setDone(true)
                } else {
                    setDone(false)
                }
            })
        }
    }, [access])

    return (
        <div className={styles.wrapper}>
            {
                done === true && <Done setDone={setDone}/>
            }
            {
                done === false && <Enable setDone={setDone}/> 
            }

        </div>
    )
}

export default Body;