import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // User credentials
  username: string = '';
  password: string = '';

  constructor() {}

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
      axios.post('http://localhost:8080/auth/login', credentials)
        .then((response) => {
          // Handle successful login response from the backend
          console.log('Login successful', response.data);
          alert('Login successful'); // Display an alert on success
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
