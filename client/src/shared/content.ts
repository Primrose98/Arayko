export type TeacherContent = {
  teacherName: string
  className: string
  quotes: string[]
  messages: { name: string; message: string }[]
  traits: string[]
}

export const defaultContent: TeacherContent = {
  teacherName: 'Ma\'am Larisa',
  className: 'STEM11A-EINSTEIN',
  quotes: [
    'A teacher takes a hand, opens a mind, and touches a heart.',
    'Teaching is the profession that creates all other professions.',
    'The influence of a good teacher can never be erased.',
    'Education is the key to unlocking the world, a passport to freedom.',
  ],
  messages: [
    { name: 'Your Students', message: 'Thank you for being an amazing teacher, Ma\'am Larisa!' },
    { name: 'STEM11A-EINSTEIN', message: 'We appreciate your dedication and patience with us.' },
    { name: 'Your Class', message: "Your passion for teaching inspires us every day." },
    { name: 'Your Students', message: 'Thank you for making learning enjoyable and meaningful.' },
    { name: 'STEM11A-EINSTEIN', message: 'Your guidance helps us grow and succeed.' },
    { name: 'Your Class', message: 'We are grateful for your support and encouragement.' },
  ],
  traits: [
    'Patient', 
    'Inspiring', 
    'Caring', 
    'Knowledgeable', 
    'Encouraging', 
    'Passionate',
    'Dedicated',
    'Approachable',
    'Supportive',
    'Inspiring',
    'Motivating',
    'Understanding'
  ],
}


