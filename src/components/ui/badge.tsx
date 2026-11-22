import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

// 札の見た目。形と大きさは共通にして、色は variant で切り替える
const badgeVariants = cva('rounded-full border px-2.5 text-[11.5px] leading-relaxed', {
  variants: {
    variant: {
      // 技術名などの札（淡い金の面に、線の色の縁）
      default: 'border-line bg-gold/5 text-frost',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type Props = React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>

// 技術名などを表示する小さな札
export function Badge({ className, variant = 'default', ...props }: Props) {
  return (
    <span
      data-slot='badge'
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
