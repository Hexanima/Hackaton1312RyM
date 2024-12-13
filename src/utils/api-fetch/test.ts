import { fail } from 'assert'
import { apiFetch } from '.'
import { isError } from '../is-error'

describe('ApiFetch Test', async () => {
  test('Should return character', async () => {
    const result = await apiFetch('character/1')

    console.log(result)
    if (isError(result)) fail('Should not be an error')
  })
})
