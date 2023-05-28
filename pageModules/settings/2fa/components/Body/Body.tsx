import Enable from "../Enable/Enable";
import Done from "../Done/Done";
import { useState, useEffect } from "react";
import styles from './Body.module.scss';
import { useAppSelector } from "@/hooks/useTypesRedux";


const Body = () => {
    const {userData} = useAppSelector(s => s)
    const [done, setDone] = useState<any>();


    useEffect(() => {
        (userData && userData?.two_factor_enabled) ? setDone(true) : setDone(false)
    }, [userData])

    

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