import { Component } from 'angular2/core';


@Component({
    template: `
    <form class="form-horizontal">
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
    </form>
    `,

})

export class AddStrainComponent{

}
