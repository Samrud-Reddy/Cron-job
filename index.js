const axios = require('axios');
const startTime = process.hrtime();

axios.get('https://careforall.org.in/', {
})
.then((response) => {
  const timeTaken = process.hrtime(startTime);
  console.log(`Time taken: ${timeTaken[0]}s ${timeTaken[1]/1000000}ms`);
})
.catch((error) => {
  console.error(`Error: ${error}`);
});