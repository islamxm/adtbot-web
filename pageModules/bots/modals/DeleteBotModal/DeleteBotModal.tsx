import { Modal, ModalFuncProps, Row, Col } from "antd";
import {FC} from 'react';
import Button from "@/components/Button/Button";

const DeleteBotModal:FC<ModalFuncProps> = (props) => {

    return (
        <Modal
            {...props}
            className="modal"
            width={375}
            >

            <Row gutter={[25,25]}>
                <Col span={24} style={{textAlign: 'center'}}>
                Данное действие приведет к удалению бота.
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
                                text="Отмена"
                                fill
                                variant={'simple'}
                                onClick={props.onCancel}
                                />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Modal>
    )
}

export default DeleteBotModal;