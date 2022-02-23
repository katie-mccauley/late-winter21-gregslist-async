import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
  // the splice is deleting the information that is changed and replacing with a new data 
  async editJob(rawData, id) {
    const res = await api.put("jobs/" + id, rawData)
    const jobIndex = ProxyState.jobs.findIndex(j => j.id == id)
    ProxyState.jobs.splice(jobIndex, 1, new Job(res.data))
    ProxyState.jobs = ProxyState.jobs
  }
  // the res is getting the data from the api and we want to create an array of ids that don't match the same id we clicked on, so the one with the deleted button that is clicked is going to be deleted bease created the filter function that doesn't include the id that was clicked on
  async deleteJob(id) {
    const res = await api.delete(`jobs/${id}`)
    console.log(res);
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
  }
  // the create job function is passing in the argument of raw data so when the res is created the rawData can pass through so it can appear on the screen becase of passing in data. Use the spread opperator to include the realJob: new data the is created by user and importing that into the jobs array 
  async createJob(rawData) {
    const res = await api.post("jobs", rawData)
    let realJob = new Job(res.data)
    ProxyState.jobs = [...ProxyState.jobs, realJob]
  }

  // This allows all of the jobs to be demonstarted on the page by pushing them into the jobs array and stating they are new into the map. 
  async getJobs() {
    const response = await api.get('jobs')
    console.log("this is get jobs data", response)
    ProxyState.jobs = response.data.map(d => new Job(d))
  }

}

export const jobsService = new JobsService()