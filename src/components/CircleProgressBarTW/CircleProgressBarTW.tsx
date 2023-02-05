interface CircleProgressBarTWProps {
  progress: string
}

export function CircleProgressBarTW({ progress, }: CircleProgressBarTWProps) {
  return (
    <>
    <span
        style={{ background: `conic-gradient(#52965D ${progress}%, #EEEEEE 0deg)` }}
        data-progress={progress}
        className="rotate-12 flex w-[4rem] h-[4rem] text-[0] rounded-[50%] 
                after:-rotate-12 after:content-[attr(data-progress)'%'] after:flex after:justify-center 
                after:flex-col after:w-[4rem] after:m-[0.25rem] after:rounded-full 
                after:bg-background-us after:text-base after:text-center"
      >
        {progress}
      </span>
    </>
  )
}