import { API_HOST } from "../../constants"

export async function apiFetch(endpoint: string) {
  try {
    const fetchRes = await fetch(`${API_HOST}/${endpoint}`)
    const res = await fetchRes.json()
    return res
  } catch (error) {
    return error
  }
}
