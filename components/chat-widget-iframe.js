import React, {
    useImperativeHandle,
    forwardRef,
} from 'react'
import { Modal } from 'antd';
import { useGlobalState } from '@/hooks/global';

const chatWidgetIframe = forwardRef((props, ref) => {
    const [{ chatWidgetVisible }, dispatch] = useGlobalState();
    useImperativeHandle(ref, () => ({
        onOpen: () => {
            dispatch({
                type: 'set_chatWidgetVisible',
                payload: true,
            })
        }
    }))
    const onCancel = () => {
        dispatch({
            type: 'set_chatWidgetVisible',
            payload: false,
        })
    }

    return(<div>
        <Modal
            className={"chatWidgetModalContain"}
            title=""
            wrapClassName="chatWidgetModal"
            open={chatWidgetVisible}
            footer={null}
            onCancel={onCancel}
            destroyOnClose={true}
        >
            <div style={{ width: '100%', height: '80vh' }}>
                <iframe src='https://tawk.to/chat/648d92aacc26a871b0231d93/1h34g9rb3' width="100%" height="100%"/>
            </div>
        </Modal>
    </div>)
})

export default chatWidgetIframe
