import SectionHeader from '../SectionHeader';
import FeaturedSkills from './FeaturedSkills';
import SkillsGrid from './SkillsGrid';

export default function SkillsSection() {
    return (
        <div className="relative flex justify-center">
            <div id="skills" className="flex max-w-7xl flex-col gap-10 pt-32">
                <SectionHeader
                    titleFirstWord="My"
                    titleSecondWord="Skills"
                    subTitle="Here are the technologies I've worked with"
                />
                <FeaturedSkills />
                <SkillsGrid />
            </div>
        </div>
    );
}
