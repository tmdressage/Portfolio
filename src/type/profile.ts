export type Strength = {
  id: number
  title: string
  body: string
}

export type Profile = {
  name: string
  role: string
  about: string[]
  strengths: Strength[]
}
