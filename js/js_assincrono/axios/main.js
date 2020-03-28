axios.get("https://api.github.com/users/galleonpt")
  .then(function (response) {
    console.log(response.data.company)
  })

  .catch(function (error) {
    console.warn(error)
  })