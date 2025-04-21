# Brian Best's Personal Blog

A fully-static personal blog for Brian Best, Senior Software Developer at Axonify, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Fully static site generation
- Persona 5 inspired design
- Responsive layout
- Dark mode support
- Blog with MDX support
- Projects showcase

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/brian-best-blog.git
cd brian-best-blog
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `lib/` - Utility functions and data fetching
- `public/` - Static assets

## Adding Content

### Blog Posts

To add a new blog post, update the `getPosts` function in `lib/posts.ts`:

\`\`\`typescript
export function getPosts(): Post[] {
  return [
    {
      slug: "your-post-slug",
      title: "Your Post Title",
      date: "2023-12-31",
      excerpt: "A brief summary of your post.",
      content: `
# Your Post Title

Your post content in Markdown format.
      `,
      coverImage: "/path/to/cover-image.jpg",
      readingTime: 5,
    },
    // ... existing posts
  ];
}
\`\`\`

### Projects

To add a new project, update the `getProjects` function in `lib/projects.ts`:

\`\`\`typescript
export function getProjects(): Project[] {
  return [
    {
      id: "unique-id",
      title: "Project Title",
      description: "Project description.",
      image: "/path/to/project-image.jpg",
      tags: ["Tag1", "Tag2"],
      url: "https://github.com/yourusername/project",
      featured: true, // Set to true to show on homepage
    },
    // ... existing projects
  ];
}
\`\`\`

## Deployment

This site is designed to be deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Deploy

## License

MIT
