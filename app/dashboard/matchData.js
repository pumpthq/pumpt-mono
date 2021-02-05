import faker from 'faker'

export const matchData = [
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: true,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: true,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: true,
    isApproved: true,
    isRejected: false,
  },
  {
    id: faker.random.uuid(),
    score: 50,
    psfScore: 25,
    company: {
      name: faker.company.companyName(),
      id: faker.random.uuid(),
      type: faker.company.bs(),
      image: faker.image.business()
    },
    candidate: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    vacancy: {
      id: faker.random.uuid(),
      description: faker.lorem.paragraphs(),
      responsibilities: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      requirements: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ],
      title: faker.company.bsAdjective(),
      salary: faker.random.number(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
    },
    recruiter: {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.company.bsNoun()
    },
    isBookmarked: false,
    isApproved: false,
    isRejected: true,
  }
]