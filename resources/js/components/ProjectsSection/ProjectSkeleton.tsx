import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProjectSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-[#181726] shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#a856f5]">
            <Skeleton className="aspect-video min-w-full!" />

            <div className="flex flex-col gap-6 p-6 text-xl">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4! w-3/5!" />
                    <div className="flex flex-col">
                        <Skeleton className="h-3! w-full!" />
                        <Skeleton className="h-3! w-full!" />
                        <Skeleton className="h-3! w-full!" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 self-start">
                    {[...Array(3)].map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center rounded-md bg-[#591c87] p-1 px-2 text-xs font-medium text-nowrap text-[#c083fc]"
                        >
                            <Skeleton
                                className="mb-1 h-2! w-7!"
                                baseColor="#8e02f9"
                                highlightColor="#c083fc"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
