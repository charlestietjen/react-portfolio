function isEmailValid(email) {
      const regex = /^[\w\+-.]+@([\w-]+\.)+[\w-]{2,4}$/
      return regex.test(email);
}

export { isEmailValid };