import s from './styles.module.scss';
import { IconButton } from '../icon-button/icon-button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { treeStore } from '../../stores/tree-store';
import { useModalContext } from '../../contexts/modal-context';
import { observer } from 'mobx-react-lite';
import { modalStore } from '../../stores/modal-store';

const ModalInput = observer(() => {
    const changeHandler = (e) => {
        modalStore.setInput(e.target.value);
    };

    return (
        <div className={s.modalInput}>
            <input
                value={modalStore.input}
                onChange={changeHandler}
                className={s.input}
            />
        </div>
    );
});

export const Controls = observer(({ id, name, isRoot = false }) => {
    const { openModal } = useModalContext();

    const createHandler = () => {
        modalStore.setInput('');
        openModal({
            actionName: 'Add',
            action: () => treeStore.createNode(id, modalStore.input),
            children: <ModalInput />,
        });
    };

    const renameHandler = () => {
        modalStore.setInput(name);
        openModal({
            actionName: 'Rename',
            action: () => treeStore.renameNode(id, modalStore.input),
            children: <ModalInput />,
        });
    };

    const deleteHandler = () => {
        openModal({
            actionName: 'Delete',
            action: () => treeStore.deleteNode(id),
            children: <p>Do you want to delete {name}?</p>,
        });
    };

    return (
        <div className={s.controls}>
            <IconButton icon={<AddIcon />} onClick={createHandler} />
            {!isRoot && (
                <>
                    <IconButton icon={<EditIcon />} onClick={renameHandler} />
                    <IconButton icon={<DeleteIcon />} onClick={deleteHandler} />
                </>
            )}
        </div>
    );
});
