import Modal from "@/components/ui/Modal/Modal";
import ProjectForm, {
    type ProjectFormData,
} from "./ProjectForm";

interface CreateProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: ProjectFormData) => void;
}

const CreateProjectModal = ({
    isOpen,
    onClose,
    onCreate,
}: CreateProjectModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create Project"
        >
            <ProjectForm
                onCancel={onClose}
                onSubmit={onCreate}
            />
        </Modal>
    );
};

export default CreateProjectModal;