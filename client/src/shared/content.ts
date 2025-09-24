export type TeacherContent = {
  teacherName: string
  className: string
  quotes: string[]
  messages: { name: string; message: string }[]
  traits: string[]
}

export const defaultContent: TeacherContent = {
  teacherName: 'Mrs. Johnson',
  className: 'Class 5A',
  quotes: [
    'A teacher takes a hand, opens a mind, and touches a heart.',
    'Teaching is the profession that creates all other professions.',
    'The influence of a good teacher can never be erased.',
    'Education is the key to unlocking the world, a passport to freedom.',
  ],
  messages: [
    { name: 'Sarah M.', message: 'You make learning fun and exciting!' },
    { name: 'Michael R.', message: 'Thank you for believing in me.' },
    { name: 'Emma L.', message: "You're the best teacher ever!" },
    { name: 'David K.', message: 'Your patience means everything to us.' },
    { name: 'Noah P.', message: 'Your lessons always brighten our day.' },
    { name: 'Ava T.', message: 'Thanks for inspiring us to keep trying.' },
  ],
  traits: ['Patient', 'Inspiring', 'Caring', 'Wise', 'Encouraging', 'Creative'],
}


