export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

// Relevant coursework from the BS Computer Science at University of Lahore.
const courses: Course[] = [
  {
    title: 'Data Structures and Algorithms',
    number: 'CS 201',
    link: 'https://uol.edu.pk',
    university: 'UOL',
  },
  {
    title: 'Artificial Intelligence',
    number: 'CS 351',
    link: 'https://uol.edu.pk',
    university: 'UOL',
  },
  {
    title: 'Machine Learning',
    number: 'CS 451',
    link: 'https://uol.edu.pk',
    university: 'UOL',
  },
  {
    title: 'Distributed Systems',
    number: 'CS 431',
    link: 'https://uol.edu.pk',
    university: 'UOL',
  },
];

export default courses;
