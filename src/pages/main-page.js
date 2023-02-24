import { TreeNode } from '../components/tree-node/tree-node';
import { treeStore } from '../stores/tree-store';
import { observer } from 'mobx-react-lite';
import s from './styles.module.scss';

export const MainPage = observer(() => {
    return (
        <div className={s.main}>
            {treeStore.tree && (
                <TreeNode name="Root" id={treeStore.tree.id} isRoot>
                    {treeStore.tree.children}
                </TreeNode>
            )}
        </div>
    );
});
