"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckAuthToken = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(false);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  return { loading };
};

export const useHandleLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  return { loading };
};

export const useIsLoggedIn = () => {
  const router = useRouter();
  const [logged, setLogged] = useState(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return !!token;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, [router]);

  return { logged, setLogged };
};

export const useLogout = (setLogged) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLogged(false);
      if (pathName.startsWith("/private")) {
        router.push("/auth/login");
        return;
      }
    }
  };

  return { handleLogout };
};
