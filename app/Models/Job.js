export class Job {
  constructor({ id, jobTitle, company, rate, hours, description }) {
    this.id = id || ""
    this.jobTitle = jobTitle || ""
    this.company = company || ""
    this.rate = rate || ""
    this.hours = hours || ""
    this.description = description || ""
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <div class="p-3 clip-text">
            <p>${this.jobTitle} | ${this.company} | ${this.rate}</p>
            <p>${this.hours}</p>
            <p>${this.description}</p>
            <div class="text-end">
            <button class="btn btn-outline-warning" onclick="app.jobsController.editJob('${this.id}')"> Edit </button>
            <button class="btn btn-outline-danger" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}