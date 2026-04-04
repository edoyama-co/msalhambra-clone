export default function Home() {
  const properties = [
    {
      address: "309 California St, Arcadia",
      price: "$853,000",
      beds: 3,
      baths: 2,
      sqft: "1,450",
    },
    {
      address: "6673 Lessie Ln, Highland",
      price: "$580,000",
      beds: 4,
      baths: 2,
      sqft: "1,800",
    },
    {
      address: "4145 Yale St, Alhambra",
      price: "$3,420,000",
      beds: 6,
      baths: 5,
      sqft: "4,200",
    },
    {
      address: "2936 Grayburn St, El Monte",
      price: "$820,000",
      beds: 3,
      baths: 2,
      sqft: "1,380",
    },
    {
      address: "11300 Mt Gleason, Sunland",
      price: "$1,483,000",
      beds: 4,
      baths: 3,
      sqft: "2,600",
    },
    {
      address: "4145 Yale St, Alhambra",
      price: "$3,420,000",
      beds: 5,
      baths: 4,
      sqft: "3,800",
    },
  ];

  const testimonials = [
    {
      name: "David & Lisa T.",
      text: "Peggy made the entire process feel effortless. She was always one step ahead, and we never felt pressured. We found our dream home in Alhambra thanks to her!",
    },
    {
      name: "Jennifer K.",
      text: "As a first-time seller, I was nervous about every detail. Peggy walked me through everything, handled every complication, and got us above asking price. Truly five stars.",
    },
    {
      name: "Michael & Sarah R.",
      text: "We interviewed three agents before choosing Peggy. Best decision we made. She genuinely cares about her clients and it shows in every interaction.",
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="font-[family-name:var(--font-montserrat)] text-xl font-bold tracking-widest text-dark-section">
            MS. ALHAMBRA
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
      <section className="relative bg-dark-section text-white py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40" />
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
            <div className="bg-gray-section rounded-2xl aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
                <p className="text-sm">Photo of Peggy</p>
              </div>
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
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div className="p-5">
                  <p className="text-gold font-[family-name:var(--font-montserrat)] font-bold text-xl mb-1">
                    {prop.price}
                  </p>
                  <p className="font-medium text-gray-900 mb-2">
                    {prop.address}
                  </p>
                  <p className="text-sm text-gray-500">
                    {prop.beds} bed &middot; {prop.baths} bath &middot;{" "}
                    {prop.sqft} sqft
                  </p>
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
              <div key={i} className="bg-gray-section rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-sm">
                  {t.name}
                </p>
              </div>
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
              <p className="font-[family-name:var(--font-montserrat)] font-bold text-lg tracking-widest mb-2">
                MS. ALHAMBRA
              </p>
              <p className="text-sm text-gray-500">
                eXp Realty of California, Inc.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">PEGGY LIM</p>
              <p className="text-sm text-gray-600">CA DRE #02040295</p>
              <p className="text-sm text-gray-600 mt-1">
                Cell:{" "}
                <a
                  href="tel:6262952569"
                  className="hover:text-gold transition-colors"
                >
                  (626) 295-2569
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Office:{" "}
                <a
                  href="tel:8818327179"
                  className="hover:text-gold transition-colors"
                >
                  (881) 832-7179
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
