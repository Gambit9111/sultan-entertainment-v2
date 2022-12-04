import Link from 'next/link';

function BlogLayout({ children }) {
  return (
    <div>
        <h1>Blog</h1>
        <div>{children}</div>
        <nav>
            <Link href="/blog/page-1"> Page 1 </Link>
            <Link href="/blog/page-2"> Page 2 </Link>
            <Link href="/blog/page-3"> Page 3 </Link>
        </nav>
    </div>
  )
}

export default BlogLayout