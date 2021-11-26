export interface IResponse {
  code: string,
  id: string,
  password: string
}

const endpoint = 'https://616ee85f715a630017b3999d.mockapi.io/api/v1/login/'

export async function logIn({ code, password }: { code: string, password: string}): Promise<IResponse> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code,
      password
    })
  })

  return response.json()
}