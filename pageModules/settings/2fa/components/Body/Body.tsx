import Enable from "../Enable/Enable";
import Done from "../Done/Done";
import { useState } from "react";
import styles from './Body.module.scss';


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