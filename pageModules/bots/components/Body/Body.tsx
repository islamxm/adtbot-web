import styles from './Body.module.scss';
import TableHead from '@/components/TableHead/TableHead';
import { mock } from './mock';
import Image from 'next/image';
import TableRow from '@/components/TableRow/TableRow';
import StopBotModal from '../../modals/StopBotModal/StopBotModal';
import DeleteBotModal from '../../modals/DeleteBotModal/DeleteBotModal';

const Body = () => {

    


    return (
        <div className={styles.wrapper}>
            <StopBotModal/>
            <DeleteBotModal/>
            <div className='table'>
                <div className="table-top">

                </div>
                <div className="table-main">
                    <table className="table-wrapper">
                        <TableHead list={mock?.head}/>
                        <tbody>
                            {
                                mock?.body?.map((list, index) => (
                                    <TableRow list={list} key={index}/>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="table-bottom">

                </div>
            </div>
        </div>
    )
}

export default Body;