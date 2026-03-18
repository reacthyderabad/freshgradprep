export interface ServiceHighlightSection {
  label: string;
  items: string[];
}

export interface ServiceSubSection {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  duration: string;
  price: string;
  originalPrice?: string;
  offerLabel?: string;
  highlights: ServiceHighlightSection[];
  subSections?: ServiceSubSection[];
  footer?: string;
  ctaLabel: string;
  ctaHref: string;
}

export const servicesContent = {
  title: 'Services Offered',
  services: [
    {
      title: 'Career Strategy Deep Dive',
      description: 'Comprehensive 1:1 strategy session.',
      duration: '60-Min Session + 15 Days Support',
      price: '₹699',
      originalPrice: '₹999',
      offerLabel: 'Limited Time Offer',
      highlights: [
        {
          label: 'Covers:',
          items: [
            'Resume positioning inputs',
            'LinkedIn guidance',
            'Job search & referral strategy',
            'Career path clarity',
            'Personalized action plan',
          ],
        },
      ],
      footer:
        'Includes 15 days doubt clarification support.\nFor individuals serious about structured growth.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Placement Accelerator – 7 Day Program',
      description:
        'A focused 7-day roadmap designed for final-year students preparing for campus placements.',
      duration: 'Daily 1 Hour',
      price: '₹499',
      highlights: [
        {
          label: 'This program covers:',
          items: [
            'Resume positioning from an HR perspective',
            'LinkedIn improvement guidance',
            'Strategic application approach',
            'Interview & HR round preparation',
            'Group discussion insights',
          ],
        },
        {
          label: 'Includes:',
          items: [
            '3 Mock Interview Sessions',
            'Support for up to 3 campus placement drives',
          ],
        },
      ],
      footer:
        'Designed for students who want structured preparation — not last-minute panic.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Resume Revamp Express',
      description: 'Focused HR-based resume evaluation.',
      duration: '15-Min Live Review',
      price: '₹199',
      highlights: [
        {
          label: 'Includes:',
          items: [
            'Structure & layout correction',
            'Bullet point improvement guidance',
            'Skill & keyword alignment',
            'One revision check',
          ],
        },
      ],
      footer: 'Designed for quick, practical positioning improvements.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'LinkedIn Visibility Boost',
      description: 'Recruiter-focused LinkedIn profile feedback.',
      duration: '15-Min Live Review',
      price: '₹199',
      highlights: [
        {
          label: 'Includes:',
          items: [
            'Headline & About positioning',
            'Experience structuring',
            'Keyword alignment',
            'Visibility improvement tips',
          ],
        },
      ],
      footer: 'Built to make your profile searchable and relevant.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Quick Career Reset',
      description: 'Short, focused guidance for immediate career doubts.',
      duration: '15-Min Live Clarity Call',
      price: '₹199',
      highlights: [
        {
          label: 'Ideal for:',
          items: [
            'Role confusion',
            'Job search doubts',
            'Quick decision clarity',
          ],
        },
      ],
      footer: 'Structured, direct, actionable.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Mock Interview Sprint',
      description: 'Simulated HR interview experience.',
      duration: '2 Rounds (15 Min Each)',
      price: '₹199',
      highlights: [
        {
          label: 'Includes:',
          items: [
            'Real-time questioning',
            'Performance feedback',
            'Communication correction',
            'Positioning improvement',
          ],
        },
      ],
      footer: 'Perfect for placements and job switches.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Career Continuity Plan',
      description: 'Ongoing doubt clarification support.',
      duration: 'Monthly Support',
      price: '₹149',
      highlights: [
        {
          label: 'Includes:',
          items: [
            'Quick message-based guidance',
            'Voice note responses',
            'Micro-feedback',
            'Free entry to exclusive weekend workshops',
          ],
        },
      ],
      footer: 'Designed for continuous career support.',
      ctaLabel: 'Book Now',
      ctaHref: '#booking',
    },
    {
      title: 'Campus2Corporate Pro',
      description:
        'Campus2Corporate Pro programs can be delivered in flexible formats based on institutional needs:',
      duration: 'Contact for Details',
      price: 'Contact for Pricing',
      highlights: [
        {
          label: 'All sessions can be customized based on:',
          items: [
            'Year of study',
            'Department or specialization',
            'Placement stage',
            'Institutional objectives',
          ],
        },
      ],
      subSections: [
        {
          title: 'Guest Lecture (60–90 Minutes)',
          description:
            'Focused, high-impact session covering one core topic aligned with placement readiness.',
        },
        {
          title: 'Half-Day Workshop (3–4 Hours)',
          description:
            'Interactive training session with practical exercises, resume insights, and Q&A.',
        },
        {
          title: 'Full-Day Intensive Program',
          description:
            'Comprehensive placement readiness training covering resume strategy, LinkedIn positioning, application approach, and interview preparation.',
        },
        {
          title: 'Multi-Day Structured Training',
          description:
            'A deeper, outcome-oriented program designed for final-year students, including mock interviews, group discussion practice, and structured career preparation.',
        },
      ],
      footer: 'For collaborations, please connect through Email.',
      ctaLabel: 'Enquire Via Email',
      ctaHref: '#booking',
    },
  ] as ServiceItem[],
};
