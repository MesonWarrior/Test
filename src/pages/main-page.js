import { useState } from 'react';
import { SelectContext } from '../contexts/select-context';
import { TreeNode } from '../coponents/tree-node/tree-node';
import { treeStore } from '../stores/tree-store';
import { observer } from 'mobx-react-lite';
import s from './styles.module.scss';

export const MainPage = observer(() => {
    const [select, setSelect] = useState(null);

    return (
        <div className={s.main}>
            <SelectContext.Provider value={{ select, setSelect }}>
                <>
                    {treeStore.tree && (
                        <TreeNode
                            name="Root"
                            id={treeStore.tree.id}
                            isRoot={true}
                        >
                            {treeStore.tree.children}
                        </TreeNode>
                    )}
                </>
            </SelectContext.Provider>
        </div>
    );
});
