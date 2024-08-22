const BASE_URL = 'https://aircall-backend.onrender.com' // TODO: move to env

export const getCalls = async () => {
  const response = await fetch(`${BASE_URL}/activities`)
  const data = await response.json()
  return data
}

export const getCallDetail = async ({ id }) => {
  const response = await fetch(`${BASE_URL}/activities/${id}`)
  const data = await response.json()
  return data
}

export const updateCall = async ({ id, isArchived }) => {
  await fetch(`${BASE_URL}/activities/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_archived: isArchived }),
  })
}

export const resetCalls = async () => {
  await fetch(`${BASE_URL}/reset`, {
    method: 'PATCH',
  })
}
