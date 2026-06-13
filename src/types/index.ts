export interface Profile {
  technologies: any;
  firstName: string;
  lastName: string;
  educationTitle: string; // e.g. "Mc. Computer Science"
  description?: string;
  birthDate: string; // dd,mm,yyyy
  homeAddress: string;
  phoneNumber: string; // "+47 XXX XX XXX" — keep as string, not integer (leading zeros, spaces, +)
  email: string;
  linkedin: string;
  github: string;
}

export interface Education {
  schoolName: string;
  degreeTitle: string;
  description?: string;
  location: string;
  startDate: Date; // e.g. "Aug 2020"
  endDate?: Date; // e.g. "Jun 2024" — omit/undefined → render "Present"
  link?: string;
}

export interface Experience {
  companyName: string;
  type: string; // e.g. "Full-time", "Part-time", "Internship"
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  description?: string;
  link?: string;
}

export interface Projects {
  projectName: string;
  course?: string;
  description?: string; 
  technologies: string[];
}