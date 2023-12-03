import { Component } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // User credentials
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Get the values from the inputs using their IDs
    const usernameInput = <HTMLInputElement>document.getElementById('username');
    const passwordInput = <HTMLInputElement>document.getElementById('password');
  
    // Check if the inputs are found and have values
    if (usernameInput && passwordInput) {
      this.username = usernameInput.value;
      this.password = passwordInput.value;
  
      const credentials = {
        username: this.username,
        password: this.password
      };
  
      // Log the username and password
      console.log('Sending request with credentials:', credentials);
  
      // Send a POST request using Axios
      axios.post('http://localhost:8080/api/v1/auth/login', credentials)
      .then((response) => {
        const token = response.data.acces_token;
        if (token) {
          
          localStorage.setItem("jwt",token);
          
          try {

            const decodedToken: any = jwtDecode(token);
            const role = decodedToken.role;
            const userId = decodedToken.subId;
            const userName = decodedToken.sub;
            
            localStorage.setItem("role", role);
            localStorage.setItem("id", userId);
            localStorage.setItem("name", userName);

            console.log(decodedToken);
            
            // Redirección basada en el rol
            if (role === 'ROLE_ADMIN') {
              this.router.navigateByUrl('/admin/home');
            } else if (role === 'ROLE_COORDINADOR') {
              this.router.navigateByUrl('/coord/home');
            } else if (role === 'ROLE_DOCENTE') {
              this.router.navigateByUrl('/user/booking');
            } else {
              console.error('Rol no autorizado');
              alert('Acceso no permitido para tu rol');
            }
          } catch (error) {
            console.error('Error decoding token', error);
          }
          

        } else {
          console.warn('JWT not received from the backend');
        }

        
      })
        .catch((error) => {
          // Handle error
          console.error('Login failed', error);
          alert('Login failed'); // Display an alert on failure
        });
    } else {
      console.error('Could not find input elements');
    }

    
  }

}