import React, { useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';
export function DartmouthHousing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projectIndex = projects.findIndex((p) => p.slug === 'dartmouth-housing');
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
  const themes = [
  {
    num: '1',
    text: 'Students identify more strongly with clubs, sports teams, and Greek organizations than with their assigned house community.'
  },
  {
    num: '2',
    text: 'House communities are most valuable for first-year students during freshman fall — engagement drops sharply as students find other social anchors.'
  },
  {
    num: '3',
    text: 'Students feel closer to their floor and building neighbors than to their larger house community — proximity matters enormously.'
  },
  {
    num: '4',
    text: 'Most students arrive at Dartmouth with no understanding of what house communities are or offer beyond housing logistics.'
  },
  {
    num: '5',
    text: "Communication gaps are a major barrier: students who wanted to get involved didn't know how, and newsletters were largely skimmed or ignored."
  },
  {
    num: '6',
    text: 'Community dinners are the most popular house programming — free food draws students in, and organic conversation keeps them.'
  },
  {
    num: '7',
    text: 'Themed events create unnecessary barriers to entry. Low-stakes, activity-based events (crafting, cooking) generate the most natural connection.'
  },
  {
    num: '8',
    text: 'Seniors expressed a desire to reengage with house communities — and an unmet appetite for senior-specific programming and life skills workshops.'
  }];

  const shortTermRecs = [
  'Add a link to each house website on StarPortal alongside room assignments — shifting students\' first impression from "where I live" to "where I belong."',
  'Create opt-in SMS event alerts as a high-visibility alternative to ListServ newsletters that most students skim or ignore.',
  "Host weekly fireside chats at House Professors' residences to build low-stakes, recurring faculty-student connection.",
  'Establish a coffee chat pairing program for seniors — randomly matched across majors and backgrounds, with costs covered by the house.',
  'Upgrade common space amenities (whiteboards, coffee stations, varied seating, board games) based on what students said draws them to spaces like One Wheelock.',
  'Shift programming toward recurring, time-consistent events — students cited routine as essential to building real tradition.'];

  const longTermRecs = [
  'Restructure house geography by proximity — splitting dispersed houses like South and West into smaller, more cohesive communities based on building clusters.',
  'Convert underutilized common rooms into student-staffed hubs (cafes, sewing rooms, music rooms) modeled on Yale\'s "buttery" system, giving students ownership over their space.',
  'Establish life skills workshops for seniors (personal finance, cooking, driving) — filling a niche currently untapped by any other campus organization.',
  'Launch a house mini-library initiative to draw students into house spaces for everyday academic life, not just programming events.'];

  const tags = [
  'Qualitative Research',
  'Semi-Structured Interviews',
  'Affinity Mapping',
  'Systems Thinking',
  'Institutional Design',
  'Community Building'];

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
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-24 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-sm font-sans font-medium uppercase tracking-wider"
                style={{
                  color: projectColor
                }}>
                
                Design Research
              </span>
              <div className="h-px w-12 bg-navy/10" />
            </div>
            <h1 className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-navy mb-6 tracking-tight">
              Dartmouth's Housing Project
            </h1>
            <p className="font-sans text-xl md:text-2xl text-navy/60 max-w-3xl leading-relaxed">
              How might we make Dartmouth students identify further with their
              residential house?
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-sans font-medium hover:text-navy transition-colors"
              style={{
                color: projectColor
              }}>
              
              <ExternalLinkIcon className="w-4 h-4" />
              View Final Report
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden relative"
            style={{
              backgroundColor: projectColor
            }}>
            
            <img
              src="/housing_project.jpg"
              alt="Dartmouth's Housing Project preview"
              className="absolute inset-0 w-full h-full object-cover object-center" />
            
          </motion.div>
        </section>

        {/* Overview Section with Sidebar */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar Details */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Role
                </h3>
                <p className="font-sans text-navy/80">
                  Researcher, Student Design Consultant
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Duration
                </h3>
                <p className="font-sans text-navy/80">Winter 2026</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Organization
                </h3>
                <p className="font-sans text-navy/80">Dartmouth Design Corps</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Partner
                </h3>
                <p className="font-sans text-navy/80">Rohan Ramesh</p>
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

            {/* Main Description */}
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                The Brief
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-6">
                Every decade, Dartmouth's Community & Campus Life department
                undertakes a comprehensive review of residential life. This
                cycle, the Residential Communities Working Group was formed to
                assess the effectiveness of Dartmouth's six house communities —
                Allen, East Wheelock, North Park, School, South, and West.
              </p>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-12">
                I joined as a House Communities subcommittee researcher within
                Design Corps in 26W, embedded in the larger working group
                alongside administrators, faculty, and student representatives.
                The subcommittee had been established the prior term (25F); I
                came on for the primary research phase. Our charge: understand
                how students actually experience house communities, and
                translate those insights into evidence-based recommendations.
              </p>

              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                My Contributions
              </h2>
              <ul className="space-y-4">
                {[
                'Designed and iterated on a semi-structured interview guide across two rounds of questioning',
                'Conducted 16 student interviews, 1 Program Administrator interview, and 1 Assistant Director interview',
                "Observed physical spaces at Yale's residential colleges (Stiles & Saybrook) for comparative insight",
                'Led thematic synthesis using affinity mapping, color-coded by class year',
                'Developed 30+ short and long-term recommendations organized across 8 "How Might We" questions'].
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

        {/* Methodology Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Methodology
            </h2>
            <p className="font-sans text-navy/50">How We Gathered Insight</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
            {
              label: 'Interviews',
              stat: '18',
              desc: 'Semi-structured interviews with students from all four class years, staff, and administrators — spanning athletes, international students, first-gen students, and Greek-affiliated students.'
            },
            {
              label: 'Observations',
              stat: '2+',
              desc: "On-site visits to Yale's Stiles and Saybrook residential colleges, plus ongoing observation of Dartmouth House events and UGA meetings throughout the term."
            },
            {
              label: 'Document Review',
              stat: '✓',
              desc: "Reviewed existing research on Dartmouth's house system and peer residential college models compiled by the subcommittee in 25F, using them to inform our 26W interview design."
            }].
            map((m, i) =>
            <motion.div
              key={m.label}
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
                  {m.label}
                  {m.stat && /^\d+$/.test(m.stat) ? ` (${m.stat})` : ''}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            )}
          </div>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl">
            
            After completing nine initial interviews, we revised our question
            set to probe deeper — shifting from general experience mapping
            toward engagement drop-off, identity formation, and physical space
            behavior. The second round produced sharper, more actionable
            insights.
          </motion.p>
        </section>

        {/* Findings Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Key Findings
            </h2>
            <p className="font-sans text-navy/50">What Students Told Us</p>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            Through affinity mapping (color-coded by class year) we identified
            16 recurring themes across all interviews. The most significant
            patterns cut across class years and houses alike.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {themes.map((t) =>
            <motion.div
              key={t.num}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: projectColor
                }}>
                
                  {t.num.padStart(2, '0')}
                </div>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            )}
          </div>

          {/* Pull Quote */}
          <motion.div
            variants={fadeInUp}
            className="pl-6 border-l-4 py-2"
            style={{
              borderColor: projectColor
            }}>
            
            <p className="font-heading font-medium text-2xl md:text-3xl text-navy leading-relaxed">
              "House communities were great for making immediate friends. Once I
              found people and social places, I didn't feel like engaging in my
              house anymore."
            </p>
            <cite className="block not-italic text-navy/50 font-sans text-xs font-bold uppercase tracking-widest mt-6">
              — Dartmouth Student, Interview Participant
            </cite>
          </motion.div>
        </section>

        {/* Recommendations Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Recommendations
            </h2>
            <p className="font-sans text-navy/50">Insights into Action</p>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            We organized our recommendations around eight "How Might We"
            questions — translating each cluster of themes into targeted
            interventions. Here is a representative selection across priority
            areas.
          </motion.p>

          <div className="mb-16">
            <motion.h3
              variants={fadeInUp}
              className="font-heading font-semibold text-2xl text-navy mb-6">
              
              Short-Term (0–2 Years)
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shortTermRecs.map((r, i) =>
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 flex gap-4 items-start hover:border-accent/30 transition-colors duration-300">
                
                  <span
                  className="shrink-0 mt-0.5"
                  style={{
                    color: projectColor
                  }}>
                  
                    →
                  </span>
                  <span className="font-sans text-sm text-navy/60 leading-relaxed">
                    {r}
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          <div>
            <motion.h3
              variants={fadeInUp}
              className="font-heading font-semibold text-2xl text-navy mb-6">
              
              Long-Term (2+ Years)
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {longTermRecs.map((r, i) =>
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 flex gap-4 items-start hover:border-accent/30 transition-colors duration-300">
                
                  <span
                  className="shrink-0 mt-0.5"
                  style={{
                    color: projectColor
                  }}>
                  
                    →
                  </span>
                  <span className="font-sans text-sm text-navy/60 leading-relaxed">
                    {r}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
              Reflection
            </h2>
            <div className="space-y-6 font-sans text-lg text-navy/70 leading-relaxed max-w-4xl mb-12">
              <p>
                This project taught me how to translate open-ended, qualitative
                conversations into structured, actionable insight. The most
                important methodological decision we made was revising our
                interview guide after the first nine interviews. We deepened our
                questions from surface-level experience mapping to understanding
                students disengage, and what would need to be different for them
                to stay involved.
              </p>
              <p>
                Working within a larger institutional subcommittee also meant
                learning how research fits into a broader decision-making
                ecosystem. Our findings were one input among many. Structuring
                recommendations around timeframe and feasibility, rather than
                pure idealism, made them more likely to be acted on.
              </p>
              <p>
                The report was delivered to the Residential Communities Working
                Group as a final term deliverable and will inform Dartmouth's
                broader residential life review.
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