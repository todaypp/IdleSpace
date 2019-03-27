import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EnemyViewComponent } from "./enemy-view.component";
import { ClarityModule } from "@clr/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormatPipe } from "src/app/format.pipe";
import { EndInPipe } from "src/app/end-in.pipe";
import { Enemy } from "src/app/model/enemy/enemy";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SizeNamePipe } from "src/app/size-name.pipe";

describe("EnemyViewComponent", () => {
  let component: EnemyViewComponent;
  let fixture: ComponentFixture<EnemyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ClarityModule,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [EnemyViewComponent, FormatPipe, EndInPipe, SizeNamePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyViewComponent);
    component = fixture.componentInstance;
    component.ms.start();
    component.enemy = Enemy.generate(1);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});