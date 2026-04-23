export default function SectionHeader({ titleFirstWord, titleSecondWord, subTitle }: { titleFirstWord: string; titleSecondWord: string; subTitle: string }) {
    return (
        <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col items-center gap-4">
                <div className="fontSergoe flex gap-2 text-4xl font-bold">
                    {' '}
                    <p>{titleFirstWord}</p>{' '}
                    <span className="gradient-word-effect-2">{titleSecondWord}</span>
                </div>
                <div className="h-1.5 w-22 bg-[#AB47BC]" />
            </div>
            <p className="font-medium text-[#9da4b0]">
                {subTitle}
            </p>
        </div>
    );
}
