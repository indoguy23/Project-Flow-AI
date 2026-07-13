import Button from "../Button/Button";
import Modal from "../Modal/Modal";


interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
};

const ConfirmDialog = ({ isOpen, title, message, onCancel, onConfirm }: ConfirmDialogProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onCancel} title={title} >
            <p className="text-slate-700">{message}</p>
            <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                <Button className="bg-red-600 hover:bg-red-700">Delete</Button>
            </div>
        </Modal>


    )
}

export default ConfirmDialog