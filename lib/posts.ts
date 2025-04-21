// This is a mock implementation for static generation
// In a real project, you would fetch this data from a CMS or file system

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage: string
  readingTime: number
}

export function getPosts(): Post[] {
  return [
    {
      slug: "building-a-persona-themed-blog",
      title: "Building a Persona-Themed Blog with Next.js",
      date: "2023-12-15",
      excerpt: "Learn how I created this Persona 5 inspired blog using Next.js, TypeScript, and Tailwind CSS.",
      content: `
# Building a Persona-Themed Blog

In this post, I'll walk through how I built this Persona 5 inspired blog using Next.js, TypeScript, and Tailwind CSS.

## The Inspiration

Persona 5's UI design is iconic - bold colors, dynamic animations, and a distinctive comic book style. I wanted to capture that energy in my personal site.

## Key Design Elements

The most important aspects I focused on were:

- The color palette: crimson red, dark maroon, black, and white
- Typography: Bungee for headings to mimic the game's chunky display type
- Diagonal sections and comic-panel borders
- Animated hover states with quick cubic-bezier transitions

## Implementation Challenges

The biggest challenge was balancing the bold aesthetic with readability and performance. Here's how I approached it:

\`\`\`tsx
// Example of the card hover animation
<div className="hover:transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300">
  {/* Card content */}
</div>
\`\`\`

## Conclusion

Building this theme was a fun way to express my personality while practicing my front-end skills.
      `,
      coverImage: "/placeholder.svg?height=630&width=1200",
      readingTime: 5,
    },
    {
      slug: "typescript-best-practices-2023",
      title: "TypeScript Best Practices for 2023",
      date: "2023-11-20",
      excerpt:
        "A comprehensive guide to TypeScript best practices that will help you write cleaner, more maintainable code.",
      content: `
# TypeScript Best Practices for 2023

As TypeScript continues to gain popularity, it's important to stay up-to-date with the latest best practices. Here are my recommendations for writing better TypeScript code in 2023.

## Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

This enables a suite of type-checking flags that catch more errors at compile time.

## Leverage Type Inference

TypeScript's type inference is powerful. Don't add type annotations when they're unnecessary:

\`\`\`typescript
// Unnecessary
const name: string = "Brian";

// Better - type is inferred
const name = "Brian";
\`\`\`

## Use Discriminated Unions

Discriminated unions are a powerful pattern for modeling complex states:

\`\`\`typescript
type LoadingState = { status: "loading" };
type SuccessState = { status: "success", data: User[] };
type ErrorState = { status: "error", error: Error };

type State = LoadingState | SuccessState | ErrorState;
\`\`\`

## Avoid Any

The \`any\` type defeats the purpose of using TypeScript. Use \`unknown\` instead when you need to represent values of uncertain types.

## Conclusion

By following these practices, you'll write more robust TypeScript code that's easier to maintain and refactor.
      `,
      coverImage: "/placeholder.svg?height=630&width=1200",
      readingTime: 7,
    },
    {
      slug: "next-js-14-features",
      title: "Exploring Next.js 14's New Features",
      date: "2023-10-30",
      excerpt: "A deep dive into the exciting new features and improvements in Next.js 14.",
      content: `
# Exploring Next.js 14's New Features

Next.js 14 brings several exciting improvements to the framework. Let's explore the most significant changes.

## Improved Server Components

Server Components have been refined in Next.js 14, with better error handling and more intuitive behavior.

## Partial Rendering

One of the most exciting features is partial rendering, which allows only the changed parts of a page to be re-rendered when data updates.

## Enhanced Image Component

The Image component has received performance improvements and new features:

\`\`\`tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
      blurDataURL="data:image/..."
    />
  );
}
\`\`\`

## Turbopack Improvements

Turbopack continues to get faster and more stable, making local development a breeze.

## Conclusion

Next.js 14 represents another solid step forward for the framework, with meaningful improvements to performance and developer experience.
      `,
      coverImage: "/placeholder.svg?height=630&width=1200",
      readingTime: 6,
    },
  ]
}
