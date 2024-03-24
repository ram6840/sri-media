import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = window.scrollY;
    if (scrollTop > 20) {
      const menu=document.getElementById('menu')
      menu?.classList.add('top-fixed')
    }
    else{
      const menu=document.getElementById('menu')
      menu?.classList.remove('top-fixed')
    }
  }
  closeDropdownOnSmallScreen() {
    // Check if the window width is less than a certain breakpoint (e.g., 768 pixels)
    if (window.innerWidth < 768) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler?.classList.contains('collapsed')) {
        // If the menu is already collapsed, do nothing
        return;
      }
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse?.classList.contains('show')) {
        // If the menu is expanded, collapse it
        navbarCollapse.classList.remove('show');
        navbarToggler?.classList.add('collapsed');
      }
    }
  }
}
