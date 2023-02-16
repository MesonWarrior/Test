import { makeObservable, observable, runInAction } from 'mobx';
import { createNode, deleteNode, getTree, renameNode } from '../api/tree';
import { toast } from 'react-toastify';

class TreeStore {
    @observable tree;
    @observable load = false;

    constructor() {
        makeObservable(this);
        this.loadTree();
    }

    request =
        (method, errorMessage, reloadTree = true) =>
        async (...args) => {
            runInAction(() => (this.load = true));
            try {
                const result = await method(...args);
                if (reloadTree) {
                    await this.loadTree();
                }
                return result;
            } catch (e) {
                toast.error(`${errorMessage}: ${e.message}`);
            } finally {
                runInAction(() => (this.load = false));
            }
        };

    async loadTree() {
        const tree = await this.request(
            getTree,
            'An error occurred while loading the tree',
            false
        )();
        runInAction(() => (this.tree = tree));
    }

    createNode(id, name) {
        return this.request(
            createNode,
            'An error occurred while creating the node'
        )(id, name);
    }

    renameNode(id, name) {
        return this.request(
            renameNode,
            'An error occurred while renaming the node'
        )(id, name);
    }

    deleteNode(id) {
        return this.request(
            deleteNode,
            'An error occurred while deleting the node'
        )(id);
    }
}

export const treeStore = new TreeStore();
