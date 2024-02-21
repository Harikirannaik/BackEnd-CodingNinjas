const axios = require('axios');

const Solution = async () => {
  // Write your code here
  try {
    const response = await axios.get(
      `https://api.codingninjas.com/api/v3/event_tags`)

    const responseData = response.data;
    console.log(responseData);
  
  } catch (error) {
    console.log("Error in fetching", error.message);
  }
const print = async() =>{ 
  console.log("Hi");
};
};
Solution();
module.exports = Solution;