import Link from 'next/link'

export default function Home() {
  return <Link href={'/products?page=1'}>{'Products'}</Link>
}
