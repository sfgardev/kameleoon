import s from './button.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

type Variant = 'primary' | 'secondary'

type Props = {
  variant?: Variant
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  className,
  children,
  variant = 'primary',
  ...props
}: Props) => {
  const variants: Record<Variant, string> = {
    primary: s.primary,
    secondary: s.secondary,
  }

  return (
    <button className={cn(s.button, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
