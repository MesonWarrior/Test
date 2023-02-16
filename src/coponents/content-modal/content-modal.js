import { Modal } from '../modal/modal';
import s from '../modal/styles.module.scss';
import { useModalContext } from '../../contexts/modal-context';

export const ContentModal = ({ action, actionName, children }) => {
    const { closeModal } = useModalContext();

    const closeHandler = () => {
        closeModal();
    };

    const actionHandler = (e) => {
        e.preventDefault();
        action?.();
        closeModal();
    };

    const modalHandler = (e) => {
        e.stopPropagation();
    };

    return (
        <Modal>
            <div className={s.container} onClick={modalHandler}>
                <h6 className={s.title}>{actionName}</h6>
                <form onSubmit={actionHandler}>
                    {children}
                    <div className={s.buttonsContainer}>
                        <button onClick={closeHandler}>Cancel</button>
                        <button className={s.action} type="submit">
                            {actionName}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
