import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Star, Sparkles } from "lucide-react"

export default function Home() {
  const techStack = {
    software: ["Ps", "Ai", "Id", "Xd", "Pr"],
    coding: ["Basic knowledge", "HTML", "CSS", "PHP", "SQL", "JavaScript"]
  }

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Intermediate" },
    { name: "Vietnamese", level: "Native" }
  ]

  const hobbies = [
    { name: "Classical", subtitle: "handhypNaz" },
    { name: "Crochet", subtitle: "knitting" },
    { name: "Digital art", subtitle: "Miniature craft" },
    { name: "Calligraphy", subtitle: "and blah" }
  ]

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-screen bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/about" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            About me
          </Link>
          <Link href="/blog" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Resume
          </Link>
          <Link href="/projects" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Work
          </Link>
          <button className="bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium hover:bg-[#D4A854] transition-colors text-sm">
            Get in touch!
          </button>
        </div>

        {/* Back Button */}
        <button className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </button>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and Text */}
            <div className="relative">
              {/* Star decorations */}
              <div className="absolute -top-8 -left-4 text-[#F4B942]">
                <Sparkles size={40} className="animate-pulse" />
              </div>
              
              {/* Orange background with silhouette */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto bg-[#E8944A] overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center">
                  <Image
                    src="/brian.jpeg"
                    alt="Brian Best"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Star decoration bottom */}
              <div className="absolute -bottom-4 left-1/3 text-[#F4B942]">
                <Star size={32} fill="#F4B942" />
              </div>

              {/* Quote box */}
              <div className="absolute bottom-0 left-0 bg-[#E8944A] text-[#1A1A1A] p-6 max-w-xs text-sm">
                <p className="leading-relaxed">
                  "I love design and anything related to art. I approach each project with a vision and enigmatic style of my own while keeping things functional and inclusive."
                </p>
              </div>
            </div>

            {/* Right side - Portfolio text and info */}
            <div className="relative space-y-8">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-[#E8DCC8]">
                PORT<br />FOLIO
              </h1>
              
              {/* Outlined text overlays */}
              <div className="absolute top-0 right-0 font-serif text-6xl md:text-8xl font-bold text-transparent" style={{
                WebkitTextStroke: '2px #F4B942'
              }}>
                FOLIO
              </div>

              <div className="space-y-2 mt-8">
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">BE:</span> /hannnb
                </p>
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">IG:</span> @han.nnb
                </p>
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">LI:</span> /han-nnb
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-16 h-16 rounded-full bg-[#F4B942] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-[#1A1A1A] text-xs font-medium">Scroll</span>
            <span className="text-[#1A1A1A] text-xs font-medium">down</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Introduction */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#E8944A] mb-2">
                  <Star size={24} fill="#E8944A" />
                  <span className="font-serif text-2xl">Brian Best</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
                  Hello,<br />I'm Brian!
                </h2>
              </div>
              
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                I am a self-taught Senior Software Developer based in Canada with extensive experience in building robust applications and AI-powered solutions. I am currently living in Waterloo and working at Axonify.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#E8944A] text-white px-6 py-3 rounded-full hover:bg-[#D17A2E] transition-colors cursor-pointer">
                <Mail size={20} />
                <span className="text-sm">brian.best@example.com</span>
              </div>
            </div>

            {/* Right side - Photo and details */}
            <div className="relative">
              <div className="relative w-full max-w-md ml-auto">
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brianabout.jpeg"
                    alt="Brian Best"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Green overlay block */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-[#3D5A4C] -z-10"></div>
                </div>

                {/* Date badge */}
                <div className="absolute top-8 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  2nd August 1999
                </div>

                {/* Nationality badge */}
                <div className="absolute bottom-16 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  Canadian
                </div>

                {/* Contact card */}
                <div className="absolute -bottom-8 left-0 bg-[#1A1A1A] text-white p-6 max-w-xs">
                  <h3 className="font-serif text-2xl mb-4">Contact</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Waterloo, Canada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>mhd892@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>07 82 84 59 00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "RESUME" text in background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-20 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          RESUME
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Education</h2>
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2022-2028</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">University of Waterloo</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Computer Science</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2021-2022</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">Conestoga College</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Software Development</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2017-2020</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">University of Toronto</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Business Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12">Experience</h2>
          
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">2022</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Senior Software Developer</h3>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  Lead development of AI-powered features at Axonify. Build scalable solutions, mentor team members, and drive technical excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">2021</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Freelancer</h3>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  Worked with various clients, created logos, posters, presentations based on their requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">2020</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Software Developer</h3>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  Designed promotional materials for events in my country Viet Nam.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12">
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Creativity</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Communication</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Detail-oriented</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Adaptability</span>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24 relative">
        {/* Large "RESUME" text in background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #D4A854'
        }}>
          RESUME
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8944A] mb-12">Technical skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {/* Software Skills */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Software Skills</h3>
              <div className="flex gap-3">
                {techStack.software.map((skill) => (
                  <div key={skill} className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Coding Skills */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Coding skills</h3>
              <div className="space-y-2">
                {techStack.coding.map((skill) => (
                  <div key={skill} className="inline-block bg-white text-[#1A1A1A] px-4 py-2 mr-2 mb-2 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">Packaging</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">Visual design</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">UI/UX design</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">User Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* Language & Hobbies Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24 border-t-2 border-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
            {/* Languages */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Language</h2>
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-serif text-xl font-semibold text-[#1A1A1A]">{lang.name}</span>
                      <span className="text-sm text-[#6C6C6C]">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 gap-6">
                {hobbies.map((hobby) => (
                  <div key={hobby.name} className="text-center">
                    <div className="w-16 h-16 bg-[#F4B942] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Sparkles size={28} className="text-[#1A1A1A]" />
                    </div>
                    <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">{hobby.name}</h4>
                    <p className="text-xs text-[#6C6C6C]">{hobby.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Activities</h2>
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">2020</span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] font-semibold">'Tech Innovation' exhibition</h3>
                </div>
                <p className="text-[#E8DCC8] text-sm">Featured innovative projects and solutions</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">2019</span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] font-semibold">Hackathon winner</h3>
                </div>
                <p className="text-[#E8DCC8] text-sm">Winner of regional coding competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
