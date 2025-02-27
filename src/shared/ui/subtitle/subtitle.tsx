import s from './subtitle.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

type Props = {} & ComponentPropsWithoutRef<'h2'>

export const Subtitle = ({ className, children, ...props }: Props) => {
  return (
    <h2 className={cn(s.subtitle, className)} {...props}>
      {children}
    </h2>
  )
}
