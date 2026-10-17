import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import reel10 from './assets/reels/reel-10.jpg';
import yt16 from './assets/youtube/yt-16.jpg';
import { track } from './analytics';

// Captions for the numbered photo frames. Replace a frame with a real photo by
// passing `src` to <Photo>.
const PHOTOS: Record<number, string> = {
  1: 'Founders or entrepreneurs at a HOKS workshop',
  2: 'You or a speaker presenting on stage',
  3: 'Launchpad participants working on their business plans',
  4: 'Networking event: people talking in small groups',
  5: 'Founders Network members at a meetup',
  6: 'Course cover: Idea to Business',
  7: 'Course cover: Business Setup Explained',
  8: 'Course cover: Marketing & Sales',
  9: 'Course cover: Fundraising Fundamentals',
  10: 'Instagram post', 11: 'Instagram post', 12: 'Instagram post', 13: 'Instagram post', 14: 'Instagram post', 15: 'Instagram post',
  16: 'YouTube video thumbnail', 17: 'YouTube thumbnail', 18: 'YouTube thumbnail',
  19: 'College workshop with students',
  20: 'Best group photo from an event', 21: 'Pitch night in progress', 22: 'Award or certificate moment', 23: 'Event stage or crowd, wide shot',
};

const LOGO = `${import.meta.env.BASE_URL}logo.jpg`;

// Instagram reels shown in the feed tiles, keyed by photo number.
const REELS: Record<number, { url: string; thumb?: string; title: string }> = {
  10: { url: 'https://www.instagram.com/reel/DaFnivDvtaC/', thumb: reel10, title: 'The Trap: fake claims today, heavy penalties tomorrow' },
};

const INSTAGRAM = [
  { handle: '@the_hoks_academy', url: 'https://www.instagram.com/the_hoks_academy' },
];
const YOUTUBE = { handle: '@TheHouseofKanakkars', url: 'https://www.youtube.com/@TheHouseofKanakkars' };

const EMAIL = 'thehoks01@gmail.com';
const PHONE = '+91 88079 74452';
const PHONE_RAW = '918807974452';

const ar = (ratio: string, extra: CSSProperties = {}) => ({ '--ar': ratio, ...extra }) as CSSProperties;

interface PhotoProps {
  n: number;
  className?: string;
  style?: CSSProperties;
  src?: string;
}

const Photo = ({ n, className = '', style, src }: PhotoProps) => {
  const cap = PHOTOS[n] ?? '';
  return (
    <figure className={`photo ${className}`.trim()} style={style} aria-label={src ? undefined : `Photo ${n} placeholder: ${cap}`}>
      {src ? (
        <img src={src} alt={cap} />
      ) : (
        <div className="in">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z" /><circle cx="12" cy="13" r="3.6" /></svg>
          <b>Photo {n}</b>
          <small>{cap}</small>
        </div>
      )}
    </figure>
  );
};

const Arr = ({ children = '→' }: { children?: string }) => <span className="arr">{children}</span>;

const NAV_LINKS = [
  ['#launchpad', 'Start a Business'],
  ['#setup', 'Business Setup'],
  ['#events', 'Networking'],
  ['#online', 'Online Classes'],
  ['#colleges', 'For Colleges'],
  ['#social', 'Follow Us'],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="top">
      <div className={`wrap nav${open ? ' open' : ''}`} id="nav">
        <a className="logo" href="#top" aria-label="The HOKS Academy home"><img src={LOGO} alt="The HOKS Academy" /></a>
        <ul id="menu">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <a className="btn btn-brass" href="#contact">Talk to us <Arr /></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>Menu</button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="wrap hero-grid">
      <div>
        <div className="label">Business consulting · Founder programs · Networking</div>
        <h1><span>Build it right,</span><span><em>from day one.</em></span></h1>
        <p className="lede">HOKS helps aspiring entrepreneurs turn ideas into real businesses. We guide you from ideation to setup to fundraising, and connect you with the founders, mentors and investors who can help you grow.</p>
        <div className="ctas">
          <a className="btn btn-brass" href="#launchpad">Start your business <Arr /></a>
          <a className="btn btn-line" href="#events">Join a networking event</a>
        </div>
        <div className="pillars">
          <div><b>Start</b><span>From idea to launch</span></div>
          <div><b>Set up</b><span>Registered and compliant</span></div>
          <div><b>Connect</b><span>Founders, mentors, investors</span></div>
        </div>
      </div>
      <div className="hero-photos">
        <Photo n={1} />
        <Photo n={2} className="small" />
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="alt" id="services">
    <div className="wrap">
      <div className="head">
        <div className="label">What we do</div>
        <h2>Start it. Set it up. <em>Grow it with the right people.</em></h2>
      </div>
      <div className="svc-main">
        <a href="#launchpad"><span className="num">i.</span><span className="label">For aspiring entrepreneurs</span><h4>HOKS Launchpad</h4><p>A step-by-step program that takes you from a raw idea to a launched, investor-ready business.</p><span className="go">Explore Launchpad →</span></a>
        <a href="#setup"><span className="num">ii.</span><span className="label">For new businesses</span><h4>Business Setup Consultation</h4><p>The right structure, registrations and compliance, so your business stands on solid ground from day one.</p><span className="go">Book a consultation →</span></a>
        <a href="#events"><span className="num">iii.</span><span className="label">For founders and professionals</span><h4>HOKS Connect</h4><p>Meetups, pitch nights and investor evenings that put you in the right rooms with the right people.</p><span className="go">See upcoming events →</span></a>
      </div>
      <div className="svc-more">
        <a href="#online"><div><b>Online Classes</b><span>Learn business at your own pace</span></div><i>→</i></a>
        <a href="#social"><div><b>Instagram &amp; YouTube</b><span>Free business lessons every week</span></div><i>→</i></a>
        <a href="#colleges"><div><b>College Workshops</b><span>Career, business and money training</span></div><i>→</i></a>
      </div>
    </div>
  </section>
);

