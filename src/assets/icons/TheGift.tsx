import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1-.707-1.707A1 1 0 0 1 9 11h2V9a1 1 0 0 1 1.707-.707A1 1 0 0 1 13 9v2h2a1 1 0 0 1 0 2Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TheGift = memo(ForwardRef)
