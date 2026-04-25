import SectionHeader from '../SectionHeader';
import AvatarSvg from './AvatarSvg';
import WhoAmI from './WhoAmI';

export default function AboutSection() {
    return (
        <div className="relative flex min-h-screen justify-center px-8 lg:px-0">
            <div
                id="about"
                className="flex max-w-7xl flex-col gap-12 pt-32 lg:gap-10"
            >
                <SectionHeader
                    titleFirstWord="About"
                    titleSecondWord="me"
                    subTitle="Get to know me and my journey as a full-stack developer"
                />
                <div className="fontSergoe flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-7 lg:px-20">
                    <AvatarSvg />
                    <WhoAmI />
                </div>
            </div>
        </div>
    );
}
