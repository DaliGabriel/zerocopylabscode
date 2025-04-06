import Modal from '../Modal';

const BalanceModal = ({ balance, onClose }) => {
    return (
        <Modal title="Your Balance:" onClose={onClose}>
            <p className="text-center text-xl font-bold text-gray-700 dark:text-gray-100">
                {balance}
            </p>
        </Modal>
    );
};

export default BalanceModal;