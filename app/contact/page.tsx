import { SocialLinks } from "@/components/social-links"
import { PixelButton } from "@/components/pixel-button"
import { PixelCard } from "@/components/pixel-card"

export const metadata = {
  title: "Contact | Brian Best",
  description: "Get in touch with Brian Best",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Get In Touch</h1>
          <p className="text-muted-foreground mb-4">
            Have a question or want to work together? Feel free to drop me a line!
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-mono text-pixel-success border-2 border-pixel-success px-3 py-1">
            <span className="inline-block w-2 h-2 bg-pixel-success rounded-full animate-blink"></span>
            Available for consulting & speaking engagements
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <PixelCard>
            <h3 className="font-pixel text-lg text-primary mb-4">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Best way to reach me for professional inquiries
            </p>
            <PixelButton
              asChild
              variant="primary"
              className="w-full"
            >
              <a href="mailto:brian@example.com">
                Send Email
              </a>
            </PixelButton>
          </PixelCard>

          <PixelCard>
            <h3 className="font-pixel text-lg text-primary mb-4">Social</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow me for updates and tech insights
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </PixelCard>
        </div>

        <PixelCard className="text-center bg-muted/30">
          <h3 className="font-pixel text-xl text-primary mb-4">Response Time</h3>
          <p className="text-sm text-muted-foreground mb-4">
            I typically respond within <span className="text-primary font-pixel">24-48 hours</span> on weekdays.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <div>
              <p className="font-pixel text-xs text-muted-foreground mb-1">Timezone</p>
              <p className="text-sm text-foreground font-mono">EST (GMT-5)</p>
            </div>
            <div>
              <p className="font-pixel text-xs text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pixel-success rounded-full animate-blink"></span>
                <p className="text-sm text-foreground font-mono">Online</p>
              </div>
            </div>
          </div>
        </PixelCard>
      </div>
    </main>
  )
}
