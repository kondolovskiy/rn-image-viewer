import { loginEndpoint } from "../constants/Resources"

export interface IResponse {
  code: string,
  id: string,
  password: string
}

export async function logIn({ code, password }: { code: string, password: string}): Promise<IResponse> {
  const response = await fetch(loginEndpoint, {
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