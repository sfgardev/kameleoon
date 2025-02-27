import { Button } from '../../shared/ui/button'
import s from './table-with-search.module.scss'

type Props = {
  onReset: () => void
}

export const NoResults = ({ onReset }: Props) => {
  return (
    <div className={s.noResults}>
      <p>Your search did not match any results.</p>
      <Button onClick={onReset}>Reset</Button>
    </div>
  )
}
