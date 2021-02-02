import db from "db";
export default async function getCurrentUser(_ = null, { session }) {
  if (!session.userId) return null;
  const user = await db.user.findFirst({
    where: {
      id: session.userId
    },
    select: {
      id: true,
      email: true,
      role: true
    }
  });
  let profile;
  switch (user.role) {
    case 'CANDIDATE':
      profile = await db.candidate.findFirst({
        where: {
          userId: session.userId
        }
      })
      break;
    case "RECRUITER":
      profile = await db.recruiter.findFirst({
        where: {
          userId: session.userId
        }
      })
      break;
    default:
      break;
  }



  return { user, profile }
}