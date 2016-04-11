import { Component } from 'angular2/core';


@Component({
    template: `
    <form id="dispensaryForm" method="post" action="adddispensary.php" enctype="multipart/form-data">
      <input type="hidden" name="form">
      <div class="form-group">
        <label for="name">Name</label><input class="form-control" type="text" name="name" id="name">
      </div>
      <div class="form-group">
        <label for="address">Address</label><input class="form-control" type="text" name="address" id="address">
      </div>
      <div class="form-group">
        <label for="city">City</label><input class="form-control" type="text" name="city" id="city">
      </div>
      <div class="form-group">
        <label for="state">State</label><input class="form-control" type="text" name="state" id="state">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label><input class="form-control" type="text" name="phone" id="phone">
      </div>
      <div class="form-group">
        <label for="email">Email</label><input class="form-control" type="text" name="email" id="email">
      </div>
      <div class="form-group">
        <label for="hours">Hours</label><input class="form-control" type="text" name="hours" id="hours">
      </div>
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea name="bio" id="bio" class="form-control" form="dispensaryForm" rows="8" cols="40"></textarea>
      </div>
      <div class="form-group">
        <label for="icon">Upload Icon</label><input class="form-control" type="text" name="icon" id="icon">
      </div>
      <input class="btn btn-default saveFormButton" type="submit" name="submit">
    </form>
`,

})

export class AddDispensaryComponent{

}
