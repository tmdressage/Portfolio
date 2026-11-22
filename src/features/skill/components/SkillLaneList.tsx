import { SkillLane } from '@/features/skill/components/SkillLane'
import type { Skill } from '@/type/skill'

type Props = {
  skills: Skill[]
}

// レーンのゴールにする経験期間（2年）
const GOAL_MONTHS = 24

// 保有技術をレーンで表示する（2年をゴールにし、2年を超えた分はゴールで止める）
export function SkillLaneList({ skills }: Props) {
  return (
    <div className='grid gap-4'>
      {skills.map((skill) => (
        <SkillLane key={skill.id} skill={skill} ratio={Math.min(skill.months / GOAL_MONTHS, 1)} />
      ))}
    </div>
  )
}
