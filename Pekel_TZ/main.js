
fetch('http://localhost:5235/connection')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
});