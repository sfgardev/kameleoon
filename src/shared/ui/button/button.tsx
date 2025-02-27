import s from './button.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import { Link, LinkProps } from 'react-router'

type Variant = 'primary' | 'secondary'

type ButtonProps = {
  variant?: Variant
} & ComponentPropsWithoutRef<'button'>

type LinkButtonProps = {
  to: string
  variant?: Variant
} & ComponentPropsWithoutRef<'a'> &
  LinkProps

type Props = ButtonProps | LinkButtonProps

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

  const classes = cn(s.button, variants[variant], className)

  if ('to' in props) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
