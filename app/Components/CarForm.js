// NOTE just a place to keep the ugly form html out of site
export function getCarForm() {
  return `
  <form class="row  p-2" onsubmit="app.carsController.createCar(event)">
                  <h3 class="col-12">Create a Car</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Make</label>
                    <input required type="text" class="form-control" name="make" id="make" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Model</label>
                    <input required type="text" class="form-control" name="model" id="model" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" class="form-control" name="year" id="year" aria-describedby="helpId"
                      placeholder="" value="2000" min="1990" max="3000">
                  </div>
                  <div class="mb-3 col-12">
                    <label for="" class="form-label">Description</label>
                    <input maxlength="50" required type="text" class="form-control" name="description" id="description"
                      aria-describedby="helpId" placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Color</label>
                    <input required type="color" class="form-control" name="color" id="color" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">ImgUrl</label>
                    <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                      placeholder="">
                  </div>
                    <button class="col-4 offset-8 btn btn-success"> Create</button>
                </form>`
}