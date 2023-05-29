import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(){
    
  }
  nombre='';
  video='8wOQE-myaC4';
  items = [
    {
      image: "https://i.pinimg.com/originals/aa/8b/92/aa8b926f8b17897418de0b1cd7768fb5.jpg",
      title: "Misión",
      description:
        "La misión de un cine puede ser proporcionar a sus clientes una experiencia única de entretenimiento mediante la proyección de películas y eventos especiales en una atmósfera cómoda y acogedora.",
    },
    {
      image: "https://i.pinimg.com/originals/67/32/cf/6732cfb1f96bd59f66b284532fc6f8a1.jpg",
      title: "Visión",
      description:
        "La visión de un cine puede ser convertirse en el cine preferido de la comunidad, ofreciendo una amplia variedad de películas y eventos especiales, y manteniendo un alto nivel de calidad en todas las áreas de operación.",
    },
    {
      image: "https://i.pinimg.com/originals/86/d6/4f/86d64f72a0bc9bbd4b3bb96e50053bca.jpg",
      title: "Valores",
      description:
        "Los valores de un cine pueden incluir la satisfacción del cliente, la excelencia en el servicio, la innovación, la responsabilidad social y el compromiso con la comunidad.",
    },
    {
      image: "https://i.pinimg.com/originals/cb/dd/a9/cbdda9ffe08483c6092436113f0d8cca.jpg",
      title: "Objetivos",
      description:
        "Algunos objetivos que un cine podría tener incluyen aumentar la asistencia a las películas, ofrecer una experiencia de cine de alta calidad, aumentar la satisfacción del cliente y expandir su presencia en la comunidad.",
    },
    {
      image: "https://i.pinimg.com/originals/8a/ad/5a/8aad5a9692656ca8bcc880738e1f8f86.jpg",
      title: "Estrategias",
      description:
        "Para lograr estos objetivos, un cine podría implementar estrategias como la promoción de eventos especiales, la oferta de servicios premium, la mejora continua de la calidad del servicio y la colaboración con organizaciones comunitarias para apoyar causas sociales importantes.",
    },
  ];

  ngOnInit(): void {
    
  }

}
