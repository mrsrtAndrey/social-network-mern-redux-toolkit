import axios from "axios";

const API_URL = "http://localhost:5000/";

// Возвращает ответ на запрос регистрации
const register = (email, name, password) => {
   return axios.post(API_URL + "api/auth/registration", {
      email,
      name,
      password,
   },
   {headers: {'Content-Type': 'application/json'}});
};

// проверка на регистрацию пользователя. 
// Если в ответе есть токен, то сохранить данные(token, userId) в localStorage
// Вернуть данные (token, userId)
const login = (email, password) => {
   return axios.post(API_URL + "api/auth/login", {
      email,
      password,
   })
   .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
   });
};

// Очистить localStorage от данных (token, userId)
const logout = () => {
   localStorage.removeItem("user");
};


const authService = {
  register,
  login,
  logout,
};


export default authService;