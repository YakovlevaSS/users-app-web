import s from './index.module.sass'

export default function Loader() {
  return (
    <div className={s.wrap}>
      <div className={s.blogText}>
        <p className={s.text}>Идет загрузка...</p>
      </div>
    </div>
  )
}
