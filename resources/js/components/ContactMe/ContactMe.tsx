import SectionHeader from '../SectionHeader';
import ContactMeContainer from './ContactMeContainer';

export default function ContactMe() {
    return (
        <div className="relative flex min-h-screen justify-center bg-[#181726]">
            <div
                id="contact"
                className="flex w-full max-w-7xl flex-col gap-10 pt-32 px-8"
            >
                <SectionHeader
                    titleFirstWord="Contact"
                    titleSecondWord="Me"
                    subTitle="Have a project in mind? Let’s build something together!"
                />
                <ContactMeContainer />
            </div>
        </div>
    );
}
