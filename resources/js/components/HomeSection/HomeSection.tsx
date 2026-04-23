import ToAboutChevron from './ToAboutChevron'
import BackgroundLayer from './BackgroundLayer'
import ShootingStars from './ShootingStars'
import WelcomeMessage from './WelcomeMessage'
import ProfileContactButtons from './ProfileContactButtons'
import ContactSocialMedias from './ContactSocialMedias'
import TypeAnimationCustom from '../TypingAnimationCustom';


export default function HomeSection() {
  return (
            <div id="home" className="relative flex h-screen justify-center bg-cover bg-center" >

                {/* To about chevron */}
                <ToAboutChevron />
                {/* BG layer is Absolute */}
                <BackgroundLayer />
                {/* Shooting Stars */}
                 <ShootingStars />

                <div className="flex max-w-7xl items-center px-8 pt-20">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 flex flex-col gap-7">
                            <WelcomeMessage />
                            <TypeAnimationCustom />
                            <ProfileContactButtons />
                            <ContactSocialMedias />
                        </div>

                        {/* For Later */}
                        {/* <TiltingImage /> */}

                    </div>
                </div>
            </div>
  )
}
