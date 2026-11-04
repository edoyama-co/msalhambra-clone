import Image from "next/image";

export default function Home() {
  // Source: Peggy's original site (GHL archive, /sales, captured 2026-05-10).
  // Address, city, ZIP, price and role are copied from that page. No specs:
  // the original listed none.
  const properties = [
    {
      address: "309 California St Unit E",
      cityLine: "Arcadia, CA 91006",
      price: "$853,000",
      role: "Represented seller",
      image: "/images/sale-309-california-st-arcadia.webp",
    },
    {
      address: "6673 Lessie Ln",
      cityLine: "Riverside, CA 92503",
      price: "$580,000",
      role: "Represented buyer",
      image: "/images/sale-6673-lessie-ln.webp",
    },
    {
      address: "4145 Yale St",
      cityLine: "Yorba Linda, CA 92886",
      price: "$3,420,000",
      role: "Represented buyer",
      image: "/images/sale-4145-yale-st.webp",
    },
    {
      address: "2936 Grayburn St",
      cityLine: "Pomona, CA 91767",
      price: "$820,000",
      role: "Represented buyer",
      image: "/images/sale-2936-grayburn-st.webp",
    },
    {
      address: "11300 Mount Gleason Ave",
      cityLine: "Tujunga, CA 91042",
      price: "$1,485,000",
      role: "Represented buyer",
      image: "/images/sale-11300-mt-gleason.webp",
    },
  ];

  // Source: Peggy's original site (GHL archive, home page, captured
  // 2026-05-10; identical in Wayback captures Dec 2024 through Apr 2026).
  // Text is verbatim. "more" holds what the original hid behind "Read more".
  const testimonials = [
    {
      title: "\u201cThe Perfect Realtor for me.\u201d",
      attribution: "Bought with Peggy in Glendale.",
      body: [
        "Peggy was the perfect realtor for me. As a first-time home buyer, I had a million questions, and Peggy didn't just answer them - she educated. She helped me shape my thought process - not just about what do I want, but why do I want it, and even was a voice of reason and helped step me back a bit if I was getting a bit too starry-eyed about a bigger home that she knew I didn't need/want, even before I did!",
      ],
      more: [
        "She matched my pace (which I intended to be slow, but became pretty fast) and encouraged my freedom in looking at places myself, but also made time whenever I needed her/asked her to go with me. She was available to work very quickly during the offer process, but made time to give detailed explanations every step of the way, and she never rushed me and always made sure I felt comfortable before we took action.",
        "And literally everyone from her suggested loan officers to numerous inspectors that she recommended were amazing and so you can be assured that the network that comes along with Peggy is as high quality as she is herself.",
        "I felt safe that Peggy was always looking out for my best interest, and trust every recommendation she could give - and absolutely respect the fact that at the end of the day, Peggy makes sure she gives you all the tools and advice you need to make your own informed decisions.",
        "Though I hope I won't have to for a while (she helped me find a home I love, after all!) I would absolutely work again with her in a heartbeat.",
      ],
    },
    {
      title: "\u201cWe're so happy with how the process went!\u201d",
      attribution: "Sold with Peggy in Burbank.",
      body: [
        "Peggy is an absolute gem and we would use her over and over again! She made our recent selling experience a breeze. We had decent expectations considering the state of the market but she blew them out of the water and we're so happy with how the process went as a whole.",
        "She's personable and warm, yet firm when it comes to business. It's clear she puts her clients interests before her own, which is not only rare to find but really reassuring when you're doing something as big as selling or buying your home.",
      ],
      more: [
        "She invested a lot into putting our home on the market in its absolute best state, advocated for our interests, and took the time to get to know us and our situation personally so that she could best meet our needs. She's knowledgeable, experienced and overall just so special.",
        "If you're considering going with Peggy, don't hesitate!",
      ],
    },
    {
      title: "\u201cWould work with her again and again!\u201d",
      attribution: "Bought AND Sold with Peggy in Pasadena.",
      body: [
        "I've worked with Peggy in both the purchase and eventual sale of my home.",
        "I can always count on her to be knowledgeable, responsive and helpful. Plus, her team of references is just as solid.",
        "Would work with her again and again!",
      ],
      more: [] as string[],
    },
  ];

  // Source: social links on Peggy's original site (GHL archive footer).
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/PeggyLimRealEstate" },
    { label: "Instagram", href: "https://www.instagram.com/peggylimrealtor/" },
    { label: "Redfin", href: "https://www.redfin.com/real-estate-agents/peggy-lim" },
    {
      label: "Yelp",
      href: "https://www.yelp.com/biz/peggy-lim-real-estate-exp-realty-of-california-inc-alhambra",
    },
    { label: "Zillow", href: "https://www.zillow.com/profile/peggy9449" },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <Image
              src="/images/ms-alhambra-logo.png"
              alt="Ms. Alhambra Real Estate"
              width={185}
              height={116}
              priority
              className="h-14 w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-gray-600">
            <a href="#about" className="hover:text-gold transition-colors">
              About Us
            </a>
            <a href="#sales" className="hover:text-gold transition-colors">
              Sales
            </a>
            <a href="#process" className="hover:text-gold transition-colors">
              Our Process
            </a>
            <a
              href="#valuation"
              className="hover:text-gold transition-colors"
            >
              Free Home Valuation
            </a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-dark-section text-white py-28 sm:py-36">
        <Image
          src="/images/hero-mountain-skyline.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We help you set down roots.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re buying or selling, I&apos;m here to help you
            find your way home.
          </p>
          <a
            href="#valuation"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md text-lg tracking-wide transition-colors shadow-lg"
          >
            Get a FREE CONSULTATION!
          </a>
        </div>
      </section>

      {/* ========== IS THIS YOU? ========== */}
      <section className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-16">
            Is This You?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: "Worried your agent isn't looking out for you?",
                text: "You feel like just another transaction. Your agent is hard to reach, slow to respond, and doesn't seem to understand what matters to you.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                ),
                title: "Feeling pushed into something you're not sure about?",
                text: "High-pressure tactics, confusing timelines, and aggressive upsells. You just want honest guidance from someone who puts your needs first.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: "Scared of legal trouble or costly mistakes?",
                text: "Real estate contracts are complex. One missed detail can cost you thousands. You deserve an expert who catches problems before they happen.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== I'M HERE TO HELP (Bio) ========== */}
      <section id="about" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gray-section rounded-2xl aspect-[3/4] overflow-hidden">
              <Image
                src="/images/peggy-lim-headshot.jpg"
                alt="Peggy Lim, Ms. Alhambra Real Estate"
                fill
                sizes="(min-width: 1152px) 528px, (min-width: 768px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-6">
                I&apos;m Here to Help
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi, I&apos;m Peggy Lim. I&apos;m a daughter of immigrants, a
                second-generation realtor, and I grew up watching my parents
                build something from nothing in the San Gabriel Valley.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before real estate, I spent years in banking, where I learned
                the financial side of homeownership inside and out. That
                experience gives my clients an edge most agents can&apos;t
                offer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I&apos;m fluent in Korean and deeply rooted in this community.
                As a mother of two, I understand what it means to find the
                right home for your family.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My mission is simple: treat every client like family. No
                pressure, no games. Just honest, expert guidance from start to
                close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT'S IT LIKE WORKING WITH PEGGY? ========== */}
      <section id="process" className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-16">
            What&apos;s It Like Working with Peggy?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Free Consultation",
                text: "We start with a no-pressure conversation to understand your goals, timeline, and what matters most to you. No obligations, just clarity.",
              },
              {
                step: "02",
                title: "I Handle the Work",
                text: "From market research and negotiations to inspections and paperwork, I manage every detail so you don't have to. You stay informed, never overwhelmed.",
              },
              {
                step: "03",
                title: "Five Star Closing",
                text: "We cross the finish line together with confidence. A smooth, stress-free closing experience is my standard, not the exception.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold font-[family-name:var(--font-montserrat)] font-bold text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE MS. ALHAMBRA DIFFERENCE ========== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-8">
            The Ms. Alhambra Difference
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In a market full of agents chasing commissions, I chose a different
            path. I&apos;m not here to sell you a house. I&apos;m here to help
            you find the right one, and to protect your interests every step of
            the way.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            When you work with me, you get a trusted advisor with deep local
            knowledge, a sharp financial mind, and the patience to do this
            right. That&apos;s the Ms. Alhambra difference.
          </p>
          <a
            href="#valuation"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-md tracking-wide transition-colors"
          >
            Work With Peggy
          </a>
        </div>
      </section>

      {/* ========== RECENT SALES ========== */}
      <section id="sales" className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-16">
            Recent Sales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative bg-gray-200 h-48 overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={`${prop.address}, ${prop.cityLine}`}
                    fill
                    sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <p className="text-gold font-[family-name:var(--font-montserrat)] font-bold text-xl mb-1">
                    {prop.price}
                  </p>
                  <p className="font-medium text-gray-900">{prop.address}</p>
                  <p className="text-gray-700 mb-2">{prop.cityLine}</p>
                  <p className="text-sm text-gray-500">{prop.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECENT TESTIMONIALS ========== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-16">
            Recent Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-gray-section rounded-xl p-8">
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-1">
                  {t.title}
                </h3>
                <figcaption className="text-sm text-gray-500 mb-4">
                  {t.attribution}
                </figcaption>
                <blockquote className="text-gray-600 leading-relaxed space-y-4">
                  {t.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                  {t.more.length > 0 && (
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-gold-dark hover:text-gold list-none">
                        <span className="group-open:hidden">Read more</span>
                        <span className="hidden group-open:inline">Read less</span>
                      </summary>
                      <div className="space-y-4 mt-4">
                        {t.more.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </details>
                  )}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FREE RESOURCE CTA ========== */}
      <section id="valuation" className="bg-dark-section text-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-6">
            Find out your home&apos;s true value!
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Curious what your property is worth in today&apos;s market? Get a
            free, no-obligation home valuation from a trusted local expert.
          </p>
          <a
            href="mailto:peggylimhomes@gmail.com?subject=Free Home Valuation Request"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md text-lg tracking-wide transition-colors shadow-lg"
          >
            Get Your FREE Home Valuation
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/ms-alhambra-logo.png"
                alt="Ms. Alhambra Real Estate"
                width={185}
                height={116}
                className="h-16 w-auto mb-3"
              />
              <p className="text-sm text-gray-500">
                eXp Realty of California, Inc.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">PEGGY LIM</p>
              <p className="text-sm text-gray-600">CA DRE #02040293</p>
              <p className="text-sm text-gray-600 mt-1">
                Cell:{" "}
                <a
                  href="tel:6262902869"
                  className="hover:text-gold transition-colors"
                >
                  (626) 290-2869
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Office:{" "}
                <a
                  href="tel:8888327179"
                  className="hover:text-gold transition-colors"
                >
                  (888) 832-7179
                </a>
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">Contact</p>
              <p className="text-sm text-gray-600">
                <a
                  href="mailto:peggylimhomes@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  peggylimhomes@gmail.com
                </a>
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Peggy Lim on social media">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline underline-offset-2 hover:text-gold transition-colors"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Ms. Alhambra Real Estate. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
