import axiosConfig from "../axiosConfig";

const BASE = "/user";

const login = async (username, password) => {
  const { data } = await axiosConfig.post(`${BASE}/login`, { username, password });
  return data;
};

const register = async (user) => {
  const { data } = await axiosConfig.post(`${BASE}/create`, user);
  return data;
};

export {
  login,
  register
}