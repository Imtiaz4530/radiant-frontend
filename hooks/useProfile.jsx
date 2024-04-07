"use client";
import GlobalLoading from "@/component/reusable/loading/GlobalLoading";
import { fetchProfile } from "@/utils/fetchProfile";
import { useEffect, useState } from "react";
import { useQuery, keepPreviousData } from "react-query";

export const useProfile = (userId) => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchProfile,
    queryKey: ["Profile"],
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <GlobalLoading isLoading={isLoading} />;
  }

  if (error) {
    return { error };
  }

  if (!data || !data.profiles || !data.profiles.data) {
    return null;
  }

  let profileData = null;
  let profileId = null;

  if (userId) {
    const findProfile = data.profiles.data.find(
      (item) =>
        parseInt(item?.attributes?.users_permissions_user?.data?.id) === userId
    );

    if (findProfile) {
      profileData = findProfile.attributes;
      profileId = findProfile.id;
    }
  }

  return { profileData, profileId };
};

export const useGetUserFromStorage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserInfo = () => {
      setLoading(true);
      const storedUserInfo = localStorage.getItem("user");
      if (storedUserInfo) {
        setUser(JSON.parse(storedUserInfo));
      }
    };

    setLoading(false);
    fetchUserInfo();
  }, []);

  return {
    user,
    loading,
  };
};
