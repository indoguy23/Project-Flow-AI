import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 z-50 flex item-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                        {title}
                    </h2>

                    <button onClick={onClose} className="rounded-lg p-2 transition hover:bg-slate-100">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal