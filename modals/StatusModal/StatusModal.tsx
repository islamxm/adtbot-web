import { statusModalPropsTypes, statusTypes } from "./types";
import { Modal } from "antd";
import styles from './StatusModal.module.scss';
import {FC} from 'react';
import {Row, Col} from "antd";
import Button from "@/components/Button/Button";
import {BsCheckLg} from 'react-icons/bs';
import IconWarning from "@/icons/IconWarning";

const StatusModal:FC<statusModalPropsTypes> = ({
    width = 325,
    open,
    onCancel,
    status,
    errorIcon = <IconWarning color="#fff" size={40}/>,
    successIcon = <BsCheckLg size={40}/>,
    defaultIcon,
    title,
    text,
    buttonText = 'Продолжить'
}) => {

    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }

    

    const switchStatus = (status: statusTypes) => {
        switch(status) {
            case 'error':
                return {
                    className: styles.error,
                    icon: errorIcon
                }
            case 'success':
                return {
                    className: styles.success,
                    icon: successIcon
                }
            default:
                return {
                    className: styles.default,
                    icon: defaultIcon
                }
        }
    }

    return (
        <Modal
            centered
            width={width}
            open={open}
            onCancel={closeHandle}
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[35,35]}>
                {
                    status ? (
                        <Col span={24}>
                            <div className={`${styles.icon} ${switchStatus(status)?.className}`}>
                                {switchStatus(status)?.icon}
                            </div>
                        </Col>
                    ) : null
                }
                {
                    title ? (
                        <Col span={24}>
                            <h3 className={`${styles.title} heading_1`}>{title}</h3>
                        </Col>
                    ) : null
                }
                {
                    text ? (
                        <Col span={24}>
                            <div className={styles.text}>
                                <p>{text}</p>
                            </div>
                        </Col>
                    ) : null
                }
                <Col span={24}>
                    <Button
                        variant={'default'}
                        text={buttonText}
                        fill
                        onClick={closeHandle}
                        />
                </Col>
            </Row>
        </Modal>
    )
}

export default StatusModal;