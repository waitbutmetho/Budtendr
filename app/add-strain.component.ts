import { Component } from 'angular2/core';


@Component({
    template: `
    <form class="form-horizontal">
    <h3>Add Strain</h3>
      <div class="form-group">
        <label class="control-label col-sm-2" for="strain-name">Strain</label>
        <div class="col-sm-10">
              <input type="text" class="form-control" id="strain" placeholder="Blue Dream">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="thc-content">THC</label>
        <div class="col-sm-10">
              <input type="number" step="0.01" min="0" class="form-control" id="thc-content" placeholder="22.04">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="cbd-content">CBD</label>
        <div class="col-sm-10">
              <input type="number" step="0.01" min="0" class="form-control" id="cbd-content" placeholder="1.04">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="clean-green-certified">Clean Green Certified</label>
        <div class="col-sm-8">
              <input type="checkbox" class="form-control" id="clean-green-certified" value="clean-green-certified">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="species">Species</label>
        <div class="col-sm-10">
              <input type="radio" name="species" class="form-control" id="species" value="sativa">Sativa<br>
              <input type="radio" name="species" class="form-control" id="species" value="hybrid">Hybrid<br>
              <input type="radio" name="species" class="form-control" id="species" value="indica">Indica<br>
        </div>
      </div>
      <div class="form-group">
        <h3>Recreational Pricing</h3>
        <label class="control-label col-sm-2" for="gram-price">Gram</label>
        <div class="col-sm-10">
              <input type="number" min="0" class="form-control" id="gram-price" placeholder="10">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="eigth-price">1/8</label>
        <div class="col-sm-10">
              <input type="number" min="0" class="form-control" id="eigth-price" placeholder="35">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="quarter-price">1/4</label>
        <div class="col-sm-10">
              <input type="number" min="0" class="form-control" id="quarter-price" placeholder="70">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="half-price">1/2</label>
        <div class="col-sm-10">
              <input type="number" min="0" class="form-control" id="half-price" placeholder="140">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="ounce-price">Oz</label>
        <div class="col-sm-10">
              <input type="number" min="0" class="form-control" id="ounce-price" placeholder="200">
        </div>
      </div>
    <div class="form-group">
      <h3>Medical Pricing</h3>
      <label class="control-label col-sm-2" for="gram-price">Gram</label>
      <div class="col-sm-10">
            <input type="number" min="0" class="form-control" id="gram-price" placeholder="5">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="eigth-price">1/8</label>
      <div class="col-sm-10">
            <input type="number" min="0" class="form-control" id="eigth-price" placeholder="20">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="quarter-price">1/4</label>
      <div class="col-sm-10">
            <input type="number" min="0" class="form-control" id="quarter-price" placeholder="40">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="half-price">1/2</label>
      <div class="col-sm-10">
            <input type="number" min="0" class="form-control" id="half-price" placeholder="80">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="ounce-price">Oz</label>
      <div class="col-sm-10">
            <input type="number" min="0" class="form-control" id="ounce-price" placeholder="100">
      </div>
    </div>
    <button class="btn btn-success">Add Strain</button>
    </form>
    `,

})

export class AddStrainComponent{

}
