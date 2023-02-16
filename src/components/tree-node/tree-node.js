import { useState } from 'react';
import classNames from 'classnames';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Controls } from './controls';
import s from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import { treeStore } from '../../stores/tree-store';

export const TreeNode = observer(({ id, name, children, isRoot = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        treeStore.setSelected(id);
        setIsOpen((value) => !value);
    };

    const isHasChildren = !!children?.length;

    const isSelected = id === treeStore.selected;

    return (
        <div className={s.node}>
            <div
                className={classNames(s.content, {
                    [s.selected]: isSelected,
                })}
                onClick={toggleHandler}
            >
                {isHasChildren && (
                    <div className={s.iconContainer}>
                        <div
                            className={classNames(s.icon, {
                                [s.isOpen]: isOpen,
                            })}
                        >
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                )}
                <p className={s.name}>{name}</p>
                {isSelected && <Controls id={id} name={name} isRoot={isRoot} />}
            </div>
            <div className={s.listContainer}>
                {isOpen && (
                    <div className={s.list}>
                        {isHasChildren &&
                            children.map((child) => (
                                <TreeNode key={id} {...child} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
});
