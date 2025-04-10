import Button from '../Button';

const EditButton = ({ onClick }) => (
    <Button onClick={onClick} className="w-auto px-4 cursor-pointer">
        EDIT
    </Button>
);

export default EditButton;
