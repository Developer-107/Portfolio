import { Link } from '@inertiajs/react';
import MySkillsButton from './MySkillsButton';

export default function WhoAmI() {
    return (
        <div className="col-span-3 flex flex-col gap-7">
            <p className="text-2xl font-bold">Who am i?</p>
            <p className="font-normal text-wrap text-gray-200">
                I am a full-stack web developer passionate about building
                modern, fast, and user-focused web applications. I enjoy working
                across both the front-end and back-end, creating seamless
                digital experiences from concept to deployment. On the
                front-end, I focus on designing responsive, intuitive interfaces
                that provide a smooth and engaging user experience across all
                devices, while on the back-end I build reliable and scalable
                systems.
                <br />
                <br />I write clean, maintainable code and follow best practices
                to create applications that are easy to scale and improve over
                time. I am constantly learning and adapting to new technologies
                to stay aligned with modern development trends. My goal is to
                deliver high-quality digital products that combine strong
                functionality with thoughtful design and real value for users.
            </p>

            <MySkillsButton />
        </div>
    );
}
