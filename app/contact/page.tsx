import { SocialLinks } from "@/components/social-links"

export const metadata = {
  title: "Contact | Brian Best",
  description: "Get in touch with Brian Best",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-8">Get In Touch</h1>

        <p className="text-xl mb-8">Have a question or want to work together? Feel free to drop me a line!</p>

        <a
          href="https://www.linkedin.com/in/brianbest"
          className="inline-block font-bungee text-xl bg-persona-red text-persona-black px-8 py-4 shadow-thief hover:transform hover:-translate-y-1 hover:rotate-1 transition-transform"
        >
          Message Me on LinkedIn
        </a>

        <div className="mt-12">
          <h2 className="font-bungee text-2xl text-persona-white mb-4">Or find me on</h2>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  )
}
