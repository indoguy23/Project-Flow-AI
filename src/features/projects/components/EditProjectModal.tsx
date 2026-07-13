import Modal from "@/components/ui/Modal/Modal";
import type { ProjectFormData } from "./ProjectForm";
import ProjectForm from "./ProjectForm";

interface EditProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectFormData | null;
    onUpdate: (data: ProjectFormData) => void;
};

const EditProjectModal = ({ isOpen, onClose, project, onUpdate }: EditProjectModalProps) => {
    if (!project) return null;
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit project">
            <ProjectForm initialValues={project} submitText="Update Project" onCancel={onClose} onSubmit={onUpdate} />
        </Modal>
    )
}

export default EditProjectModal