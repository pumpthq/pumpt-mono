import { useQuery } from "blitz";
import getProfile from "app/auth/queries/getProfile";
export const useCurrentProfile = () => {
  const [profile] = useQuery(getProfile, null, { suspense: false, staleTime: Infinity, });
  return profile;
};