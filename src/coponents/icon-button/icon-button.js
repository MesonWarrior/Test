import s from './styles.module.scss';

export const IconButton = ({ onClick, icon, children }) => {
    const clickHandler = (e) => {
        e.stopPropagation();
        onClick?.();
    };

    return (
        <button onClick={clickHandler} className={s.button}>
            {icon} {children}
        </button>
    );
};
