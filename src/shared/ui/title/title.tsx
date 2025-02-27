import s from './title.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

type Props = {} & ComponentPropsWithoutRef<'h1'>

export const Title = ({ className, children, ...props }: Props) => {
  return (
    <h1 className={cn(s.title, className)} {...props}>
      {children}
    </h1>
  )
}
