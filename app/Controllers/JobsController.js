import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";

function _draw() {
  let template = ""
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById("listings").innerHTML = template
}
export class JobsController {
  constructor() {
    ProxyState.on("jobs", _draw)
    _draw()
  }

  async viewJobs() {
    try {
      await jobsService.getJobs()
      document.getElementById('modal-body-slot').innerHTML = getJobForm()
      document.getElementById('create-button').classList.remove('visually-hidden')
    } catch (error) {
      console.error(error)
    }
  }

  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let rawData = {
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        rate: form.rate.value,
        description: form.description.value,
        hours: form.hours.value
      }
      if (!id) {
        jobsService.createJob(rawData)
      } else {
        jobsService.editJob(rawData, id)
      }
      let modal = document.getElementById('new-listing')
      form.reset()
      bootstrap.Modal.getOrCreateInstance(modal).hide() //NOTE closes bootstrap modal

    } catch (error) {
      console.error(error)
    }

  }
  async deleteJob(id) {
    jobsService.deleteJob(id)
  }

  editJob(id) {
    const job = ProxyState.jobs.find(j => j.id == id)
    document.getElementById('modal-body-slot').innerHTML = getJobForm(job)
    let modal = document.getElementById('new-listing')
    bootstrap.Modal.getOrCreateInstance(modal).toggle()
  }
}