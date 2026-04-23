import HeadTitleSEO from '@/components/HeadTitleSEO';
import MainLayout from '@/Layouts/main-layout';
import HomeSection from '@/components/HomeSection/HomeSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function Home() {
    return (
        <MainLayout>
            <HeadTitleSEO title="Home" />
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </MainLayout>
    );
}
