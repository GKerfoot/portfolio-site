import React, { useEffect, Children } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';
import { DartmouthHousing } from './DartmouthHousing';
import { AdaptAMask } from './AdaptAMask';
import { Sentry } from './Sentry';
export function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (slug === 'dartmouth-housing') {
    return <DartmouthHousing />;
  }
  if (slug === 'adapt-a-mask') {
    return <AdaptAMask />;
  }
  if (slug === 'sentry') {
    return <Sentry />;
  }
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="font-heading text-4xl text-navy mb-4">
          Project not found
        </h1>
        <Link
          to="/"
          className="text-accent hover:underline flex items-center gap-2">
          
          <ArrowLeftIcon className="w-4 h-4" /> Back to Home
        </Link>
      </div>);

  }
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
  const hasFeatures = project.features && project.features.length > 0;
  const hasTechStack = project.techStack;
  const hasArchitecture = project.architecture;
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
              <span className="text-sm font-sans font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <div className="h-px w-12 bg-navy/10" />
            </div>
            <h1 className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-navy mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="font-sans text-xl md:text-2xl text-navy/60 max-w-3xl leading-relaxed">
              {project.description}
            </p>
            {project.liveDemo &&
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-sans text-accent hover:text-navy transition-colors font-medium">
              
                <ExternalLinkIcon className="w-4 h-4" />
                View Live Demo
              </a>
            }
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden relative"
            style={{
              backgroundColor: project.color
            }}>
            
            {project.image ?
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-bottom" /> :


            <div className="absolute inset-0 opacity-[0.08]">
                <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg">
                
                  <defs>
                    <pattern
                    id="hero-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse">
                    
                      <circle cx="20" cy="20" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                </svg>
              </div>
            }
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
                  {project.role || 'Product Designer'}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Timeline
                </h3>
                <p className="font-sans text-navy/80">
                  {project.timeline || '10 Weeks'}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Team
                </h3>
                <p className="font-sans text-navy/80">
                  {'Max Konzerowsky, Liam Murray, Jada Jones'}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.tools || ['Figma', 'React']).map((tool) =>
                  <span
                    key={tool}
                    className="font-sans text-sm text-navy/70 bg-navy/5 px-3 py-1 rounded-full">
                    
                      {tool}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Main Description */}
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                Overview
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-12">
                {project.overview ||
                'A comprehensive design project focusing on user-centered solutions and elegant interfaces.'}
              </p>

              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                The Problem
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed">
                {project.problem ||
                'Users were struggling with complex workflows and unintuitive navigation in the existing solution.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section (for projects with features) */}
        {hasFeatures &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
                Features
              </h2>
              <p className="font-sans text-navy/50">
                Key capabilities we built into the platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features!.map((feature, i) =>
            <motion.div
              key={feature.name}
              variants={fadeInUp}
              className="bg-navy/[0.02] border border-navy/8 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              
                  <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-heading font-semibold text-sm"
                style={{
                  backgroundColor: project.color
                }}>
                
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    {feature.name}
                  </h3>
                  <p className="font-sans text-sm text-navy/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
            )}
            </div>
          </section>
        }

        {/* Process Section (for projects without features/techStack) */}
        {!hasFeatures && project.process &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                Process & Research
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl">
                {project.process}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
              variants={fadeInUp}
              className="aspect-[4/3] rounded-2xl bg-navy/5 relative overflow-hidden">
              
                <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundColor: project.color
                }} />
              
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans text-navy/40 font-medium">
                    Wireframes Mockup
                  </span>
                </div>
              </motion.div>
              <motion.div
              variants={fadeInUp}
              className="aspect-[4/3] rounded-2xl bg-navy/5 relative overflow-hidden">
              
                <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundColor: project.color
                }} />
              
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans text-navy/40 font-medium">
                    User Flow Mockup
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
        }

        {/* Tech Stack Section */}
        {hasTechStack &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
                Tech Stack
              </h2>
            </motion.div>

            <div className="space-y-8">
              {project.techStack!.frontend &&
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
                  <div className="lg:col-span-3">
                    <span
                  className="inline-block font-sans text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                  style={{
                    backgroundColor: project.color
                  }}>
                  
                      Frontend
                    </span>
                  </div>
                  <p className="lg:col-span-9 font-sans text-navy/70 leading-relaxed">
                    {project.techStack!.frontend}
                  </p>
                </motion.div>
            }
              {project.techStack!.backend &&
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
                  <div className="lg:col-span-3">
                    <span
                  className="inline-block font-sans text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                  style={{
                    backgroundColor: project.color,
                    opacity: 0.85
                  }}>
                  
                      Backend
                    </span>
                  </div>
                  <p className="lg:col-span-9 font-sans text-navy/70 leading-relaxed">
                    {project.techStack!.backend}
                  </p>
                </motion.div>
            }
              {project.techStack!.deployment &&
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
                  <div className="lg:col-span-3">
                    <span
                  className="inline-block font-sans text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                  style={{
                    backgroundColor: project.color,
                    opacity: 0.7
                  }}>
                  
                      Deployment
                    </span>
                  </div>
                  <p className="lg:col-span-9 font-sans text-navy/70 leading-relaxed">
                    {project.techStack!.deployment}
                  </p>
                </motion.div>
            }
            </div>
          </section>
        }

        {/* Architecture Section */}
        {hasArchitecture &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div variants={fadeInUp}>
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                Architecture & Design Decisions
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed max-w-4xl">
                {project.architecture}
              </p>
            </motion.div>
          </section>
        }

        {/* Solution Section (for projects with solution) */}
        {project.solution &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                The Solution
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed max-w-3xl">
                {project.solution}
              </p>
            </motion.div>

            <motion.div
            variants={fadeInUp}
            className="w-full aspect-video rounded-3xl bg-navy/5 relative overflow-hidden mb-12">
            
              <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundColor: project.color
              }} />
            
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-sans text-white/80 font-medium text-xl">
                  Final Product Mockup
                </span>
              </div>
            </motion.div>
          </section>
        }

        {/* Results Section (for projects with results) */}
        {project.results &&
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
            <motion.div
            variants={fadeInUp}
            className="bg-navy/[0.03] border border-navy/10 rounded-3xl p-8 md:p-16">
            
              <h2 className="font-heading font-semibold text-3xl text-navy mb-6">
                Impact & Results
              </h2>
              <p className="font-sans text-lg text-navy/70 leading-relaxed mb-12 max-w-3xl">
                {project.results}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="font-heading font-semibold text-5xl text-accent mb-2">
                    40%
                  </div>
                  <div className="font-sans text-navy/60">
                    Increase in engagement
                  </div>
                </div>
                <div>
                  <div className="font-heading font-semibold text-5xl text-accent mb-2">
                    4.8
                  </div>
                  <div className="font-sans text-navy/60">
                    Average user rating
                  </div>
                </div>
                <div>
                  <div className="font-heading font-semibold text-5xl text-accent mb-2">
                    2wks
                  </div>
                  <div className="font-sans text-navy/60">
                    Faster onboarding
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        }

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