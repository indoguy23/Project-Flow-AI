import { useMemo, useState } from "react";

import { projects as initialProjects } from "@/constants/projects/projects";

import type { Project } from "../types/project";
import type { ProjectFormData } from "../components/ProjectForm";

const useProjects = () => {
    const [projectList, setProjectList] = useState<Project[]>(initialProjects);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    const createProject = (data: ProjectFormData) => {
        const newProject: Project = {
            id: Date.now(),
            name: data.name,
            description: data.description,
            priority: data.priority,
            status: data.status,
            dueDate: data.dueDate,
            team: data.team,
            progress: 0,
        };

        setProjectList((prev) => [newProject, ...prev]);
    };

    const deleteProject = (id: number) => {
        setProjectList((prev) =>
            prev.filter((project) => project.id !== id)
        );
    };

    const updateProject = (
        id: number,
        data: ProjectFormData
    ) => {
        setProjectList((prev) =>
            prev.map((project) =>
                project.id === id
                    ? {
                        ...project,
                        ...data,
                    }
                    : project
            )
        );
    };

    const getProject = (id: number) =>
        projectList.find((project) => project.id === id);

    const filteredProjects = useMemo(() => {
        return projectList.filter((project) => {
            const matchesSearch = project.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus =
                status === "" || project.status === status;

            const matchesPriority =
                priority === "" || project.priority === priority;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesPriority
            );
        });
    }, [projectList, search, status, priority]);

    return {
        projectList,
        filteredProjects,

        search,
        status,
        priority,

        setSearch,
        setStatus,
        setPriority,

        createProject,
        deleteProject,
        updateProject,
        getProject,
    };
};

export default useProjects;