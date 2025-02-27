import s from './container.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const Container = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn(s.container, className)} {...props}>
      {children}
    </div>
  )
}
