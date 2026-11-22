'use client'

import { Reveal } from '@/components/elements/Reveal'
import { ProjectCard } from '@/features/project/components/ProjectCard'
import { ProjectDetailModal } from '@/features/project/components/ProjectDetailModal'
import type { Project } from '@/type/project'
import { useState } from 'react'

type Props = {
  projects: Project[]
}

// 案件カードの一覧と、押されたカードの詳細ダイアログ
export function ProjectList({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      {/* 絵馬の紐がカードの上にはみ出すので、行の間は列の間より広くする */}
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-5 gap-y-8'>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.12} className='h-full'>
            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
          </Reveal>
        ))}
      </div>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
