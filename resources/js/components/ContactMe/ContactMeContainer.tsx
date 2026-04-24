import ContactSocialMedias from '../HomeSection/ContactSocialMedias';
import { CheckCircle } from 'lucide-react';

export default function ContactMeContainer() {
    const email = import.meta.env.VITE_CONTACT_EMAIL_ADDRESS || '';
    const mobNumber = import.meta.env.VITE_CONTACT_MOBILE_NUMBER || '';

    const services = [
        {
            name: 'Full-Stack Development',
            text: '– Building fast, interactive, and scalable interfaces using modern frameworks like React and Next.js.',
        },
        {
            name: 'Web Design',
            text: '– Designing clean, modern layouts that focus on usability, clarity, and visual hierarchy.',
        },
        {
            name: 'UI/UX Design',
            text: '– Crafting intuitive user experiences that feel smooth, logical, and engaging for users.',
        },
        {
            name: 'Responsive Design',
            text: '– Ensuring every project works perfectly across all devices, from mobile to desktop.',
        },
    ];

    return (
        <div className="fontSergoe grid grid-cols-4">
            <div className="col-span-3 flex flex-col gap-5">
                <p className="leading-relaxed text-gray-300">
                    I enjoy working on modern, clean, and user-focused web
                    experiences. If you have a project or idea you’d like to
                    discuss, I’d be happy to collaborate and make it real.
                </p>
                <div className="space-y-4">
                    <p className="font-medium text-gray-200">
                        My services focus on creating complete digital
                        experiences:
                    </p>

                    <ul className="space-y-3 text-gray-300">
                        {services.map((service, idx) => (
                            <li key={idx} className="flex gap-1">
                                <span className="flex items-center gap-2 font-semibold text-white">
                                    <CheckCircle className="h-5 w-5 text-purple-500" />{' '}
                                    {service.name}
                                </span>{' '}
                                {service.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="col-span-1 mt-auto ml-auto flex flex-col gap-5">
                <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-500">{email}</p>
                </div>

                <div>
                    <p className="font-medium">Mobile Number</p>
                    <p className="text-gray-500">{mobNumber}</p>
                </div>

                <div>
                    <ContactSocialMedias />
                </div>
            </div>
        </div>
    );
}
