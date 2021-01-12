export default async function logout(_, {
  session
}) {
  return await session.revoke();
}