import axios, { Axios } from 'axios'
import { HolderToken } from '@/api/models/HolderToken'
import { SignMessageResponseData } from '@joyid/core'

export class API {
  private axios: Axios

  constructor() {
    this.axios = axios.create()
  }

  postAirdrops(address: string, signData: SignMessageResponseData) {
    return this.axios.post('/api/airdrops', {
      address,
      ...signData,
    })
  }

  getHolderTokens(address: string) {
    return this.axios.get<HolderToken>(`/api/holder_tokens`, {
      params: {
        address,
      },
    })
  }
}

export const api = new API()