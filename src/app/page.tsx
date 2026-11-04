import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#sales", label: "Sales" },
  { href: "#process", label: "Our Process" },
  { href: "#valuation", label: "Free Home Valuation" },
];

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

  // Property photos from the original testimonial cards, in the original
  // left-to-right order (GHL archive): Glendale, Burbank, Pasadena.
  const testimonialPhotos = [
    { src: "/images/testimonial-glendale.jpg", width: 500, height: 375, alt: "Living room of the Glendale home" },
    { src: "/images/testimonial-burbank.jpg", width: 500, height: 281, alt: "Living room of the Burbank home" },
    { src: "/images/testimonial-pasadena.jpg", width: 500, height: 333, alt: "Front of the Pasadena home at sunset" },
  ];

  // Source: social links on Peggy's original site (GHL archive footer).
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/PeggyLimRealEstate" },
    { label: "Instagram", href: "https://www.instagram.com/peggylimrealtor/" },
    {
      label: "Yelp",
      href: "https://www.yelp.com/biz/peggy-lim-real-estate-exp-realty-of-california-inc-alhambra",
    },
    { label: "Zillow", href: "https://www.zillow.com/profile/peggy9449" },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* ========== HEADER ========== */}
      {/* Logo at the original GHL size: 185x116 on desktop, 108x68 on mobile. */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[84px] md:h-[146px]">
          <a href="#" className="flex items-center">
            <Image
              src="/images/ms-alhambra-logo.png"
              alt="Ms. Alhambra Real Estate"
              width={185}
              height={116}
              priority
              className="h-[68px] md:h-[116px] w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-gray-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <MobileMenu links={navLinks} />
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-dark-section text-white py-28 sm:py-36">
        <Image
          src="/images/hero-living-room.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We help you set down roots.
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re buying or selling, I&apos;m here to help you
            find your way home.
          </p>
          <a
            href="#valuation"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md text-lg tracking-wide transition-colors shadow-lg"
          >
            <span className="block">Get a FREE CONSULTATION!</span>
            <span className="block text-sm font-normal tracking-normal text-gray-800">
              No obligation!
            </span>
          </a>
        </div>
      </section>

      {/* ========== IS THIS YOU? ========== */}
      {/* Copy below is verbatim from Peggy's original site (GHL archive,
          2026-05-10; matches Wayback 2026-04-19). Do not rewrite. */}
      <section className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-4">
            Is this you?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />
          <div className="space-y-8 text-lg sm:text-xl text-gray-800 leading-relaxed">
            <p>
              Are you worried that your agent will just try to get the sale
              first and put your needs second?
            </p>
            <p>
              Or that you&apos;ll be pushed into doing and signing things
              without knowing what you&apos;re doing?
            </p>
            <p>
              Or even worse - that you&apos;ll end up in legal trouble if you
              don&apos;t list your home the right way?
            </p>
          </div>
        </div>
      </section>

      {/* ========== I'M HERE TO HELP (Bio) ========== */}
      <section id="about" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-12">
            I&apos;m here to help!
          </h2>
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-start">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">
                  I&apos;m Ms. Alhambra - Peggy Lim, your personal real estate
                  specialist!
                </strong>
                <br />
                I take the time to get to know my clients the way I know and
                love my neighborhood, and I&apos;m known for the way I put
                people first in every transaction.
              </p>
              <p>
                I was born and raised in Los Angeles, I&apos;m a daughter of
                immigrants, and a proud mother of two.{" "}
                <strong className="text-gray-900">
                  As a second-generation realtor
                </strong>{" "}
                following in the footsteps of my late father, I bring a unique
                blend of passion and commitment to helping people achieve their
                real estate goals.
              </p>
              <p>
                Watching my parents work tirelessly and give back to our
                community, church, and anyone in need, instilled in me a deep
                sense of service and dedication.
              </p>
            </div>
            <div className="relative bg-gray-section aspect-[5/7] overflow-hidden">
              <Image
                src="/images/peggy-lim-headshot.jpg"
                alt="Peggy Lim, Ms. Alhambra Real Estate"
                fill
                sizes="(min-width: 1152px) 400px, (min-width: 768px) 38vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-12 items-start">
            <div className="space-y-5">
              <Image
                src="/images/bio-closing-keys.jpg"
                alt="Peggy Lim with a client holding the keys to her new home"
                width={700}
                height={525}
                sizes="(min-width: 1152px) 420px, (min-width: 768px) 38vw, 100vw"
                className="w-full h-auto"
              />
              <Image
                src="/images/bio-closing-day-sign.jpg"
                alt="Peggy Lim with a client holding a closing day sign"
                width={960}
                height={640}
                sizes="(min-width: 1152px) 420px, (min-width: 768px) 38vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">
                  With a background in banking, business development, and
                  customer service,
                </strong>{" "}
                I have honed my skills to become a client-centric realtor. I am
                committed to providing not only an exceptional real estate
                experience, but also fostering meaningful relationships that
                transcend transactions and develop into lifelong friendships.
              </p>
              <p>
                <strong className="text-gray-900">
                  Fluent in Korean, I am well-equipped to serve a diverse
                  clientele.
                </strong>{" "}
                My father&apos;s legacy of generosity and service continues to
                inspire me as I strive to make a positive impact in the lives
                of my clients and community.
              </p>
              <p>
                <strong className="text-gray-900">
                  Whether you&apos;re buying your first home or selling your
                  current property, I&apos;m here to help you every step of the
                  way!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT'S IT LIKE WORKING WITH PEGGY? ========== */}
      <section id="process" className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-16">
            What&apos;s it like working with Peggy?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "FREE CONSULTATION",
                text: "We always start with a free consultation where I take the time to really get to know you and what you're looking for!",
              },
              {
                step: "02",
                title: "I HANDLE THE WORK",
                text: "Whether you're buying or selling, I go to work for you - navigating the market on your behalf and always in close communication with you!",
              },
              {
                step: "03",
                title: "FIVE STAR CLOSING",
                text: "I handle every last detail of the transaction with the utmost care so that you get a seamless and stress-free experience!",
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
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-8">
            The Ms. Alhambra Difference
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong className="text-gray-900">
              Many of my clients come to me overwhelmed and nervous.
            </strong>{" "}
            They&apos;re not sure whether or not they can get what they&apos;re
            looking for - and they&apos;re so busy in their home and
            professional responsibilities that they can&apos;t study up on the
            details themselves!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-gray-900">
              That&apos;s where I come in. I love being the trusted advisor in
              your corner,
            </strong>{" "}
            who listens to your hopes and dreams, gives you clarity on what you
            need to know, and works on your behalf to help you build a future
            for yourself and your family!
          </p>
        </div>
      </section>

      {/* ========== RECENT SALES ========== */}
      <section id="sales" className="bg-gray-section py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header lines verbatim from the original /sales page. */}
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-center mb-4">
            Our Recent Sales
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-lg sm:text-xl text-gray-700 text-center">
            Discover the Latest Properties We’ve Successfully Closed.
          </p>
          <p className="font-[family-name:var(--font-montserrat)] text-lg sm:text-xl font-semibold text-gray-900 text-center mb-16">
            Your Dream Home Could Be Next!
          </p>
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
              <figure key={i} className="bg-gray-section rounded-xl overflow-hidden">
                <Image
                  src={testimonialPhotos[i].src}
                  alt={testimonialPhotos[i].alt}
                  width={testimonialPhotos[i].width}
                  height={testimonialPhotos[i].height}
                  sizes="(min-width: 1152px) 352px, (min-width: 768px) 30vw, 100vw"
                  className="w-full h-auto"
                />
                <div className="p-8">
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
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FREE RESOURCE CTA ========== */}
      {/* Copy verbatim from the original. The original button went to the old
          eXp valuation tool; it now opens an email to Peggy instead. */}
      <section id="valuation" className="bg-dark-section text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[2/3] max-h-[560px] w-full max-w-sm mx-auto overflow-hidden">
            <Image
              src="/images/valuation-kitchen.jpg"
              alt="Bright modern kitchen"
              fill
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-2">
              FREE RESOURCE:
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-6">
              Find out your home&apos;s true value!
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Just enter your address, your name, and your email to get
              started! <em>No obligation!</em>
            </p>
            <a
              href="mailto:peggylimhomes@gmail.com?subject=Free Home Valuation Request"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md text-lg tracking-wide transition-colors shadow-lg"
            >
              <span className="block">Yes - I want my free housing report!</span>
              <span className="block text-sm font-normal tracking-normal text-gray-800">
                No obligation!
              </span>
            </a>
          </div>
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
