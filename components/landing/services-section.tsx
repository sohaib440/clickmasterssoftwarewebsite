'use client';

// using native <img> for public/static images to avoid Next/Image loader issues
import Link from 'next/link';
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Smartphone,
  BrainCircuit,
  Palette,
  Database,
  Server,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/landing/section-heading';
import { container, sectionPad, btnPrimary } from '@/lib/landing/constants';
import { cn } from '@/lib/utils';

const serviceRoutes = {
  'Software Development': '/software-development',
  'Web Development': '/web-development',
  'Mobile Development': '/mobile-development',
  'Artificial Intelligence': '/artificial-intelligence-ai',
  'UI/UX Systems': '/design-ui-ux',
  'Cloud & DevOps': '/cloud-and-devops',
  'Machine Learning': '/machine-learning-ml',
  'Data Services': '/data-services',
  'Testing & QA': '/testing-and-qa',
};

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    image: '/services/Software development.png',
    Icon: ShieldCheck,
    AltIcon: Globe2,
    tag: 'Enterprise',
    span: 'wide',
    accent: '#3b82f6',
  },
  {
    title: 'Web Development',
    description: 'Modern web applications with responsive design and seamless user experience.',
    image: '/services/Web Development.png',
    Icon: Globe2,
    AltIcon: Server,
    tag: 'Web3 Ready',
    accent: '#ec4899',
  },
  {
    title: 'Mobile Development',
    description: 'Build secure and scalable mobile applications for iOS and Android.',
    image: '/services/Mobile Application Development.png',
    Icon: Smartphone,
    AltIcon: ShieldCheck,
    tag: 'Cross-Platform',
    accent: '#10b981',
  },
  {
    title: 'Artificial Intelligence',
    description: 'AI-powered monitoring systems with predictive threat intelligence.',
    image: '/services/Artificial Intelligence.png',
    Icon: BrainCircuit,
    AltIcon: Database,
    tag: 'Intelligence',
    span: 'tall',
    accent: '#8b5cf6',
  },
  {
    title: 'UI/UX Systems',
    description: 'Elegant digital experiences focused on usability and conversion.',
    image: '/services/UI-UX.png',
    Icon: Palette,
    AltIcon: Globe2,
    tag: 'Design',
    accent: '#f59e0b',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Secure cloud-native infrastructure with scalable DevOps workflows.',
    image: '/services/CloudOPs and Devops.png',
    Icon: Database,
    AltIcon: Server,
    tag: 'DevSecOps',
    span: 'wide',
    accent: '#0ea5e9',
  },
  {
    title: 'Machine Learning',
    description: 'Scalable infrastructure architecture with maximum uptime and reliability.',
    image: '/services/Machine Learning.png',
    Icon: Server,
    AltIcon: BrainCircuit,
    tag: 'Reliability',
    accent: '#14b8a6',
  },
  {
    title: 'Data Services',
    description: 'Data engineering, warehousing, and analytics solutions.',
    image: '/services/Data Services.png',
    Icon: Database,
    AltIcon: Palette,
    tag: 'Platform',
    accent: '#6366f1',
  },
  {
    title: 'Testing & QA',
    description: 'Scalable infrastructure architecture with maximum uptime and reliability.',
    image: '/services/Testing-and-QA.png',
    Icon: Database,
    AltIcon: Palette,
    tag: 'Platform',
    accent: '#42f560',
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { accent } = service;
  const spanClass =
    service.span === 'wide'
      ? 'sm:col-span-2 xl:col-span-2'
      : service.span === 'tall'
      ? 'xl:row-span-2'
      : '';

  const route = serviceRoutes[service.title as keyof typeof serviceRoutes];

  return (
    <div
      className={`service-card-tilt ${spanClass}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      data-fade-up
    >
      <Link href={route || '/services'}>
        <div
          className={`group relative flex flex-col justify-between cursor-pointer ${service.span === 'tall' ? 'h-full min-h-[28rem] md:min-h-[32rem]' : 'min-h-[22rem] md:min-h-[26rem] xl:h-full'} rounded-[40px] border bg-white/40 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:bg-white/60`}
          style={{ borderColor: `${accent}77` }}
        >
          <div
            className="absolute inset-0 rounded-[40px] border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ borderColor: `${accent}66` }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ boxShadow: `0 30px 60px -15px ${accent}30` }}
          />

          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-all duration-700"
            style={{ background: accent }}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-white/50 shadow-sm text-[10px] font-bold tracking-widest uppercase"
                style={{ color: accent }}
              >
                <Sparkles className="w-3 h-3" />
                {service.tag}
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center mb-6 relative">
              <div
                className="absolute w-40 h-40 rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-all duration-700"
                style={{ background: accent }}
              />
              {service.image ? (
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden rounded-[32px]">
                  <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                </div>
              ) : (
                <div className="relative w-56 h-56 rounded-[32px] bg-slate-100/70" />
              )}
            </div>

            <div className='mb-6'>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: accent }}>
                  Learn More
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-45"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative  bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-500/15 blur-[120px]" />
      </div>

      <div className={cn(container, sectionPad, 'relative z-10')}>
        <div className="mb-24">
          <SectionHeading
            overlineText="What we do"
            title={
              <>
                Innovating your <span className="italic">digital future</span>
              </>
            }
            description="We blend cutting-edge technology with world-class design to build products that define industries."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-min xl:auto-rows-[460px] gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-12 flex justify-center">
          <Link href="/services" className={btnPrimary}>
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}
