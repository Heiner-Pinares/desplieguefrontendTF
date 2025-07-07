import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ ESTA LÍNEA SOLUCIONA TU ERROR
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true, // 👈 si usas standalone
  imports: [RouterModule], // 👈 agrégalo aquí
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent {
  constructor(private router: Router) {}
  slideOffset: number = 0;

  testimonios = [
    {
      stars: 5,
      text: 'Despues de utilizar Autoguard , nunca mas tuve que preouparme por la seguridad de mi vehicul',
      author: 'Carla Del Pilar',
      date: '10 de julio de 2024',
    },
    {
      stars: 5,
      text: 'AutoGuard hizo que monitorear mis vehículos fuera fácil...',
      author: 'Stephanie Jimenez',
      date: '26 de agosto de 2024',
    },
    {
      stars: 4,
      text: 'AutoGuard nos dio confianza total.',
      author: 'Christopher Vargas',
      date: '3 de septiembre de 2024',
    },
  ];

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getStars(count: number): number[] {
    return [1, 2, 3, 4, 5];
  }

  prevSlide() {
    if (this.slideOffset < 0) this.slideOffset += 27;
  }

  nextSlide() {
    if (this.slideOffset > -27 * (this.testimonios.length - 1))
      this.slideOffset -= 27;
  }

 goToLogin() {
  this.router.navigate(['/login']);
}


  getSlideStyle() {
    return {
      transform: `translateX(${this.slideOffset}%)`,
    };
  }
}
