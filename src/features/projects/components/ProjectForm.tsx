import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

export interface ProjectFormData {
  name: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
  team: string;
}

interface ProjectFormProps {
  initialValues?: ProjectFormData;
  submitText?: string;
  onCancel: () => void;
  onSubmit: (data: ProjectFormData) => void;
}

const ProjectForm = ({
  initialValues,
  submitText,
  onCancel,
  onSubmit,
}: ProjectFormProps) => {

  const [form, setForm] = useState<ProjectFormData>(
    initialValues ?? {
      name: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
      team: "",
    });

  const handleChange = (
    key: keyof ProjectFormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <Input
        label="Project Name"
        value={form.name}
        onChange={(e) =>
          handleChange("name", e.target.value)
        }
      />

      <div>

        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          value={form.description}
          onChange={(e) =>
            handleChange("description", e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3"
        />

      </div>

      <div className="grid grid-cols-2 gap-4">

        <select
          value={form.priority}
          onChange={(e) =>
            handleChange(
              "priority",
              e.target.value as ProjectFormData["priority"]
            )
          }
          className="rounded-xl border border-slate-300 p-3"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={form.status}
          onChange={(e) =>
            handleChange(
              "status",
              e.target.value as ProjectFormData["status"]
            )
          }
          className="rounded-xl border border-slate-300 p-3"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      </div>

      <Input
        type="date"
        label="Due Date"
        value={form.dueDate}
        onChange={(e) =>
          handleChange("dueDate", e.target.value)
        }
      />

      <Input
        label="Team"
        value={form.team}
        onChange={(e) =>
          handleChange("team", e.target.value)
        }
      />

      <div className="flex justify-end gap-3">

        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button type="submit">
          {submitText}
        </Button>

      </div>

    </form>
  );
};

export default ProjectForm;