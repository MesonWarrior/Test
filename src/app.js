import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from './pages/main-page';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { ContentModal } from './components/content-modal/content-modal';
import { treeStore } from './stores/tree-store';
import { Modal } from './components/modal/modal';
import Spinner from './assets/spinner.gif';
import { ModalContext } from './contexts/modal-context';
import s from './app.module.scss';
import { observer } from 'mobx-react-lite';

export const App = observer(() => {
    const [modal, setModal] = useState(null);

    const closeModal = () => {
        setModal(null);
    };

    return (
        <div className={s.app}>
            <ModalContext.Provider
                value={{ modal, openModal: setModal, closeModal }}
            >
                <>
                    <MainPage />
                    <ToastContainer />
                    {modal && <ContentModal {...modal} />}
                    {treeStore.load && (
                        <Modal>
                            <img
                                className={s.spinner}
                                src={Spinner}
                                alt="spinner"
                            />
                        </Modal>
                    )}
                </>
            </ModalContext.Provider>
        </div>
    );
});
