import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={'1em'}
    viewBox={'0 0 16 16'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g>
      <path
        d={
          'M11.7 14a.67.67 0 0 1-.3-.07L8 12.15l-3.4 1.78a.67.67 0 0 1-.97-.71l.67-3.75L1.55 6.8a.67.67 0 0 1-.16-.67.67.67 0 0 1 .54-.45l3.8-.55L7.4 1.7a.67.67 0 0 1 1.2 0l1.7 3.41 3.8.55a.67.67 0 0 1 .53.46.67.67 0 0 1-.16.66l-2.75 2.67.67 3.75a.67.67 0 0 1-.27.67.67.67 0 0 1-.41.12Z'
        }
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'#red'} />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
