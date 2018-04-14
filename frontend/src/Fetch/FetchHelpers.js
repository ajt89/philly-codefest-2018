export const getOptions = () => {
  return {
    method: 'GET'
  };
}

export const postOptions = (body) => {
  return {
    method: 'POST',
    body: JSON.stringify(body)
  };
}
