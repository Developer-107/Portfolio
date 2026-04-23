import MyProjectsButton from './MyProjectsButton';
import ContactMeButton from './ContactMeButton';

export default function ProfileContactButtons() {
    return (
        <div className="fontSergoe flex gap-5 text-[17.7px] font-semibold">
            <MyProjectsButton />
            <ContactMeButton />
        </div>
    );
}
