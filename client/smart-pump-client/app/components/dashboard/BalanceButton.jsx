import Button from "../Button";

const BalanceButton = ({ onClick }) => (
    <Button onClick={onClick} className="mr-2 w-auto px-4 cursor-pointer">
        BALANCE
    </Button>
);

export default BalanceButton;