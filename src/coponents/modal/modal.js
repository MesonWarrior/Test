import s from './styles.module.scss';

export const Modal = ({ closeModal, children }) => {
    return (
        <div className={s.modal} onClick={closeModal}>
            {children}
        </div>
    );
};
