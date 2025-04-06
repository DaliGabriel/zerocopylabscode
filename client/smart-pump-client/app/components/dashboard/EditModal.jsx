import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';

const EditModal = ({ formData, setFormData, onSubmit, onClose }) => {
    return (
        <Modal title="Edit Details" onClose={onClose}>
            <form onSubmit={onSubmit} className="space-y-4">
                <Input
                    id="first-name"
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value={formData.name.first}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            name: { ...prev.name, first: e.target.value },
                        }))
                    }
                    required
                />
                <Input
                    id="last-name"
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={formData.name.last}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            name: { ...prev.name, last: e.target.value },
                        }))
                    }
                    required
                />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                    required
                />
                <Input
                    id="phone"
                    label="Phone"
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                        }))
                    }
                    required
                />
                <Input
                    id="address"
                    label="Address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            address: e.target.value,
                        }))
                    }
                    required
                />
                <Button
                    type="submit"
                    className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                    Save Changes
                </Button>
            </form>
        </Modal>
    );
};

export default EditModal;