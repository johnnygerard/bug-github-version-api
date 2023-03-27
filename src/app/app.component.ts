import { Component } from "@angular/core";
import { request } from "@octokit/request";

@Component({
  selector: "app-root",
  template: `
    <button type="button" (click)="test(true)">
      Test with version header
    </button>
    <button type="button" (click)="test(false)">
      Test without version header
    </button>
  `,
  styles: [],
})
export class AppComponent {
  async test(versionHeader: boolean) {
    const headers = versionHeader
      ? { "X-GitHub-Api-Version": "2022-11-28" }
      : {};

    const result = await request("GET /users/{username}", {
      username: "octocat",
      headers,
    });

    console.log(result);
  }
}
