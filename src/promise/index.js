const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Opps')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
	.catch(err => console.error(err))

const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('True')
			}, 3000);
		} else {
			const error = new Error('oops')
		}
	})
}

somethingWillHappen2()
	.then(response => console.log(response))
	.catch(err => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then(response => {
		console.log('Array of results', response)
	})
	.catch(err => {
		console.log('Array of error', err)
	})
	