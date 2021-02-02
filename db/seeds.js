import db from "./index"


/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
let candidates = [
  {
    id: "1a71f6ea-b5f8-4b0d-914e-244562fa2dd4",
    user: "c5fc6cbf-8e6e-4d96-91b6-0f0c6a2076d4",
    firstName: "Richard",
    lastName: "Prins",
    active: true,
    employments: [
      "Full-Time",
      "Freelance",
      "Part-Time"
    ],
    recentJob: "Coordinator",
    values: [
      "Professional Growth",
      "Salary | Benefits | Perks",
      "Start-up | Entrepreneurial"
    ],
    recentWorkingAreas: [
      {
        "_id": "5fcfeadefa04f77e56319918",
        "value": "Digital",
        "parent": "Marketing | Creative"
      },
      {
        "_id": "5fcfeadefa04f77e56319919",
        "value": "Integrated",
        "parent": "Marketing | Creative"
      }
    ],
    recentAreaExperience: "3-5 years",
    preferredCompanySize: "10-50 employees",
    recentAnnualIncome: "<$100K",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611356299/candidate-profile-images/Richard_Prins_xexrrf.jpg",
    interestWorkingAreas: [
      "Digital Media",
      "Digital Platform",
      "Other"
    ],
    skills: [
      "Retargeting",
      "MS Office (Word,Excel, PPT)",
      "Google Analytics",
      "Ad-Serving Platforms"
    ],
    resumeId: "f3fedba2-6381-44dc-8e38-82523daa4536",
    resumeName: "6bbcc2ce-00a8-4c12-9cf8-b7dd8d7023df (1).pdf",
    highestDegree: "High School",
    location: "Atlanta, GA, USA",
    locationCoordinates: {
      "lat": 33.7489954,
      "lng": -84.3879824
    },
    abilityToRelocate: false,
    socialMedia: {
      "linkedIn": "www.linkedin.com/richard-prins-jr/",
      "twitter": "@scott_prins"
    },
    isFilled: false,
    fillSteps: [
      "CANDIDATE_APPLICATION_LOCATION_STEP",
      "CANDIDATE_APPLICATION_SOCIAL_MEDIA_STEP",
      "CANDIDATE_APPLICATION_SKILLS_STEP"
    ],
    fillProgress: 67,
  },
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad4",
    user: "bca2c54f-3999-409b-956d-6f453edd4fc8",
    firstName: "Alan",
    lastName: "Smith",
    active: true,
    employments: [
      "Full-Time"
    ],
    recentJob: "Coordinator",
    recentWorkingAreas: [
      {
        "_id": "5fd97a29552881125c6688b7",
        "parent": "Sales",
        "value": "Ad Tech/Platform"
      }
    ],
    recentAreaExperience: "0-2 years",
    preferredCompanySize: "10-50 employees",
    recentAnnualIncome: "<$100K",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611355544/candidate-profile-images/Alan_Smith_cemcot.jpg",
    interestWorkingAreas: [
      "Ad Tech"
    ],
    resumeId: "0603855f-ed22-4f85-865f-21f6da681291",
    resumeName: "72c65e2c-6c26-4cb2-8ad0-9d6ae78ad648.pdf",
    highestDegree: "High School",
    location: "New York, NY, United States",
    abilityToRelocate: false,
    socialMedia: {
      "linkedIn": "https://www.linkedin.com/in/chip-kennedy",
      "twitter": "@chippykennedy"
    },
    isFilled: false,
    fillSteps: [
      "CANDIDATE_APPLICATION_PROFILE_PHOTO_STEP",
      "CANDIDATE_APPLICATION_LOCATION_STEP",
      "CANDIDATE_APPLICATION_SOCIAL_MEDIA_STEP"
    ],
    fillProgress: 67,
  },
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad5",
    user: "1d7ce646-6091-411d-b537-a037b7837cd4",
    firstName: "Bob",
    lastName: "Smith",
    active: true,
    employments: [
      "Part-Time"
    ],
    recentJob: "Account Manager",
    recentWorkingAreas: [
      {
        "_id": "5fd97a29552881125c6688b9",
        "value": "Digital",
        "parent": "Account Management"
      }
    ],
    recentAreaExperience: "3-5 years",
    preferredCompanySize: "10-50 employees",
    recentAnnualIncome: "$100K-$149K",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611355544/candidate-profile-images/Bob_Smith_glzoy0.jpg",
    interestWorkingAreas: [
      "Digital Media"
    ],
    resumeId: "0605f2c5-b48e-4de3-a4c3-42f836955205",
    resumeName: "d8367469-2c07-4883-8cee-68fbe5125dec.pdf",
    workingExperience: [
      {
        "default": [],
        "_id": "5fd97a29552881125c6688ba",
        "companyName": "Chip Kennedy Consulting LLC",
        "position": "Lead Engineer",
        "location": "New York, NY",
        "duty": "Worked Hard",
        "startWorkingAt": "02/2012",
        "isCurrentJob": true
      }
    ],
    highestDegree: "Undergraduate",
    education: [
      {
        "_id": "5fd97a29552881125c6688b8",
        "schoolName": "Case Western Reserve University",
        "specialty": "Computer Science",
        "startStudyAt": "2012",
        "endStudyAt": "2014",
        "degree": "Undergraduate"
      }
    ],
    location: "Boston, MA, United States",
    locationCoordinates: {},
    abilityToRelocate: true,
    socialMedia: {},
    isFilled: false,
    fillSteps: [
      "CANDIDATE_APPLICATION_PROFILE_PHOTO_STEP",
      "CANDIDATE_APPLICATION_EXPERIENCE_STEP",
      "CANDIDATE_APPLICATION_LOCATION_STEP",
      "CANDIDATE_APPLICATION_SOCIAL_MEDIA_STEP"
    ],
    fillProgress: 75,
  },
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    user: "031b870d-68bc-49b3-b9b3-09ccc034a86d",
    firstName: "Elon",
    lastName: "Musk",
    active: true,
    employments: [
      "Full-Time"
    ],
    recentJob: "Coordinator",
    recentWorkingAreas: [
      {
        "_id": "5fd97a29552881125c6688bc",
        "value": "Ad Tech/Platform",
        "parent": "Sales"
      }
    ],
    recentAreaExperience: "0-2 years",
    preferredCompanySize: "10-50 employees",
    recentAnnualIncome: "$500K+",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611355544/candidate-profile-images/Elon_Musk_pm8fal.jpg",
    interestWorkingAreas: [
      "Ad Tech"
    ],
    resumeId: "de99fd65-6128-4bb7-befd-ad29adec682f",
    resumeName: "a9e1be52-0f36-4100-90bf-19386c88d6e7.pdf",
    workingExperience: [
      {
        "default": [],
        "_id": "5fd97a29552881125c6688bd",
        "companyName": "SpaceX",
        "position": "CEO",
        "location": "New York, NY",
        "duty": "Worked Hard",
        "startWorkingAt": "02/2003",
        "isCurrentJob": true
      }
    ],
    highestDegree: "Undergraduate",
    education: [
      {
        "_id": "5fd97a29552881125c6688bb",
        "schoolName": "Tesla University",
        "specialty": "Rocket Science",
        "startStudyAt": "2012",
        "endStudyAt": "2014",
        "degree": "Undergraduate"
      }
    ],
    location: "New York, NY, United States",
    abilityToRelocate: true,
    socialMedia: {
      "linkedIn": "https://www.linkedin.com/in/elon-musk",
      'twiter': "@elonmusk"
    },
    isFilled: false,
    fillSteps: [
      "CANDIDATE_APPLICATION_EXPERIENCE_STEP",
      "CANDIDATE_APPLICATION_LOCATION_STEP",
      "CANDIDATE_APPLICATION_SOCIAL_MEDIA_STEP"
    ],
    fillProgress: 67,
  }
]

