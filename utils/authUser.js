import instance from "./axios";

export const loginUser = async (email, password) => {
  const res = await instance.post("/api/auth/local", {
    identifier: email,
    password: password,
  });

  return res?.data;
};

export const registerUser = async (username, email, password) => {
  const res = await instance.post("/api/auth/local/register", {
    email: email,
    password: password,
    username: username,
  });

  return res?.data;
};
