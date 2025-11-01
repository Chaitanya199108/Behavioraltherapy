export const services = [
  {
    id: 1,
    icon: "Baby",
    title: "Early Intervention",
    description: "Early detection and intervention for developmental delays and behavioral challenges.",
    features: [
      "Developmental assessments",
      "Play-based therapy",
      "Parent coaching",
      "Milestone tracking"
    ],
    path: "/services/early-intervention"
  },
  {
    id: 2,
    icon: "Heart",
    title: "Behavioral Therapy",
    description: "Comprehensive behavioral support for children with various challenges.",
    features: [
      "Applied Behavior Analysis",
      "Cognitive Behavioral Therapy",
      "Social skills training",
      "Emotion regulation"
    ],
    path: "/services/behavioral-therapy"
  },
  {
    id: 3,
    icon: "School",
    title: "Educational Support",
    description: "Academic and learning support integrated with behavioral interventions.",
    features: [
      "Academic skill building",
      "IEP support",
      "Learning strategies",
      "School coordination"
    ],
    path: "/services/educational-support"
  }
];

export const contactInfo = {
  phones: [
    "+91 95735 30613"
  ],
  email: "behaviouraltherapy@gmail.com",
  addresses: [
    {
      name: "Behaviour Healing Therapy Center",
      street: "J.P.N.NAGAR, phase 2, Near Viswanad garden",
      city: "Miyapur",
      state: "500049"
    },
   
  ],
  hours: {
    monday: "9:00 AM - 6:30 PM",
    tuesday: "9:00 AM - 6:30 PM",
    wednesday: "9:00 AM - 6:30 PM",
    thursday: "9:00 AM - 6:30 PM",
    friday: "9:00 AM - 6:30 PM",
    saturday: "9:00 AM - 6:30 PM",
    sunday: "Closed"
  }
};

export const statistics = {
  studentsEnrolled: 120,
  expertTherapists: 18,
  yearsExperience: 12
};

export const therapists = [
  {
    id: 't1',
    name: 'Dr. Sarah Johnson',
    role: 'Lead Behavioral Therapist',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    certifications: ['BCBA', 'MSc'],
    bio: 'Specialist in early childhood behavioral therapy.',
    specialties: ['ABA Therapy', 'ADHD Support']
  },
  {
    id: 't2',
    name: 'Dr. Michael Chen',
    role: 'Child Psychologist',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    certifications: ['PhD'],
    bio: 'Focus on autism spectrum and social skills.',
    specialties: ['Autism Spectrum', 'Social Skills']
  }
]

export const testimonials = [
  { id: 'r1', parent: 'Asha R.', child: 'Rahul', content: 'Our son has made incredible progress.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { id: 'r2', parent: 'Priya S.', child: 'Maya', content: 'Compassionate staff and effective plans.', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=100&h=100&fit=crop' }
]

export const blogPosts = [
  {
    id: 'blog1',
    title: 'Understanding Early Signs of Autism in Toddlers',
    excerpt: 'Learn about the common early indicators of autism spectrum disorder in young children and when to seek professional evaluation.',
    content: `Early detection of autism spectrum disorder (ASD) can lead to better outcomes through timely intervention. 
    This article discusses key developmental markers to watch for in toddlers, including social communication, 
    behavioral patterns, and sensory responses. We'll explore both typical and atypical development patterns 
    and provide guidance on when to consult with healthcare professionals.`,
    author: 'Dr. Sarah Johnson',
    date: '2023-12-15',
    category: 'Autism',
    tags: ['Early Intervention', 'Child Development', 'Autism Signs'],
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1602052793312-c6c2091966c4?w=800&h=400&fit=crop'
  },
  {
    id: 'blog2',
    title: 'Effective Strategies for Managing ADHD in the Classroom',
    excerpt: 'Practical tips and techniques for teachers and parents to support children with ADHD in academic settings.',
    content: `Creating an inclusive and supportive learning environment for children with ADHD requires 
    understanding, patience, and the right strategies. This guide provides actionable techniques for classroom 
    management, attention support, and academic success. Learn how to implement effective organizational 
    systems and maintain positive reinforcement practices.`,
    author: 'Dr. Michael Chen',
    date: '2023-12-10',
    category: 'ADHD',
    tags: ['Education', 'Classroom Strategies', 'ADHD Management'],
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop'
  },
  {
    id: 'blog3',
    title: 'The Power of Play Therapy in Child Development',
    excerpt: 'Discover how play therapy helps children process emotions and develop essential life skills.',
    content: `Play therapy is a powerful tool in child development and therapeutic intervention. Through guided 
    play, children can express emotions, develop social skills, and work through challenges in a safe and 
    natural environment. This article explores different play therapy techniques and their benefits for 
    various developmental needs.`,
    author: 'Dr. Sarah Johnson',
    date: '2023-12-05',
    category: 'Therapy',
    tags: ['Play Therapy', 'Child Development', 'Emotional Growth'],
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=400&fit=crop'
  },
  {
    id: 'blog4',
    title: 'Sensory Processing: Creating Supportive Environments',
    excerpt: 'How to create sensory-friendly spaces at home and school for children with processing sensitivities.',
    content: `Understanding and accommodating sensory processing differences is crucial for creating inclusive 
    environments. This comprehensive guide covers the different types of sensory sensitivities, practical 
    modifications for home and classroom settings, and strategies for helping children cope with sensory 
    challenges.`,
    author: 'Dr. Michael Chen',
    date: '2023-11-30',
    category: 'Sensory',
    tags: ['Sensory Processing', 'Environmental Design', 'Accommodation'],
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1615147342761-9238e17ef448?w=800&h=400&fit=crop'
  }
]
