import db from 'db'


export default async function getProfile(_ = null, { session }) {
  if (!session.userId) return null;
  let profile;
  switch (session.roles.toString()) {
    case 'CANDIDATE':
      profile = await db.candidate.findFirst({
        where: {
          userId: session.userId
        }
      })
      break;
    case 'RECRUITER':
      profile = await db.recruiter.findFirst({
        where: {
          userId: session.userId
        }
      })
      break;

  }
  return profile
}