// No "use client" needed unless you plan to add interactivity
export function Footer() {
  const year = new Date().getFullYear()

  const address = "Classica Ceramic"
  const mapsQuery = encodeURIComponent(address)
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <footer  id="contact" className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Address */}
          <div>
            <h3 className="font-serif text-2xl font-light mb-3">Classica Ceramic</h3>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              No. 21/E, Narahenpitia Road, Nawala, Rajagiriya.
            </address>

            <div className="mt-3 space-y-1 text-sm">
              <p className="text-muted-foreground">
                M:&nbsp;
                <a href="tel:+94768576234" className="hover:text-foreground transition-colors">
                  076 857 6234
                </a>{" "}
                |{" "}
                <a href="tel:+94771510781" className="hover:text-foreground transition-colors">
                  077 151 0781
                </a>
              </p>
              {/* Optional email */}
              {/* <p className="text-muted-foreground">
                E: <a href="mailto:hello@classicaceramic.lk" className="hover:text-foreground">hello@classicaceramic.lk</a>
              </p> */}
              <p className="mt-2">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline"
                >
                  Get directions
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#deals" className="hover:text-foreground transition-colors">
                  Trending Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground/80">
              Opening Hours
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 09:00 AM – 6:00 PM</li>
              <li>Sun: 09:00 AM – 12:00 PM</li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-lg border border-border/40 bg-background">
              <iframe
                title="Classica Ceramic on Google Maps"
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full md:h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
   {/* Bottom bar */}
<div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
  <p>© {year} Classica Ceramic. All rights reserved.</p>

  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
    <p>
      Website built & maintained by{" "}
      <a
        href="https://www.linkedin.com/in/fazlulrahmanmohideen/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline underline-offset-4"
      >
        Fazlul Rahman Mohideen
      </a>
    </p>
    <p>
      📞{" "}
      <a href="tel:+94776277220" className="hover:text-foreground transition-colors">
        077 627 7220
      </a>
    </p>
  </div>

  <div className="flex gap-6">
    <a href="#" className="hover:text-foreground transition-colors">
      Privacy Policy
    </a>
    <a href="#" className="hover:text-foreground transition-colors">
      Terms of Service
    </a>
  </div>
</div>

        
      </div>
      
    </footer>
  )
}
