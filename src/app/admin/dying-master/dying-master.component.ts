import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";
export interface PeriodicElement {
  material: string;
  position: number;
  countTbl: string;
  shaedTbl: string;
  colorCode: string;
  shaedDetailTbl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    material: '0000',
    position: 1,
    countTbl: '002',
    shaedTbl: 'xxxx',
    shaedDetailTbl: 'xyz',
    colorCode: '#f6c7b6',
  },
];

@Component({
  selector: 'app-dying-master',
  templateUrl: './dying-master.component.html',
  styleUrls: ['./dying-master.component.css'],
})
export class DyingMasterComponent implements OnInit {
  public toggle: boolean = false;
  public frmDyingMaster!: FormGroup;
  count = new FormControl('');

  countList: string[] = ['count 1', 'count 2'];

  material = new FormControl('');

  materialList: string[] = ['material 1', 'material 2'];

  shaed = new FormControl('');

  shaedList: string[] = ['count 1', 'count 2'];

  constructor(private _formBuilder: FormBuilder) {}

  public arrayColors: any = {
    color2: '#e920e9',
  };

  public color2: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'position',
    'material',
    'shaedTbl',
    'countTbl',
    'shaedDetailTbl',
    'colorCode',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngOnInit(): void {
    this.frmDyingMaster = this._formBuilder.group({
      material: [''],
      count: [''],
      shaed: [''],
      shaedDetail: [''],
      colorCode: this.arrayColors.color2.value,
    });
  }
  addDyingMaster() {
    const formData = this.frmDyingMaster.value;
    var data = {
      material: formData.material,
      count: formData.count,
      shaed: formData.shaed,
      shaedDetail: formData.shaedDetail,
      colorCode: formData.colorCode,
    };
    console.log(data);
  }









  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
      background: {
          color: {
              value: "",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: true,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#0d47a1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 6,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  };

  particlesLoaded(container: any): void {
      console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }
}