let companies = [
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    name: "Rosetta Software",
    type: ["Ad Tech"],
    foundDate: "2008",
    employeesAmount: "< 10 employees",
    headquartersLocation: "Cleveland, OH, United States",
    socialMedia: {
      "website": "http://website.com",
      "linkedIn": "http://website.com",
      "twitter": "@acc"
    },
    logo: "https://res.cloudinary.com/pumpt/image/upload/v1611358976/company-profile-images/m-FEPZtm_400x400_pp6rc7.jpg",
    description: "In a Rosetta Stone Language Learning exercise, the student pairs sound or text to one of several images. The number of images per screen varies. For example, the software shows the student four photographs. A native speaker makes a statement that describes one of the photographs, and the statement is printed on the screen; the student chooses the photograph that the speaker described. In another variation, the student completes a textual description of a photograph. In writing exercises, the software provides an on-screen keyboard for the user to type characters that are not in the Latin alphabet. Grammar lessons cover grammatical tense and grammatical mood. In grammar lessons, the program firstly shows the learner several examples of a grammatical concept, and in some levels the word or words the learner should focus on are highlighted. Then the learner is given a sentence with several options for a word or phrase, and the student chooses the correct option. If the student has a microphone, the software can attempt to evaluate word pronunciation. Each lesson concludes with a review of the content in that lesson, and each unit ",
    quoteOrMotto: "Work Hard/Play Hard",
    isPremium: false,
    isFilled: false,
    fillSteps: [],
    fillProgress: 0,
  },
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    name: "New York Times",
    type: [
      "Traditional Publisher"
    ],
    foundDate: "1988",
    employeesAmount: "200-500 employees",
    headquartersLocation: "New York, NY, United States",
    officeLocations: [
      {
        "_id": "5fd97a29552881125c6688be",
        "location": "Washington D.C. United States"
      },
      {
        "_id": "5fd97a29552881125c6688bf",
        "location": "Seattle, WA, United States"
      }
    ],
    logo: "https://res.cloudinary.com/pumpt/image/upload/v1611359510/company-profile-images/bqp32una36b06hmbulla_e54moj.png",
    description: "The New York Times (sometimes abbreviated NYT and The Times) is an American daily newspaper, founded and continuously published in New York City since September 18, 1851, by The New York Times Company. The New York Times has won 122 Pulitzer Prizes, more than any other newspaper.",
    quoteOrMotto: "News is serious",
    isPremium: false,
    isFilled: false,
    fillSteps: [],
    fillProgress: 0,
  }
]

