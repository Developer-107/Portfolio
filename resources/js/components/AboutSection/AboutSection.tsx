import SectionHeader from '../SectionHeader';
import AvatarSvg from './AvatarSvg';
import WhoAmI from './WhoAmI';

export default function AboutSection() {
    return (
        <div className="relative flex h-screen justify-center">
            <div id="about" className="flex max-w-7xl flex-col gap-10 pt-32">
                <SectionHeader titleFirstWord="About" titleSecondWord="me" subTitle="Get to know me and my journey as a full-stack developer" />
                <div className="fontSergoe grid grid-cols-5 gap-7 px-20">
                    <AvatarSvg />
                    <WhoAmI />
                </div>
            </div>
        </div>
    );
}
