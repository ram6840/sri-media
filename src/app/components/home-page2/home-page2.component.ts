import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page2',
  templateUrl: './home-page2.component.html',
  styleUrls: ['./home-page2.component.scss']
})
export class HomePage2Component {
  @ViewChild('typed') typed!: ElementRef;
  constructor(){
    this.typeEffect()
  }
  typeEffect() {
    const text = 'we undertake only customized events & photo shoot cinematic style';
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        this.typed.nativeElement.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here
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
