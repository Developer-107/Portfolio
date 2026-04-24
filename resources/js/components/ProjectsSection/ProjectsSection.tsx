import { Paginated, Project } from '@/types/GlobalTypes';
import SectionHeader from '../SectionHeader';
import ProjectsContainer from './ProjectsContainer';

export default function ProjectsSection({
    projectsPaginated,
}: {
    projectsPaginated: Paginated<Project>;
}) {
    return (
        <div className="relative flex min-h-screen justify-center">
            <div
                id="projects"
                className="flex w-full max-w-7xl flex-col gap-10 pt-32"
            >
                <SectionHeader
                    titleFirstWord="My"
                    titleSecondWord="Projects"
                    subTitle="Some of the projects I’ve worked on and built from scratch"
                />
                <ProjectsContainer projectsPaginated={projectsPaginated} />
            </div>
        </div>
    );
}
