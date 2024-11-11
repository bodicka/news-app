export const formatDate = (date) => {
  const option = {
    wekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', option)
}