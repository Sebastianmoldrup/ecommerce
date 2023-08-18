export function Divider() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 500'
      width='100%'
      height='720px'
      className='row-start-1 col-start-1'
    >
      <rect width='100%' height='100%' fill='#3498db' />

      <path
        fill='#ffffff'
        d='M0 300 Q250 400, 500 300 Q750 200, 1000 300 V500 H0 Z'
      />
    </svg>
  );
}