let recruiters = [
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad8",
    company: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    user: "1e671205-dd05-48ff-b3c4-38b8ebf3ff73",
    firstName: "Rebecca",
    lastName: "Ng",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611360413/recruiter-profile-images/Rebecca_jzz7lr.jpg",
    position: "Senior Recruiter",
  },
  {
    id: "02109cb7-eab3-429e-90fa-041e255f8ad9",
    company: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    userId: "b766e020-ba9a-4b63-9b4d-b2f8f24d5a8c",
    firstName: "Tyler",
    lastName: "Perry",
    avatar: "https://res.cloudinary.com/pumpt/image/upload/v1611360412/recruiter-profile-images/Tyler_Perry_bxjki8.jpg",
    position: "Senior Recruiter",
  }
]

let vacancies = [
  {
    id: "3077ee1b-c022-40c9-b72c-e42323c7131f",
    title: "Sales",
    industries: [
      {
        "_id": "5fd97a29552881125c6688c1",
        "parent": "Sales",
        "value": "Ad Tech/Platfowm"
      }
    ],
    salary: "$400K-$499K",
    company: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    recruiter: "02109cb7-eab3-429e-90fa-041e255f8ad9",
    experience: "16+ years",
    degree: "Graduate",
    employment: [
      "Full-Time"
    ],
    description: "Come work for a fast paced well-know news network",
    location: [
      "Cleveland, OH, United States"
    ],
    status: "opened",
    responsibilities: [
      "Coordinate background research on potential advertisering partners",
      "Source and coordinate leads for potential partners"
    ],
    requirements: [
      "Proficency in Microsoft Office, HubSpot, and multiple CRMs",
      "Ability to lead large teams"
    ],
    keywords: [
      "Yield",
      "Programmatic",
      "Data Science",
      "Data Analysis",
      "Staq",
      "Ad Operations",
      "Advertising Operations",
      "Datarama",
      "Ad Stack",
      "Ad Trafficking ",
      "Digital Media",
      "Ad Serving",
      "Campaign",
      "Optimization",
      "Advanced Advertising",
      "Linear TV",
      "Data Products",
      "Advertising Products",
      "Linear Audience",
      "Digital Advertising",
      "Open Exchange",
      "DFP",
      "SSP",
      "AdX",
      "DSP",
      "DMP",
      "SalesForce",
      "Full Stack",
      "Version Control",
      "e commerce",
    ],
  },
  {
    id: "7fe0a5de-ade8-45fe-a41c-365c20b49496",
    title: "Sales",
    industries: [
      {
        "_id": "5fd97a29552881125c6688c0",
        "parent": "Sales",
        "value": "Ad Tech/Platfowm"
      }
    ],
    salary: "$100K-$149K",
    company: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    recruiter: "02109cb7-eab3-429e-90fa-041e255f8ad8",
    experience: "0-2 years",
    degree: "Undergraduate",
    employment: [
      "Full-Time"
    ],
    description: "JobPost A has an awesome description. Come work for a fast paced well-know news network",
    location: [
      "New York, NY, United States"
    ],
    status: "opened",
    responsibilities: [
      "Coordinate background research on potential advertisering partners",
      "Source and coordinate leads for potential partners"
    ],
    requirements: [
      "Proficency in Microsoft Office, HubSpot, and multiple CRMs",
      "Ability to lead large teams"
    ],
    keywords: [
      "Yield",
      "Programmatic",
      "Data Science",
      "Data Analysis",
      "Staq",
      "Ad Operations",
      "Advertising Operations",
      "Datarama",
      "Ad Stack",
      "Ad Trafficking ",
      "Digital Media",
      "Ad Serving",
      "Campaign",
      "Optimization",
      "Advanced Advertising",
      "Linear TV",
      "Data Products",
      "Advertising Products",
      "Linear Audience",
      "Digital Advertising",
      "Open Exchange",
      "DFP",
      "SSP",
      "AdX",
      "DSP",
      "DMP",
      "SalesForce",
      "Full Stack",
      "Version Control",
      "e commerce",
    ],
  }
]

