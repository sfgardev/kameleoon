import s from './layout.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const Layout = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn(s.layout, className)} {...props}>
      {children}
    </div>
  )
}
