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
    { name: 'Student', message: 'Happy Teacher\'s Day po! Salamat dahil hindi lang academics ang tinuturo ninyo, kundi pati disiplina at kabutihan.' },
    { name: 'Student', message: 'Ma\'am/Sir, hindi po biro maging adviser, pero araw-araw niyo pa rin kaming ginagabayan.' },
    { name: 'Student', message: 'Pasensya na po kung minsan mas maingay pa kami kaysa sa jeep sa rush hour.' },
    { name: 'Student', message: 'Kung may award po sa \'Pinakamahabang Pasensya,\' sa inyo na agad \'yon.' },
    { name: 'Student', message: 'Happy Teacher\'s Day po! Kayo po ang glue na nagdidikit sa klase namin, kahit minsan parang Lego na nagkakalas.' },
    { name: 'Student', message: 'Kung wala po kayong guidance, baka nagkalat na kami parang Wi-Fi na walang password.' },
    { name: 'Student', message: 'Salamat po dahil hindi lang teacher, kundi parang second parent na rin kayo.' },
    { name: 'Student', message: 'Ma\'am/Sir, adviser na, teacher pa, minsan guidance counselor din — package deal talaga kayo.' },
    { name: 'Student', message: 'Salamat po sa lahat ng reminders kahit alam namin minsan hindi agad namin nasusunod.' },
    { name: 'Student', message: 'Kung adviser po kayo sa game, kayo yung legendary healer na laging nagbubuo sa team.' },
    { name: 'Student', message: 'Ma\'am/Sir, maraming salamat po sa pag-intindi, kahit parang mini-zoo minsan ang klase namin.' },
    { name: 'Student', message: 'Kung may report card para sa adviser, 100% Outstanding na po kayo.' },
    { name: 'Student', message: 'Happy Teacher\'s Day! Thank you for being not just a teacher, but a mentor and a role model.' },
    { name: 'Student', message: 'You\'re not only guiding us in class, but also helping us grow as people.' },
    { name: 'Student', message: 'Thank you for your patience, even when we test it almost every day.' },
    { name: 'Student', message: 'If there was a medal for endurance, you\'d be a gold medalist.' },
    { name: 'Student', message: 'You hold our class together, like tape on a project that keeps falling apart.' },
    { name: 'Student', message: 'Thank you for teaching us lessons we\'ll use not just in exams, but in life.' },
    { name: 'Student', message: 'We appreciate you for being both strict and caring at the same time.' },
    { name: 'Student', message: 'You\'re like our in-game support — always healing us and keeping us in line.' },
    { name: 'Student', message: 'Even when we act like chaos, you bring order.' },
    { name: 'Student', message: 'If there was a student adviser leaderboard, you\'d be number one.' },
    { name: 'Student', message: 'Thank you for being the reason our class feels like a family.' },
    { name: 'Student', message: 'Happy Teacher\'s Day! We\'re lucky to have you as our homeroom teacher.' },
    { name: 'Student', message: 'Happy teacher\'s day po, ma\'am lars! dapat po hanggang dulo na kayo ni sir cegales tas sana po kulitin nyo si sir na taasan pa grades namin sa pcal hahahaha, happy teacher\'s day po ma\'ammmm!' },
    { name: 'Student', message: 'Thanks for inspiring us to keep trying ma\'am, happy teacher\'s day po ma\'ammm' }
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


