import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bungee text-persona-red mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bungee text-persona-red mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bungee text-persona-red mt-6 mb-3" {...props} />,
  a: (props: any) => <Link className="text-persona-red hover:underline" {...props} />,
  img: (props: any) => (
    <div className="my-8 border-4 border-persona-white transform -rotate-1 shadow-thief overflow-hidden">
      <Image {...props} width={1200} height={630} className="object-cover" alt={props.alt || "Blog image"} />
    </div>
  ),
  blockquote: (props: any) => <blockquote className="border-l-4 border-persona-red pl-4 italic my-6" {...props} />,
  code: (props: any) => <code className="bg-persona-maroon/30 text-persona-red px-1 py-0.5 rounded" {...props} />,
  pre: (props: any) => <pre className="bg-persona-maroon/30 p-4 rounded-md overflow-x-auto my-6" {...props} />,
}

export function MDXContent({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />
}
