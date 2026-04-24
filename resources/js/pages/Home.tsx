import HeadTitleSEO from '@/components/HeadTitleSEO';
import MainLayout from '@/Layouts/main-layout';
import HomeSection from '@/components/HomeSection/HomeSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import { Paginated, Project } from '@/types/GlobalTypes';
import ContactMe from '@/components/ContactMe/ContactMe';

export default function Home({ projectsPaginated } : { projectsPaginated : Paginated<Project>}) {
    return (
        <MainLayout>
            <HeadTitleSEO title="Home" />
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection projectsPaginated={projectsPaginated} />
            <ContactMe />
        </MainLayout>
    );
}
