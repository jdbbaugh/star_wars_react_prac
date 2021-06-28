export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  console.log(`url`, url)
  const response = await fetch(
    `https://swapi.dev/api/${url}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    console.log('hit back')


  return response.json()
}
