import { action, makeObservable, observable } from 'mobx';

class ModalStore {
    @observable input = '';

    constructor() {
        makeObservable(this);
    }

    @action setInput(input) {
        this.input = input;
    }
}

export const modalStore = new ModalStore();
