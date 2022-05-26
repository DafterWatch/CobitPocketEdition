import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {

  procesos: any[] = []

  constructor() { 
    this.getProcesos()
  }

  ngOnInit(): void {
  }

  getProcesos(){
    this.procesos.push(
      {
        id: "proceso1",
        name: "PO1",
        title: "Definir un Plan Estratégico de TI",
        description: "El objetivo es lograr un balance óptimo entre las oportunidades de tecnologia de información y los requierimientos de TI de negocio, para asegurar sus logros futuros."
      },
      {
        id: "proceso1",
        name: "PO1",
        title: "Definir un Plan Estratégico de TI",
        description: "El objetivo es lograr un balance óptimo entre las oportunidades de tecnologia de información y los requierimientos de TI de negocio, para asegurar sus logros futuros."
      },
      {
        id: "proceso1",
        name: "PO1",
        title: "Definir un Plan Estratégico de TI",
        description: "El objetivo es lograr un balance óptimo entre las oportunidades de tecnologia de información y los requierimientos de TI de negocio, para asegurar sus logros futuros."
      },
      {
        id: "proceso1",
        name: "PO1",
        title: "Definir un Plan Estratégico de TI",
        description: "El objetivo es lograr un balance óptimo entre las oportunidades de tecnologia de información y los requierimientos de TI de negocio, para asegurar sus logros futuros."
      },
      {
        id: "proceso1",
        name: "PO1",
        title: "Definir un Plan Estratégico de TI",
        description: "El objetivo es lograr un balance óptimo entre las oportunidades de tecnologia de información y los requierimientos de TI de negocio, para asegurar sus logros futuros."
      }
    )
  }

}
