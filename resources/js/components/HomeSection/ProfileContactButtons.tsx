import MyProjectsButton from './MyProjectsButton';
import ContactMeButton from './ContactMeButton';

export default function ProfileContactButtons() {
    return (
        <div className="fontSergoe flex gap-5 lg:text-[17.7px] text-[14px] font-semibold">
            <MyProjectsButton />
            <ContactMeButton />
        </div>
    );
}
