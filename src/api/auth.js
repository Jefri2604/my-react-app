import api from "./api";

// ⚠️ endpoint name later change pannalaam
export const signInApi = (data) => {
  return api.post("/signin", data);
};

export const signUpApi = (data) => {
  return api.post("/signup", data);
};
