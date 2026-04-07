import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getCountries, getCountry } from '../api'

const mockFetch = vi.fn()

beforeEach(() => {
  vi.stubGlobal('fetch', mockFetch)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

function makeResponse(body: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
  }
}

describe('getCountries', () => {
  it('returns parsed JSON on success', async () => {
    const data = [{ name: 'Germany', flag: 'https://flagcdn.com/de.svg' }]
    mockFetch.mockResolvedValue(makeResponse(data))

    const result = await getCountries()

    expect(result).toEqual(data)
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8081/countries')
  })

  it('throws on non-ok response', async () => {
    mockFetch.mockResolvedValue(makeResponse(null, 500))

    await expect(getCountries()).rejects.toThrow('Failed to fetch countries: 500')
  })
})

describe('getCountry', () => {
  it('returns parsed JSON on success', async () => {
    const data = { name: 'Germany', population: 84000000, capital: 'Berlin', flag: 'https://flagcdn.com/de.svg' }
    mockFetch.mockResolvedValue(makeResponse(data))

    const result = await getCountry('Germany')

    expect(result).toEqual(data)
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8081/countries/Germany')
  })

  it('returns null on 404', async () => {
    mockFetch.mockResolvedValue(makeResponse(null, 404))

    const result = await getCountry('Nonexistent')

    expect(result).toBeNull()
  })

  it('throws on other non-ok responses', async () => {
    mockFetch.mockResolvedValue(makeResponse(null, 503))

    await expect(getCountry('Germany')).rejects.toThrow('Failed to fetch country "Germany": 503')
  })

  it('URL-encodes country names with spaces', async () => {
    const data = { name: 'South Korea', population: 51000000, capital: 'Seoul', flag: 'https://flagcdn.com/kr.svg' }
    mockFetch.mockResolvedValue(makeResponse(data))

    await getCountry('South Korea')

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8081/countries/South%20Korea')
  })
})

describe('BACKEND_API_URL env var', () => {
  it('uses the env var as the base URL', async () => {
    vi.stubEnv('BACKEND_API_URL', 'http://api.example.com')
    vi.resetModules()

    const { getCountries: freshGetCountries } = await import('../api')
    const data = [{ name: 'France', flag: 'https://flagcdn.com/fr.svg' }]
    mockFetch.mockResolvedValue(makeResponse(data))

    await freshGetCountries()

    expect(mockFetch).toHaveBeenCalledWith('http://api.example.com/countries')
    vi.unstubAllEnvs()
  })
})