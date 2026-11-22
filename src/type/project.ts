export type Project = {
  id: number
  no: number
  period: string
  title: string
  summary: string
  team: string
  taskLabel: string
  tasks: string[]
  os: string
  db: string | null
  tools: string[]
  languages: string[]
  phases: string[]
}
