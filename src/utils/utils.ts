export const formatDateToReadable = (date: Date) => {
  const d = new Date(date)

  const datePart = d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return datePart
}
