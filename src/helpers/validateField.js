export default (key, touched, errors) => {
    if (touched[key]) {
      if (errors[key]) {
        return true;
      } else {
        return false;
      }
    } else {
      return null;
    }
  };