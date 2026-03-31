import React, { useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';
export function Sentry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projectIndex = projects.findIndex((p) => p.slug === 'sentry');
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const projectColor = '#3b5bdb';
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const tags = [
  'UX Research',
  'UI Design',
  'Figma',
  'User Testing',
  'Mobile App',
  'Information Architecture',
  'Immigrant Safety',
  'Human-Centered Design'];

  const processSteps = [
  {
    title: 'Stakeholder Interviews',
    text: 'Conducted 6+ interviews with international students, naturalized citizens, and immigration professionals to surface unmet needs around safety, information access, and document management.'
  },
  {
    title: 'Competitive Analysis',
    text: 'Audited Noonlight, ReadyNow!, Know Your Rights 4 Immigrants, and SimpleCitizen — mapping their strengths and gaps against the problems our users described.'
  },
  {
    title: 'Personas & Journey Mapping',
    text: 'Synthesized interview findings into two core personas and a user journey map that revealed the emotional arc from routine anxiety to acute crisis.'
  },
  {
    title: 'HMW & Ideation',
    text: 'Defined our core HMW question: How might we help foreign nationals feel informed, prepared, and connected in a rapidly shifting immigration landscape?'
  },
  {
    title: 'IA & Grayscales',
    text: 'Designed an information architecture spanning five core modules — Map, Posts, To-Do, Legal Help, and Crisis — then built full grayscale screens per module.'
  },
  {
    title: 'High-Fidelity Prototype',
    text: 'Applied a red and blue color system, custom type scale, and component library to produce 40+ hi-fi screens across three user flows.'
  },
  {
    title: 'Unmoderated User Testing',
    text: 'Ran 9 unmoderated tests via Lyssna across three flows. Analyzed results and iterated on navigation labeling, crisis-mode visibility, and to-do list clarity.'
  },
  {
    title: 'TechniGala & Case Study',
    text: 'Presented at TechniGala (ECSC Atrium) with a working Figma Make prototype and a 40" × 30" poster. Co-authored the final team case study.'
  }];

  const researchInsights = [
  {
    title: 'Trust is the first barrier',
    text: 'Users rated data privacy concerns a 4–6 / 10 and were especially anxious when apps requested visa or passport information. Any solution had to earn trust before offering utility.'
  },
  {
    title: 'Crisis response is personal, not institutional',
    text: 'In every scenario — protests, riots, law-enforcement encounters — interviewees texted close friends first, never authorities. The panic button needed to reach a personal network, not 911.'
  },
  {
    title: 'Deadlines are scattered and anxiety-inducing',
    text: 'Immigration deadlines (CPT, OPT, visa renewals) lived across email inboxes, physical files, and institutional portals simultaneously. The cognitive load was constant and the cost of missing one was severe.'
  },
  {
    title: '"Legalese" is its own language barrier',
    text: 'Even fluent English speakers described dense government documents as incomprehensible. Users needed plain-language translation, not just multilingual translation.'
  }];

  const keyFeatures = [
  {
    title: 'Crisis Mode',
    text: 'One-tap activation sends a pre-written message and live GPS location to selected emergency contacts — without calling 911. Toggled on/off with a persistent floating button.'
  },
  {
    title: 'Community Map',
    text: 'A local map layer surfaces crowd-reported events (law enforcement presence, road closures, known safe spaces) with tappable cards and post-and-respond functionality.'
  },
  {
    title: 'Smart To-Do List',
    text: 'Immigration deadlines and action items are surfaced per user profile, with inline plain-language summaries, AI-assisted translation, and reminder modals.'
  },
  {
    title: 'Legal Help Hub',
    text: 'Connects users to vetted immigration legal resources, surfaced based on their situation — designed to answer "am I even eligible for this?" before they click anything.'
  }];

  const testingResults = [
  {
    title: 'Navigation Clarity',
    text: 'Initial bottom-nav labels ("Hub", "Alerts") caused confusion in 4 of 9 tests. Revised to "Map", "Resources", and "My Documents" — subsequent testing resolved all mislabeling errors.'
  },
  {
    title: 'Crisis Button Discoverability',
    text: '7 of 9 users located the crisis button within 8 seconds after redesigning it as a persistent floating element with a distinct color treatment, up from 3 of 9 in the first round.'
  },
  {
    title: 'To-Do List Trust',
    text: 'Users responded positively to the "summarize" and "explain in plain language" modals — describing them as the feature they wished existed when they first arrived in the U.S.'
  }];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 md:px-12 lg:px-24 py-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-navy/50 hover:text-navy transition-colors font-sans text-sm font-medium uppercase tracking-wider">
          
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Projects
        </Link>
      </nav>

      <motion.main initial="hidden" animate="visible" variants={stagger}>
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 mb-24 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-sm font-sans font-medium uppercase tracking-wider"
                style={{
                  color: projectColor
                }}>
                
                UI/UX Design
              </span>
              <div className="h-px w-12 bg-navy/10" />
            </div>
            <h1 className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-navy mb-6 tracking-tight">
              Sentry
            </h1>
            <p className="font-sans text-xl md:text-2xl text-navy/60 max-w-3xl leading-relaxed">
              How might we help foreign nationals feel informed, prepared, and
              connected in a rapidly shifting immigration landscape?
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-medium hover:text-navy transition-colors"
                style={{
                  color: projectColor
                }}>
                
                <ExternalLinkIcon className="w-4 h-4" />
                View Figma File
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-medium hover:text-navy transition-colors"
                style={{
                  color: projectColor
                }}>
                
                <ExternalLinkIcon className="w-4 h-4" />
                View Case Study PDF
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full rounded-3xl overflow-hidden"
            style={{
              backgroundColor: projectColor
            }}>
            
            <img
              src="/Screenshot_2026-03-29_at_11.16.05_PM.png"
              alt="Sentry app preview"
              className="w-full h-auto" />
            
          </motion.div>
        </section>

        {/* Overview + Sidebar */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Role
                </h3>
                <p className="font-sans text-navy/80">
                  UX Researcher & UI Designer
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Duration
                </h3>
                <p className="font-sans text-navy/80">
                  3 weeks (Feb – Mar 2025)
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Context
                </h3>
                <p className="font-sans text-navy/80">
                  UI/UX Design — Final Project
                  <br />
                  Presented at Dartmouth TechniGala
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Figma Make', 'Lyssna'].map((tool) =>
                  <span
                    key={tool}
                    className="font-sans text-sm text-navy/70 bg-navy/5 px-3 py-1 rounded-full">
                    
                      {tool}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) =>
                  <span
                    key={tag}
                    className="font-sans text-sm text-navy/70 bg-navy/5 px-3 py-1 rounded-full">
                    
                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Main */}
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                The Problem
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-6">
                Foreign nationals in the United States face a uniquely layered
                set of pressures: opaque legal deadlines, limited awareness of
                available resources, and the persistent, low-grade anxiety of
                navigating a system that was not designed for them — now
                compounded by a rapidly shifting enforcement climate.
              </p>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-12">
                Existing tools address fragments of this problem in isolation.
                No single product combines community-level safety awareness,
                document and deadline management, and crisis-ready emergency
                contacts in a form that foreign nationals actually trust. Sentry
                is our attempt to do all three — without asking users to
                sacrifice privacy to get there.
              </p>

              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                My Contributions
              </h2>
              <ul className="space-y-4">
                {[
                'Led user research including interview guide design and two primary interviews',
                'Synthesized findings into personas, a user journey map, and Point of View statements',
                'Conducted competitive analysis across four direct and adjacent competitors',
                'Designed the sign-in and onboarding flow from grayscale through high-fidelity',
                'Designed the home page, including returning-user state with action items and recent alerts',
                'Designed the local reporting (Posts) flow — including post creation, map integration, and community response',
                'Built and ran unmoderated user tests via Lyssna; analyzed results and drove iteration',
                'Co-designed the information architecture and component library in Figma',
                'Co-authored the team case study and contributed to the TechniGala poster'].
                map((item, i) =>
                <li key={i} className="flex gap-4 items-start">
                    <div
                    className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                    style={{
                      backgroundColor: projectColor
                    }} />
                  
                    <p className="font-sans text-lg text-navy/70 leading-relaxed">
                      {item}
                    </p>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Research Insights */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Research Insights
            </h2>
            <p className="font-sans text-navy/50">What we heard in the field</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pl-6 border-l-4 py-2 mb-16"
            style={{
              borderColor: projectColor
            }}>
            
            <p className="font-heading font-medium text-2xl md:text-3xl text-navy leading-relaxed">
              "Safe, simple, transparent, human, reliable."
            </p>
            <cite className="block not-italic text-navy/50 font-sans text-xs font-bold uppercase tracking-widest mt-6">
              — Anfisa, International Student, on what an ideal app would feel
              like
            </cite>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInsights.map((insight, i) =>
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: projectColor
                }}>
                
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {insight.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {insight.text}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Design Process */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Design Process
            </h2>
            <p className="font-sans text-navy/50">
              Research to high-fidelity in three weeks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) =>
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: projectColor
                }}>
                
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Key Features / The Solution */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              The Solution
            </h2>
            <p className="font-sans text-navy/50">
              Four modules, one coherent experience
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            Sentry is a mobile safety and support platform for foreign
            nationals. It integrates community-level situational awareness,
            personal document management, access to legal resources, and a
            one-tap crisis protocol — designed to be trusted as much as it is
            useful.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {keyFeatures.map((f, i) =>
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: projectColor
                }}>
                
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {f.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            )}
          </div>

          <motion.div
            variants={fadeInUp}
            className="pl-6 border-l-4 py-2"
            style={{
              borderColor: projectColor
            }}>
            
            <p className="font-heading font-medium text-2xl md:text-3xl text-navy leading-relaxed">
              "Efficient, clear, legit, updated, private."
            </p>
            <cite className="block not-italic text-navy/50 font-sans text-xs font-bold uppercase tracking-widest mt-6">
              — Ryan, International Student, on what the app must be
            </cite>
          </motion.div>
        </section>

        {/* User Testing */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              User Testing & Iterations
            </h2>
            <p className="font-sans text-navy/50">
              Unmoderated testing via Lyssna — 9 participants across 3 flows
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            Each team member recruited three participants for unmoderated
            testing sessions covering our three primary flows: onboarding &
            crisis setup, community map interaction, and to-do list management.
            Results were analyzed against our HMW question and core design
            principles before a final round of revisions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testingResults.map((r, i) =>
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: projectColor
                }}>
                
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {r.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {r.text}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Reflection */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
              Reflection
            </h2>
            <div className="space-y-6 font-sans text-lg text-navy/70 leading-relaxed max-w-4xl mb-12">
              <p>
                Sentry was the first project where I experienced the full arc of
                a design process without a guardrail telling me what to build.
                The most disorienting part was also the most valuable: starting
                with a wide-open brief and trusting the research to narrow it.
                Every time I wanted to jump to a solution, an interview pulled
                me back to a messier, more human version of the problem.
              </p>
              <p>
                Designing for a vulnerable user group sharpened my instincts
                around trust. Features that seemed obviously useful — like
                AI-assisted document translation — required much more careful
                framing once I understood how wary users were of sharing
                sensitive information with any digital system. Earning that
                trust had to happen before we could ask for anything in return.
              </p>
              <p>
                The unmoderated user testing challenged my confidence in our
                design. Features I was certain were clear and usable weren't.
                The crisis button — the most critical single element in the app
                — was missed by most of our first-round testers. That finding
                drove a redesign that improved discoverability dramatically, and
                it reminded me that assumptions about "obvious" UI patterns
                don't survive contact with real users.
              </p>
              <p>
                My teammate Winnie Stone and I have decided to turn Sentry into
                a real product. We are actively working to bring the product to
                life, translating the Figma prototype into a working application
                and making the design and engineering decisions that a real
                launch demands.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Next Project */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-navy/40 mb-6">
              Up Next
            </p>
            <Link
              to={`/project/${nextProject.slug}`}
              className="group inline-flex flex-col items-center">
              
              <h2 className="font-heading font-semibold text-4xl md:text-5xl text-navy mb-4 group-hover:text-accent transition-colors">
                {nextProject.title}
              </h2>
              <div className="flex items-center gap-2 text-navy/50 group-hover:text-accent transition-colors font-sans">
                <span>View Case Study</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </section>
      </motion.main>

      <Footer />
    </div>);

}