let matches = [
  {
    id: "4f564e5f-14e5-42b9-9ca3-07d3353af1a8",
    candidateId: "1a71f6ea-b5f8-4b0d-914e-244562fa2dd4",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    vacancyId: "7fe0a5de-ade8-45fe-a41c-365c20b49496",
    pdfScore: 17,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate did not meet degree requirement"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "f8cbb876-56de-4163-9cf7-31fcdc839876",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad4",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    vacancyId: "7fe0a5de-ade8-45fe-a41c-365c20b49496",
    pdfScore: 13,
    score: 95,
    breakdown: {
      "expertise": "20/20",
      "industry": "0/60",
      "size": "5/40",
      "years": "30/45",
      "demonstratedExperience": "30/45",
      "employment": "10/10",
      "values": "0/15",
      message: ""
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "4f544cfb-5ee4-4b7e-8fc2-9008e0b4cf2a",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    vacancyId: "7fe0a5de-ade8-45fe-a41c-365c20b49496",
    pdfScore: 3,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate salary is higher than vacancy"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "147d41fa-4f12-47e3-88a5-ca11f41af486",
    candidateId: "1a71f6ea-b5f8-4b0d-914e-244562fa2dd4",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    vacancyId: "3077ee1b-c022-40c9-b72c-e42323c7131f",
    pdfScore: 17,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate doesn't have required number of years of experience"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "b97b68f2-a5fe-464f-a397-a63f1f74fd01",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad4",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    vacancyId: "3077ee1b-c022-40c9-b72c-e42323c7131f",
    pdfScore: 13,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate doesn't have required number of years of experience"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "273c1a15-a5ad-4d3f-a684-cf059733b920",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    vacancyId: "3077ee1b-c022-40c9-b72c-e42323c7131f",
    pdfScore: 3,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate salary is higher than vacancy"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "a03cfa6c-b928-424b-aa83-ffa272ba5a63",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad5",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad6",
    vacancyId: "7fe0a5de-ade8-45fe-a41c-365c20b49496",
    pdfScore: 20,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate Field of Expertise does not match vacancy"
    },
    isApproved: false,
    isBookmarked: false,
  },
  {
    id: "3d584801-c84c-4868-9ca2-ffc7b8196aaa",
    candidateId: "02109cb7-eab3-429e-90fa-041e255f8ad5",
    companyId: "02109cb7-eab3-429e-90fa-041e255f8ad7",
    vacancyId: "3077ee1b-c022-40c9-b72c-e42323c7131f",
    pdfScore: 20,
    score: 0,
    breakdown: {
      "expertise": {
        "score": 0,
        "total": 20
      },
      "industry": {
        "score": 0,
        "total": 60
      },
      "size": {
        "score": 0,
        "total": 40
      },
      "years": {
        "score": 0,
        "total": 45
      },
      "demonstratedExperience": {
        "score": 0,
        "total": 45
      },
      "employment": {
        "score": 0,
        "total": 10
      },
      "values": {
        "score": 0,
        "total": 15
      },
      message: "Candidate doesn't have required number of years of experience"
    },
    isApproved: false,
    isBookmarked: false,
  }
]

let keywords = [
  {
    keywordList: [
      "Yield",
      "Programmatic",
      "Data Science",
      "Data Analysis",
      "Staq",
      "Ad Operations",
      "Advertising Operations",
      "Datarama",
      "Ad Stack",
      "Ad Trafficking ",
      "Digital Media",
      "Ad Serving",
      "Campaign",
      "Optimization",
      "Advanced Advertising",
      "Linear TV",
      "Data Products",
      "Advertising Products",
      "Linear Audience",
      "Digital Advertising",
      "Open Exchange",
      "DFP",
      "SSP",
      "AdX",
      "DSP",
      "DMP",
      "SalesForce",
      "Full Stack",
      "Version Control",
      "e commerce",
    ]
  }
]

const seed = async () => {
  try {
    candidates.forEach(entry = async () => {
      await db.candidate.create({
        data: entry
      })
    })
    companies.forEach(entry = async () => {
      await db.company.create({
        data: entry
      })
    })
    keywords.forEach(entry = async () => {
      await db.keywords.create({
        data: entry
      })
    })
    recruiters.forEach(entry = async () => {
      await db.recruiter.create({
        data: entry
      })
    })
    vacancies.forEach(entry = async () => {
      await db.vacancy.create({
        data: entry
      })
    })
    matches.forEach(entry = async () => {
      await db.matching.create({
        data: entry
      })
    })
  } catch (error) {
    console.log('Something went wrong', error)
  }
};



export default seed;