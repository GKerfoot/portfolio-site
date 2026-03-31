import React, { useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';
export function AdaptAMask() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projectIndex = projects.findIndex((p) => p.slug === 'adapt-a-mask');
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
  const processSteps = [
  {
    num: '1',
    title: 'Stakeholder Interviews',
    text: 'Conducted interviews with ski patrol professionals, EMTs, and medical faculty to ground the design in real-world constraints.'
  },
  {
    num: '2',
    title: 'Ideation & Sketching',
    text: 'Generated hand sketches exploring gel geometry, fill volumes, and mask integration approaches.'
  },
  {
    num: '3',
    title: '3D Scanning & CAD',
    text: 'Scanned an industry-standard mask and modeled our design in SolidWorks to inform mold fabrication.'
  },
  {
    num: '4',
    title: 'Prototyping',
    text: 'Tested five gel formulations — aloe gel, vegetable glycerin, petroleum jelly, ultrasound gel, and olive oil hair gel — across fabricated molds.'
  },
  {
    num: '5',
    title: 'Quantitative Testing',
    text: '21 participants tested three mask configurations on a CPR mannequin using compressed air and a Vernier pressure sensor.'
  },
  {
    num: '6',
    title: 'Statistical Analysis',
    text: 'Ran paired t-tests and ANOVA on the full dataset. Both gel configurations significantly outperformed the standard mask (p < 0.001).'
  }];

  const gelProperties = [
  {
    num: '1',
    title: 'Incompressible',
    text: 'Enables even pressure distribution across the face, eliminating localized air escape points.'
  },
  {
    num: '2',
    title: 'Low-Recoil',
    text: 'Maintains consistent contact during active ventilation rather than bouncing away between breaths.'
  },
  {
    num: '3',
    title: 'Conformal',
    text: 'Adapts to diverse facial geometries including beards, bony ridges, and asymmetrical features.'
  },
  {
    num: '4',
    title: 'Cold-Resistant',
    text: 'Remains malleable at sub-zero temperatures, critical for ski patrol and outdoor rescue contexts.'
  }];

  const results = [
  {
    num: '1',
    title: 'Standard Mask (Benchmark)',
    text: 'Average internal pressure of 1.45 mmHg recorded across 21 participants under standardized 15 psi compressed air conditions.'
  },
  {
    num: '2',
    title: 'Full Gel Adapt-a-Mask',
    text: 'Average pressure of 3.02 mmHg — a statistically significant improvement over the standard mask (p < 0.001), indicating substantially reduced air leakage.'
  },
  {
    num: '3',
    title: 'Half Gel Adapt-a-Mask',
    text: 'Average pressure of 3.97 mmHg — the strongest performing configuration. 94% of participants rated seal quality 4 or 5 out of 5.'
  }];

  const tags = [
  'Engineering Design',
  'Medical Device',
  'Prototyping',
  'User Testing',
  'SolidWorks',
  'Statistical Analysis',
  'Human-Centered Design',
  'Provisional Patent'];

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
                
                Engineering Design
              </span>
              <div className="h-px w-12 bg-navy/10" />
            </div>
            <h1 className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-navy mb-6 tracking-tight">
              Adapt-a-Mask
            </h1>
            <p className="font-sans text-xl md:text-2xl text-navy/60 max-w-3xl leading-relaxed">
              How might we improve airway seal consistency for novice emergency
              medical responders operating in cold, prehospital environments?
            </p>
            <a
              href="/adapt-a-mask-project.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-sans font-medium hover:text-navy transition-colors"
              style={{
                color: projectColor
              }}>

              <ExternalLinkIcon className="w-4 h-4" />
              View Project
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden relative"
            style={{
              backgroundColor: projectColor
            }}>
            
            <img
              src="/image-1.jpg"
              alt="Adapt-a-Mask prototype"
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
                <p className="font-sans text-navy/80">Engineer & Designer</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Duration
                </h3>
                <p className="font-sans text-navy/80">
                  Ongoing (began Winter 2025)
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Team
                </h3>
                <p className="font-sans text-navy/80">
                  Kylie Tatarsky, Eleanor Neu, Will Spangler, Garrett Wellens
                </p>
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
                The Problem
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-6">
                Effective BVM ventilation is strongly correlated with improved
                survival and neurological outcomes during cardiac arrest. But
                industry-standard pocket masks are difficult to seal properly —
                especially for novices, patients with facial hair, or in cold
                environments where materials stiffen and grip strength falters.
              </p>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-12">
                Adapt-a-Mask addresses this by replacing the standard air-filled
                lining with a compliant gel perimeter — the "Eco-Gel" — that
                conforms to a wide range of facial geometries and reduces
                dependence on rescuer skill to maintain an effective seal.
              </p>

              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                My Contributions
              </h2>
              <ul className="space-y-4">
                {[
                'Led gel material selection and formulation testing across five candidate materials',
                'Conducted stakeholder interviews with ski patrol professionals and medical faculty',
                'Contributed to SolidWorks CAD modeling and mold fabrication for physical prototypes',
                'Co-designed and executed the official testing protocol with 21 participants',
                'Performed statistical analysis (paired t-tests, ANOVA) on the full pressure dataset',
                'Co-authored the provisional patent filing'].
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

        {/* Design Process Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Design Process
            </h2>
            <p className="font-sans text-navy/50">End-to-End Engineering</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) =>
            <motion.div
              key={step.num}
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

        {/* Solution Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              The Solution
            </h2>
            <p className="font-sans text-navy/50">Why Gel?</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            The Eco-Gel lining was selected and tuned to address the specific
            failure modes of the standard air-filled mask — recoil, pressure
            point concentration, and altitude-related lining pressure — while
            remaining safe, manufacturable, and operable at sub-zero
            temperatures.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {gelProperties.map((prop, i) =>
            <motion.div
              key={prop.num}
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
                  {prop.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {prop.text}
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
              "The gel-filled lining molds to the face to reduce recoil when
              compressed. The mask's seal is unaffected by high altitudes, which
              would have caused pressure inside an air-filled lining to build."
            </p>
            <cite className="block not-italic text-navy/50 font-sans text-xs font-bold uppercase tracking-widest mt-6">
              — Provisional Patent, Anti-Air Leakage Enhanced Gel-Filled Pocket
              Mask
            </cite>
          </motion.div>
        </section>

        {/* Results Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
              Testing & Results
            </h2>
            <p className="font-sans text-navy/50">Controlled Validation</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl mb-12">
            
            21 participants each tested three mask configurations on a CPR
            training mannequin for 100 seconds under 15 psi compressed air.
            Average internal pressure was recorded as a proxy for seal quality,
            and results were analyzed using paired t-tests and ANOVA.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {results.map((r, i) =>
            <motion.div
              key={r.num}
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

          <motion.div
            variants={fadeInUp}
            className="pl-6 border-l-4 py-2"
            style={{
              borderColor: projectColor
            }}>
            
            <p className="font-heading font-medium text-2xl md:text-3xl text-navy leading-relaxed">
              "Over 50% of participants reported higher confidence using the
              gel-based masks. Medical professionals described the design as a
              potential paradigm shift in airway management."
            </p>
            <cite className="block not-italic text-navy/50 font-sans text-xs font-bold uppercase tracking-widest mt-6">
              — User Testing Feedback, N = 21
            </cite>
          </motion.div>
        </section>

        {/* Reflection Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <motion.div variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
              Reflection
            </h2>
            <div className="space-y-6 font-sans text-lg text-navy/70 leading-relaxed max-w-4xl mb-12">
              <p>
                Adapt-a-Mask taught me how a relatively simple material
                intervention can yield significant performance gains in a
                product. The most valuable part of the process was designing a
                testing protocol rigorous enough to generate statistically
                meaningful results — something that required us to think
                carefully about controls, sample size, and confounding variables
                long before we ran a single trial.
              </p>
              <p>
                Working with actual ski patrollers and medical professionals
                grounded the design in real-world constraints that never would
                have emerged from a purely technical process. Their feedback
                pushed us to pursue a provisional patent and think seriously
                about the path from prototype to clinical use.
              </p>
              <p>
                The project also introduced me to the tension between
                engineering performance and regulatory reality: our gel mask
                outperformed the standard in every measurable way, but FDA
                clearance remains the necessary next step before it could be
                used in the field.
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