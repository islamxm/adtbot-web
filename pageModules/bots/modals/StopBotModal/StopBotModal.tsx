import { Modal, ModalFuncProps, Row, Col } from "antd";
import {FC} from 'react';
import Button from "@/components/Button/Button";

const StopBotModal:FC<ModalFuncProps> = (props) => {

    return (
        <Modal
            {...props}
            width={375}
            className="modal"
            >
            <Row gutter={[25,25]}>
                <Col span={24} style={{textAlign: 'center'}}>
                Данное действие приведет к остановке бота и ордера буду проданы в рынок
                </Col>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={12}>
                            <Button
                                text="Подтвердить"
                                fill
                                />
                        </Col>
                        <Col span={12}>
                            <Button
                                fill
                                onClick={props.onCancel}
                                text="Отмена"
                                variant={'simple'}
                                />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    )
}

export default StopBotModal;