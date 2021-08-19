const doSome = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => {
    resolve('whoohoo')
    }, 3000)
    : reject(new Error('error'))
  })
}

const doAsync = async () => {
  const something = await doSome();
  console.log(something)
}

console.log('before')
doAsync()
console.log('After')

const anotherFunction = async () => {
  try {
    const something = await doAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})()