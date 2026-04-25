'use client';

import { Paginated, Project, Stack } from '@/types/GlobalTypes';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectsContainer({
    projectsPaginated,
}: {
    projectsPaginated: Paginated<Project>;
}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const removeStart = router.on('start', () => setLoading(true));
        const removeFinish = router.on('finish', () => setLoading(false));

        return () => {
            removeStart();
            removeFinish();
        };
    }, []);

    return (
        <div className="mb-20 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {loading
                ? [...Array(3)].map((_, idx) => <ProjectSkeleton key={idx} />)
                : projectsPaginated?.data.map((project) => (
                      <a
                          key={project?.id}
                          href={project?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-[#181726] shadow-lg transition duration-500 hover:-translate-y-1 hover:border-[#AB47BC] hover:shadow-2xl hover:shadow-[#a856f5]"
                      >
                          <img src={project?.image} alt={project?.title} />

                          <div className="fontSergoe flex flex-col gap-6 p-6 text-[16px] lg:text-lg">
                              <div className="flex flex-col gap-2 self-start">
                                  <div className="font-bold">
                                      {project.title}
                                  </div>
                                  <div className="text-xs font-medium text-gray-500 lg:text-sm">
                                      {project.description}
                                  </div>
                              </div>
                              <div className="flex flex-wrap gap-2 self-start">
                                  {project?.stacks?.map((stack: Stack) => (
                                      <div
                                          key={`${project?.id}-${stack?.id}`}
                                          className="flex rounded-md bg-[#591c87] p-1 px-2 text-[10px] font-medium text-nowrap text-[#c083fc] lg:text-xs"
                                      >
                                          {stack.name}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </a>
                  ))}
        </div>
    );
}
