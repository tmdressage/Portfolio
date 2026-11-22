'use client'

import { ChipList } from '@/components/elements/ChipList'
import { EnglishLabel } from '@/components/elements/EnglishLabel'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { PHASES } from '@/features/project/constants/phases'
import { formatProjectNo } from '@/features/project/utils/formatProjectNo'
import type { Project } from '@/type/project'
import { cn } from 'cn'

type DetailBlockProps = {
  label: string
  subLabel?: string
  children: React.ReactNode
}

// ダイアログ内の項目（英字の小見出し＋日本語の補足＋中身）
function DetailBlock({ label, subLabel, children }: DetailBlockProps) {
  return (
    <div>
      <h4 className='mb-1.5'>
        <EnglishLabel>
          {label}
          {subLabel && (
            <small className='ml-2 font-sans text-xs tracking-normal text-muted not-italic'>
              {subLabel}
            </small>
          )}
        </EnglishLabel>
      </h4>
      {children}
    </div>
  )
}

type ProjectDetailProps = {
  project: Project
}

// ダイアログの中身（高さは中身の長さのまま。はみ出た分は外側の幕をスクロールして見せる）
function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <header className='relative border-b border-line px-5 pt-8.5 pb-5.5 md:px-7.5'>
        <DialogClose
          aria-label='閉じる'
          className='absolute top-3.5 right-3.5 size-10 cursor-pointer rounded-full border border-line bg-black/25 text-xl text-gold transition duration-300 hover:rotate-90 hover:border-gold'
        >
          ×
        </DialogClose>
        <EnglishLabel>
          <b className='mr-2.5 not-italic'>{formatProjectNo(project.no)}</b>Project
        </EnglishLabel>
        <p className='text-[15px] text-muted'>{project.period}</p>
        <DialogTitle asChild>
          <h3 className='mt-1.5 pr-10 font-serif-ja text-[clamp(20px,3vw,28px)] leading-snug font-extrabold'>
            {project.title}
          </h3>
        </DialogTitle>
      </header>

      <div className='grid gap-6 px-5 pt-6 pb-8 text-[15px] md:px-7.5'>
        <DetailBlock label='Overview' subLabel='案件概要'>
          <p>{project.summary}</p>
        </DetailBlock>
        <DetailBlock label='Team' subLabel='チーム人数'>
          <p>{project.team}</p>
        </DetailBlock>
        <DetailBlock label='Tasks' subLabel={project.taskLabel}>
          <ul className='list-disc pl-5'>
            {project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock label='Phases' subLabel='作業工程'>
          <div className='grid grid-cols-4 gap-x-1.5 gap-y-3 md:grid-cols-7'>
            {PHASES.map((phase) => {
              const isDone = project.phases.includes(phase)

              return (
                <div
                  key={phase}
                  className={cn('text-center text-[11.5px]', isDone ? 'text-frost' : 'text-muted')}
                >
                  <span
                    className={cn(
                      'mx-auto mb-1.5 block size-7.5 rounded-full border',
                      isDone
                        ? 'border-gold bg-[radial-gradient(circle,--alpha(var(--color-gold-light)/90%),--alpha(var(--color-gold)/85%)_60%,--alpha(var(--color-gold-dark)/85%))] shadow-[0_0_14px] shadow-gold/50'
                        : 'border-line',
                    )}
                  />
                  {phase}
                </div>
              )
            })}
          </div>
        </DetailBlock>
        <div className='grid gap-4 md:grid-cols-2'>
          <DetailBlock label='OS' subLabel='サーバー OS'>
            <p>{project.os}</p>
          </DetailBlock>
          <DetailBlock label='DB'>
            <p>{project.db ?? '—'}</p>
          </DetailBlock>
          <DetailBlock label='Language' subLabel='使用言語'>
            {project.languages.length > 0 ? (
              <ChipList items={project.languages} />
            ) : (
              <p className='text-muted'>—</p>
            )}
          </DetailBlock>
          <DetailBlock label='Tools' subLabel='FW・MW ツール等'>
            <ChipList items={project.tools} />
          </DetailBlock>
        </div>
      </div>
    </>
  )
}

type Props = {
  project: Project | null
  onClose: () => void
}

// 案件の詳細ダイアログ。project が渡されると開き、null になると閉じる
// 閉じるボタン・背景・Esc キーで閉じると onClose を呼ぶ
export function ProjectDetailModal({ project, onClose }: Props) {
  return (
    <Dialog
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className='max-w-215 overflow-hidden rounded-[22px] border border-gold/45 bg-[linear-gradient(170deg,var(--color-dialog-from)_0%,var(--color-dialog-to)_60%)] text-frost shadow-[0_40px_120px] shadow-black/70'>
        {project && <ProjectDetail project={project} />}
      </DialogContent>
    </Dialog>
  )
}
