import { Modal } from '../modal/modal';
import { useModalContext } from '../../contexts/modal-context';
import s from './styles.module.scss';

export const ContentModal = ({ action, actionName, children }) => {
    const { closeModal } = useModalContext();

    const actionHandler = (e) => {
        e.preventDefault();
        action?.();
        closeModal();
    };

    const modalHandler = (e) => {
        e.stopPropagation();
    };

    return (
        <Modal closeModal={closeModal}>
            <div className={s.container} onClick={modalHandler}>
                <h6 className={s.title}>{actionName}</h6>
                <form onSubmit={actionHandler}>
                    {children}
                    <div className={s.buttonsContainer}>
                        <button onClick={closeModal}>Cancel</button>
                        <button className={s.action} type="submit">
                            {actionName}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
