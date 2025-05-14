import { IconProps, iconSizeVariants } from '.'
export function YoutubeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconSizeVariants[props.size]}
      fill='currentColor'
    >
      <path d="M23.498 6.186a3.001 3.001 0 00-2.107-2.107C19.09 4 12 4 12 4s-7.09 0-9.391.079A3.001 3.001 0 00.502 6.186C0 8.5 0 12 0 12s0 3.5.502 5.814c.392 1.086 1.22 1.914 2.107 2.107C4.91 20 12 20 12 20s7.09-.001 9.391-.079c1.086-.392 1.914-1.22 2.107-2.107C24 15.5 24 12 24 12s0-3.5-.502-5.814zM9.545 15V9l6.455 3L9.545 15z" />
    </svg>
  )
}