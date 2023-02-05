import styles from "./circleProgressBarTW.module.css"

interface CircleProgressBarTWProps {
  progress: string
}

export function CircleProgressBarTW({ progress, }: CircleProgressBarTWProps) {
  return (
    <>
    <span
        style={{ background: `conic-gradient(#52965D ${progress}%, #EEEEEE 0deg)` }}
        data-progress={progress}
        className={styles.cicleProgressBarTW}
      >
        {progress}
      </span>
    </>
  )
}