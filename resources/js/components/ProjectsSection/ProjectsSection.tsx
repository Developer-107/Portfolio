import SectionHeader from '../SectionHeader';
import ProjectsContainer from './ProjectsContainer';

export default function ProjectsSection() {
    return (
        <div className="relative flex min-h-screen justify-center">
            <div id="projects" className="flex max-w-7xl flex-col gap-10 pt-32">
                <SectionHeader
                    titleFirstWord="My"
                    titleSecondWord="Projects"
                    subTitle="Some of the projects I’ve worked on and built from scratch."
                />
                <ProjectsContainer />
            </div>
        </div>
    );
}
