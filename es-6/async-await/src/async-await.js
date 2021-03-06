const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 2000)
})

//async function normal
async function executaPromise() {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
}

//async function com arrow function
const executaPromise = () => {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
}

executaPromise()