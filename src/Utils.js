const isEmpty = (arr) => {
  if (arr !== undefined && arr !== null && arr.Length > 0) {
    return true;
  } else {
    return false;
  }
}

const logError = (message) => {
  console.log('Oops! ' + message);
}

// named export
export {isEmpty, logError}
