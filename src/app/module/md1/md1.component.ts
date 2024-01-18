import { Component } from '@angular/core';

@Component({
  selector: 'app-md1',
  templateUrl: './md1.component.html',
  styleUrls: ['./md1.component.scss']
})
export class Md1Component {
  convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
    const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;

    if (celsiusInput.value === "") {
      fahrenheitInput.value = "";
    } else {
      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(1);
    }
  }

  convertFahrenheitToCelsius() {
    const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
    const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;

    if (fahrenheitInput.value === "") {
      celsiusInput.value = "";
    } else {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = celsiusValue.toFixed(1);
    }
  }
}
