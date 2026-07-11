export interface Project {
  id: number;
  name: string;
  description: string;
  team: string;
  progress: number;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
}