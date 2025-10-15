import Link from "next/link"
import { Mail, MapPin, Phone, Star, Sparkles, Github, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "Contact | Brian Best",
  description: "Get in touch with Brian Best - Senior Software Developer specializing in AI-driven systems",
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            About me
          </Link>
          <Link href="/blog" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Resume
          </Link>
          <Link href="/projects" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Work
          </Link>
        </div>

        {/* Back Button */}
        <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </Link>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#F4B942] mb-4">
              <Sparkles size={32} className="animate-pulse" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#E8DCC8] mb-6">
              Get In<br />Touch
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl">
              Have a question or want to work together? Feel free to drop me a line!
            </p>
          </div>
        </div>

        {/* Large "CONTACT" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[10rem] md:text-[14rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          CONTACT
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="bg-white border-2 border-[#1A1A1A] p-8 hover:border-[#E8944A] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Email</h3>
              </div>
              <p className="text-[#6C6C6C] text-sm mb-6">
                Best way to reach me for professional inquiries and collaborations
              </p>
              <a 
                href="mailto:brian@example.com"
                className="inline-flex items-center gap-2 text-[#E8944A] text-sm font-semibold hover:text-[#D17A2E] transition-colors"
              >
                <span>brian@example.com</span>
                <span>→</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white border-2 border-[#1A1A1A] p-8 hover:border-[#E8944A] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Phone</h3>
              </div>
              <p className="text-[#6C6C6C] text-sm mb-6">
                Available for calls during business hours (EST timezone)
              </p>
              <a 
                href="tel:+10782845900"
                className="inline-flex items-center gap-2 text-[#E8944A] text-sm font-semibold hover:text-[#D17A2E] transition-colors"
              >
                <span>07 82 84 59 00</span>
                <span>→</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white border-2 border-[#1A1A1A] p-8 hover:border-[#E8944A] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Location</h3>
              </div>
              <p className="text-[#6C6C6C] text-sm mb-6">
                Based in Waterloo, Canada. Open to remote opportunities
              </p>
              <span className="inline-flex items-center gap-2 text-[#1A1A1A] text-sm font-semibold">
                <span>Waterloo, Canada</span>
              </span>
            </div>

            {/* Social Card */}
            <div className="bg-white border-2 border-[#1A1A1A] p-8 hover:border-[#E8944A] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                  <Star size={24} fill="white" className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Social</h3>
              </div>
              <p className="text-[#6C6C6C] text-sm mb-6">
                Follow me for updates and tech insights
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#E8944A] transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#E8944A] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#E8944A] transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "HIRE" text in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          HIRE
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-8">
              Response Time & Availability
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8944A] mb-4">
                  <Sparkles size={28} className="text-white" />
                </div>
                <p className="font-serif text-sm text-[#E8DCC8] mb-2">Response Time</p>
                <p className="text-[#F5F1E8] font-semibold">24-48 hours</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8944A] mb-4">
                  <Star size={28} fill="white" className="text-white" />
                </div>
                <p className="font-serif text-sm text-[#E8DCC8] mb-2">Timezone</p>
                <p className="text-[#F5F1E8] font-semibold">EST (GMT-5)</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8944A] mb-4">
                  <div className="w-3 h-3 bg-[#00FF00] rounded-full animate-pulse"></div>
                </div>
                <p className="font-serif text-sm text-[#E8DCC8] mb-2">Status</p>
                <p className="text-[#F5F1E8] font-semibold">Available</p>
              </div>
            </div>

            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm p-8 border-2 border-[#F4B942]">
              <p className="text-[#E8DCC8] text-sm leading-relaxed">
                <span className="font-semibold text-[#F4B942]">Currently available</span> for consulting, speaking engagements, and select freelance opportunities. I typically respond within 24-48 hours on weekdays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Let's Connect
          </h2>
          <p className="text-[#1A1A1A] text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, need technical consulting, or just want to chat about AI and software development, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:brian@example.com"
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C4A3E] transition-colors inline-flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Send an Email</span>
            </a>
            <Link 
              href="/projects"
              className="bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] px-8 py-4 rounded-full font-medium hover:border-[#2C4A3E] transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
