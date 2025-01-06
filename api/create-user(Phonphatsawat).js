const axios = require("axios");

const baseURL = "http://localhost:8080/api/auth/local/register";

const createUser = async (userData) => {
  const config = {
    headers: {
      Authorization:
        "Bearer 2241e8f9955549692230435bf3329ea26bb01acfb75bbfabab873ffd7f8ee32bfbe048bf212630ff48c6719e11647203a5360963d8ed95c92d01edd1eb28ee19d45019fa62750f3d0d0d6f6a3277dbec754b4e58f43a65b171c06fa1aaedd87e3f2287f478301827f7419b3675112018eb2780f7babb116c8fc1d855d86f4a15",
    },
  };

  const response = await axios.post(baseURL, userData, config);
  return response.data;
};

(async () => {
  try {
    const userData = {
      username: "Picklovephoompoom",
      email: "test@test2.com",
      password: "Password1",
    };
    
    const data = await createUser(userData);
    console.log("User profile", data.user);
    console.log("User token", data.jwt);
  } catch (error) {
    console.error("An error occurred:", error.response);
  }
})();
