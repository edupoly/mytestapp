import countriesResponse from './mockcountries'
export async function mockfetch(){
    return {
        ok: true,
        status: 200,
        json: async () => countriesResponse,
    }
}