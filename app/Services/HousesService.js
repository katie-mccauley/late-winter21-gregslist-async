import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
  async editHouse(rawData, id) {
    const res = await api.put('houses/' + id, rawData)
    console.log("edithouse", res.data)
    const houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }
  async deleteHouse(id) {
    const res = await api.delete(`houses/${id}`)
    console.log("delete house service", res);
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
  async createHouse(rawData) {
    const res = await api.post("houses", rawData)
    console.log("create house", res.data);
    let realHouse = new House(res.data)
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }

  async getHouses() {
    const response = await api.get('houses')
    console.log(response.data);
    ProxyState.houses = response.data.map(d => new House(d))

  }



  constructor() {
    console.log("this is house service");
  }


}

export const housesService = new HousesService()