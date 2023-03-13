import styles from './Body.module.scss';
import { useState } from 'react';
import Done from '../Done/Done';
import Enable from '../Enable/Enable';
const Body = () => {

    const [done, setDone] = useState(false);
    

    return (
        <div className={styles.wrapper}>
            {
                done ? <Done setDone={setDone}/> : <Enable setDone={setDone}/> 
            }
        </div>
    )
}

export default Body;