const STAGES = [
  ['Ideation', 'Find a problem worth solving and shape it into a clear, focused business idea.'],
  ['Validation', 'Talk to real customers, test demand and build the simplest version of your product.'],
  ['Business planning', 'Work out your business model, pricing, costs and the numbers that matter.'],
  ['Setup', 'Choose the right structure, register your business and put compliance in place.'],
  ['Launch and marketing', 'Build your brand, sell on social media and win your first customers.'],
  ['Fundraising', 'Understand grants, angel investors and venture capital, and build an investor-ready pitch deck.'],
];

const Launchpad = () => (
  <section id="launchpad">
    <div className="wrap">
      <div className="head">
        <div className="label">For aspiring entrepreneurs</div>
        <h2>HOKS Launchpad: <em>from idea to investment.</em></h2>
        <p className="lede">Most new businesses struggle because founders do the right things in the wrong order. Launchpad walks you through every stage with expert guidance, so you build a business that is ready for customers and investors.</p>
      </div>
      <div className="lp">
        <div className="lp-side">
          <Photo n={3} />
          <div className="facts">
            <div><span>Format</span><b>Weekend workshop or 6-week cohort</b></div>
            <div><span>Mode</span><b>In person and online</b></div>
            <div><span>Next batch</span><b className="ph">DD Month 2027</b></div>
            <div><span>Fee</span><b className="ph">₹ ____</b></div>
          </div>
          <a className="btn btn-brass" href="#contact" style={{ justifySelf: 'start' }}>Reserve your seat <Arr /></a>
        </div>
        <ol className="stages">
          {STAGES.map(([title, desc], i) => (
            <li key={title}><span className="stop">{String(i + 1).padStart(2, '0')}</span><div><h4>{title}</h4><p>{desc}</p></div></li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const SETUP_ITEMS = [
  ['Choosing your structure', 'Proprietorship, partnership, LLP, OPC or private limited: what fits your plans.'],
  ['Company and LLP registration', 'Guidance through incorporation, PAN, TAN and documentation.'],
  ['GST registration', 'When you need it, how to register and how to file correctly.'],
  ['MSME (Udyam) registration', 'Unlock government schemes, subsidies and easier credit.'],
  ['Startup India recognition', 'DPIIT recognition and the tax and funding benefits it brings.'],
  ['Trademark for your brand', 'Protect your business name and logo before someone else claims them.'],
  ["Founders' agreement", 'Equity split, roles and exit terms agreed in writing from the start.'],
  ['Banking and accounts', 'Current account, bookkeeping and accounting setup that scales.'],
  ['Compliance calendar', 'Every filing and deadline for the year, in one simple plan.'],
];

const SETUP_STEPS = [
  ['Free discovery call', 'Tell us about your business and your plans.'],
  ['Your setup plan', 'A clear recommendation on structure, registrations and costs.'],
  ['Registration support', 'We guide every step, working with trusted CAs and legal partners.'],
  ['Ongoing guidance', 'Stay on top of compliance as your business grows.'],
];

const Setup = () => (
  <section className="alt" id="setup">
    <div className="wrap">
      <div className="head">
        <div className="label">Business setup consultation</div>
        <h2>Set up your business <em>correctly from day one.</em></h2>
        <p className="lede">Wrong decisions at the start cost time, money and stress later. Our consultants help you choose the right structure, complete the right registrations and stay compliant as you grow.</p>
      </div>
      <div className="setup-grid">
        {SETUP_ITEMS.map(([title, desc]) => <div key={title}><h4>{title}</h4><p>{desc}</p></div>)}
      </div>
      <ol className="how">
        {SETUP_STEPS.map(([title, desc], i) => (
          <li key={title}><span className="stop">{String(i + 1).padStart(2, '0')}</span><h4>{title}</h4><p>{desc}</p></li>
        ))}
      </ol>
      <div style={{ marginTop: 44 }}><a className="btn btn-brass" href="#contact">Book a free discovery call <Arr /></a></div>
    </div>
  </section>
);

const Events = () => (
  <section id="events">
    <div className="wrap">
      <div className="ev">
        <div>
          <div className="head" style={{ marginBottom: 0 }}>
            <div className="label">Networking events</div>
            <h2>HOKS Connect: <em>your network is your net worth.</em></h2>
            <p className="lede">Great opportunities come from the right rooms. HOKS Connect brings founders, aspiring entrepreneurs, mentors, professionals and investors together, in person and with purpose.</p>
          </div>
          <div className="ev-types">
            <div><h4>Founder Meetups</h4><p>Share progress, problems and wins with founders at your stage.</p></div>
            <div><h4>Investor Evenings</h4><p>Pitch to angel investors and learn what they look for.</p></div>
            <div><h4>Pitch Nights</h4><p>Present your idea, get honest feedback and win recognition.</p></div>
            <div><h4>Business Mixers</h4><p>Meet partners, suppliers, clients and collaborators.</p></div>
          </div>
        </div>
        <div>
          <Photo n={4} />
          <ul className="upcoming" aria-label="Upcoming events">
            {['Founder Meetup', 'Investor Evening', 'Pitch Night'].map(title => (
              <li key={title}>
                <div className="date"><b className="ph">__</b><span className="ph">Mon</span></div>
                <div><h4>{title}</h4><p className="ph">City · Venue</p></div>
                <a href="#contact">Register →</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="join">
        <div>
          <div className="label">Membership</div>
          <h3>Join the HOKS Founders Network</h3>
          <p style={{ color: 'var(--muted)' }}>A year-round community for people building businesses. Stay connected between events and get help when you need it.</p>
          <ul>
            <li>Priority entry to every HOKS Connect event</li>
            <li>Private founders' community group</li>
            <li>Monthly mentor sessions and expert AMAs</li>
            <li>Introductions to investors and service partners</li>
            <li>Member discounts on Launchpad and setup services</li>
          </ul>
        </div>
        <div>
          <div className="price"><span className="ph">₹ ____</span> <small>/ year</small></div>
          <p style={{ color: 'var(--muted)' }}>Open to founders, aspiring entrepreneurs and professionals who want to build.</p>
          <a className="btn btn-brass" href="#contact" style={{ justifySelf: 'start' }}>Become a member <Arr /></a>
          <Photo n={5} style={ar('16/10', { marginTop: 8 })} />
        </div>
      </div>
    </div>
  </section>
);

const COURSES = [
  [6, 'Idea to Business', 'Find, test and shape an idea into a business people will pay for.'],
  [7, 'Business Setup Explained', 'Structures, registrations and compliance in plain language.'],
  [8, 'Marketing & Sales', 'Win customers with social media, branding and simple sales systems.'],
  [9, 'Fundraising Fundamentals', 'Grants, angels and VCs, plus how to build a pitch deck that gets read.'],
] as const;

const Online = () => (
  <section className="alt" id="online">
    <div className="wrap">
      <div className="head">
        <div className="label">Online classes</div>
        <h2>Learn business <em>anytime, anywhere.</em></h2>
        <p className="lede">Self-paced video courses with worksheets, templates and live doubt-clearing sessions. Built for busy founders and future entrepreneurs.</p>
      </div>
      <div className="courses">
        {COURSES.map(([n, title, desc]) => (
          <article className="course" key={title}>
            <Photo n={n} />
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className="meta"><span>Self-paced</span><span className="ph">₹ ____</span></div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 44 }}><a className="btn btn-line" href="#contact">Enrol in a course <Arr /></a></div>
    </div>
  </section>
);

const Social = () => (
  <section id="social">
    <div className="wrap">
      <div className="head">
        <div className="label">Follow HOKS</div>
        <h2>Free business lessons <em>every week.</em></h2>
        <p className="lede">Short, practical videos on starting, running and growing a business. Learn something useful in a minute a day.</p>
      </div>
      <div className="social">
        <article className="sc">
          <div className="sc-top">
            <div className="sc-ic"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></svg></div>
            <div><h4>Instagram</h4><span>{INSTAGRAM.map(i => i.handle).join(' · ')}</span></div>
          </div>
          <p>Reels and carousels on business ideas, startup lessons and founder stories.</p>
          {/* Only the reel for now. Restore the other tiles with [10, 11, 12, 13, 14, 15] and drop the "single" class. */}
          <div className="feed single">
            {[10 /* , 11, 12, 13, 14, 15 */].map(n => REELS[n] ? (
              <a key={n} className={`photo reel${REELS[n].thumb ? ' has-thumb' : ''}`} href={REELS[n].url} target="_blank" rel="noopener" aria-label={`Watch on Instagram: ${REELS[n].title}`}>
                {REELS[n].thumb && <img src={REELS[n].thumb} alt="" loading="lazy" />}
                <div className="in">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M10 8.5v7l5.5-3.5z" /></svg>
                  <b>Watch reel</b>
                </div>
              </a>
            ) : <Photo key={n} n={n} />)}
          </div>
          <div className="sc-btns">
            {INSTAGRAM.map(i => (
              <a key={i.url} className="btn btn-brass" href={i.url} target="_blank" rel="noopener">Follow {i.handle} <Arr>↗</Arr></a>
            ))}
          </div>
        </article>
        <article className="sc yt">
          <div className="sc-top">
            <div className="sc-ic"><svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.2v5.6l4.8-2.8z" /></svg></div>
            <div><h4>YouTube</h4><span>{YOUTUBE.handle}</span></div>
          </div>
          <p>Full-length business guides, event highlights and conversations with founders.</p>
          <a className="photo reel has-thumb" href={YOUTUBE.url} target="_blank" rel="noopener" aria-label={`Visit our YouTube channel ${YOUTUBE.handle}`}>
            <img src={yt16} alt="" loading="lazy" />
            <div className="in">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M10 8.5v7l5.5-3.5z" /></svg>
              <b>Watch on YouTube</b>
            </div>
          </a>
          {/* Only the channel thumbnail for now. Restore the smaller video tiles with:
          <div className="yt-list"><Photo n={17} /><Photo n={18} /></div> */}
          <a className="btn btn-brass" href={YOUTUBE.url} target="_blank" rel="noopener" style={{ justifySelf: 'start' }}>Subscribe on YouTube <Arr>↗</Arr></a>
        </article>
      </div>
    </div>
  </section>
);

const Colleges = () => (
  <section className="alt" id="colleges">
    <div className="wrap">
      <div className="head">
        <div className="label">For colleges</div>
        <h2>Campus workshops that <em>prepare students for what's next.</em></h2>
        <p className="lede">We also bring HOKS training to colleges and universities through three focused programs.</p>
      </div>
      <div className="cw">
        <article><div className="label">Industry-ready training</div><h4>Career Edge</h4><div className="tag">From classroom to corporate, with confidence.</div>
          <ul><li>Communication and presentations</li><li>Resume, LinkedIn and interviews</li><li>Workplace skills and AI tools</li></ul></article>
        <article><div className="label">Entrepreneurial skills</div><h4>Founder's Mindset</h4><div className="tag">Think like a founder, whatever career you choose.</div>
          <ul><li>Spotting opportunities</li><li>Idea validation and business models</li><li>Live pitch round</li></ul></article>
        <article><div className="label">Money mind training</div><h4>Money Mind</h4><div className="tag">Master your money before it masters you.</div>
          <ul><li>Budgeting and saving</li><li>Investing basics: SIPs, funds, stocks</li><li>Credit, tax basics and avoiding scams</li></ul></article>
      </div>
      <div className="cw-foot">
        <Photo n={19} style={ar('16/9')} />
        <div style={{ display: 'grid', gap: 16 }}>
          <p>Available as a guest session, a 1-day workshop or a 2-day bootcamp. Every college receives participant certificates and a detailed event report with photos.</p>
          <a className="btn btn-line" href="#contact" style={{ justifySelf: 'start' }}>Book a college workshop <Arr /></a>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery">
    <div className="wrap">
      <div className="head">
        <div className="label">Moments from HOKS</div>
        <h2>Inside our <em>programs and events.</em></h2>
      </div>
      <div className="gallery">
        <Photo n={20} className="g1" />
        <Photo n={21} />
        <Photo n={22} />
        <Photo n={23} className="g4" />
      </div>
      <div className="nums" style={{ marginTop: 56 }}>
        <div><b className="ph">__+</b><span>Businesses guided</span></div>
        <div><b className="ph">__+</b><span>Founders in our network</span></div>
        <div><b className="ph">__+</b><span>Events hosted</span></div>
        <div><b className="ph">__K</b><span>Followers</span></div>
      </div>
    </div>
  </section>
);

const INTERESTS = [
  'HOKS Launchpad: start my business',
  'Business setup consultation',
  'HOKS Connect events',
  'Founders Network membership',
  'Online classes',
  'College workshop',
  'Something else',
];

// Web3Forms delivers submissions to the inbox registered with this key. The key
// is meant to be public: it can only send mail to that inbox.
const WEB3FORMS_KEY = '073e49ad-14b8-4ab1-944c-14ea01b6464f';

const Contact = () => {
  const [msg, setMsg] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setMsg('Please add your name and a valid email address so we can reply.');
      return;
    }

    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', `New enquiry from ${name}: ${data.get('interest')}`);
    data.append('from_name', 'HOKS Website');

    setSending(true);
    setMsg(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      track('generate_lead', { interest: String(data.get('interest') ?? '') });
      form.reset();
      setMsg("Thank you! Your message has reached the HOKS team. We'll reply within two working days.");
    } catch {
      setMsg(`Sorry, your message could not be sent. Please try again, or email us at ${EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap c-grid">
        <div>
          <div className="label">Get in touch</div>
          <h2 style={{ margin: '18px 0 20px' }}>Let's build <em>your business.</em></h2>
          <p className="lede">Tell us where you are and what you need. We reply within two working days.</p>
          <div className="contacts">
            <div><span>Email</span><b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></b></div>
            <div><span>Phone / WhatsApp</span><b><a href={`tel:+${PHONE_RAW}`}>{PHONE}</a></b> · <a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noopener">WhatsApp ↗</a></div>
            <div><span>Office</span><address>House of Kanakkar's Private Limited<br />No 3/1028-2, SR Naidu Nagar, VC Puram,<br />Venkatachalapuram, Sattur,<br />Virudhunagar 626203, Tamil Nadu</address></div>
          </div>
        </div>
        <form noValidate onSubmit={onSubmit}>
          <label className="fld">Full name<input name="name" required autoComplete="name" /></label>
          <label className="fld">Email<input name="email" type="email" required autoComplete="email" /></label>
          <label className="fld">Phone<input name="phone" type="tel" autoComplete="tel" /></label>
          <label className="fld">Business or organisation<input name="org" autoComplete="organization" /></label>
          <label className="fld full">I'm interested in
            <select name="interest">
              {INTERESTS.map(i => <option key={i}>{i}</option>)}
            </select>
          </label>
          <label className="fld full">Message<textarea name="message" placeholder="Tell us about your idea or business" /></label>
          {/* Honeypot: hidden from people, filled by spam bots, rejected by Web3Forms. */}
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <div className="full">
            <button className="btn btn-brass" type="submit" disabled={sending}>
              {sending ? 'Sending…' : <>Send message <Arr /></>}
            </button>
          </div>
          {msg && <div className="msg" role="status">{msg}</div>}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="wrap foot">
      <div><a className="logo foot-logo" href="#top"><img src={LOGO} alt="The HOKS Academy" /></a><p>Helping India's next entrepreneurs start right, set up right and grow with the right people.</p></div>
      <div><h5>Services</h5><ul><li><a href="#launchpad">HOKS Launchpad</a></li><li><a href="#setup">Business Setup</a></li><li><a href="#events">HOKS Connect</a></li><li><a href="#online">Online Classes</a></li><li><a href="#colleges">College Workshops</a></li></ul></div>
      <div><h5>Follow</h5><ul>
        {INSTAGRAM.map(i => <li key={i.url}><a href={i.url} target="_blank" rel="noopener">Instagram {i.handle} ↗</a></li>)}
        <li><a href={YOUTUBE.url} target="_blank" rel="noopener">YouTube ↗</a></li>
        <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><a href={`tel:+${PHONE_RAW}`}>{PHONE}</a></li>
      </ul></div>
    </div>
    <div className="wrap copy">© 2026 House of Kanakkar's Private Limited · Sattur, Virudhunagar, Tamil Nadu</div>
  </footer>
);

const App = () => (
  <>
    <Header />
    <main id="top">
      <Hero />
      <Services />
      <Launchpad />
      <Setup />
      <Events />
      <Online />
      <Social />
      <Colleges />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
