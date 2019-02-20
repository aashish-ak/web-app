/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/** Routing Imports */
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Imports */
import { SystemService } from '../../system.service';

@Component({
  selector: 'mifosx-create-hook',
  templateUrl: './create-hook.component.html',
  styleUrls: ['./create-hook.component.scss']
})
export class CreateHookComponent implements OnInit {

  template: any;
  templates: any = [];
  groupings: any = [];
  schemaInputs: any = [];
  events: any = [];
  ugdTemplateEntities: any = [];
  ugdTemplates: any = [];
  ugdTemplate: any = {};
  showUgdTemplatesDropdown = false;
  allUgdTemplates: any;

  constructor(private route: ActivatedRoute,
              private systemService: SystemService) {
    this.route.data.subscribe((hookData: {
        templates: any,
        hooksTemplate: any
      }) => {
        this.allUgdTemplates = hookData.templates;
        this.templates = hookData.hooksTemplate.templates;
        this.groupings = hookData.hooksTemplate.groupings;
        for (const i in this.templates) {
          if (this.templates[i].name === 'Web') {
            this.template = this.templates[i];
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}
