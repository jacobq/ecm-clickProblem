import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service notifications;

  @tracked position = 'top-right';
  @tracked zindex = 999;

  @action
  makeNotification() {
    const test = `
<a href="https://emberjs.com/">Ember.js Website</a>
<details>
  <summary>Lorem ipsum</summary>
  Architecto voluptates quia nostrum. Rerum ut deserunt reprehenderit officia molestias fuga ea. Dolorum quos ullam esse. Modi dolores fuga qui et pariatur. Nam provident quis placeat est eius et occaecati.
</details>
    `;
    this.notifications.info(htmlSafe(test));
  }
}
