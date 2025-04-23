// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
function convertTemperature() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  const resultElement = document.getElementById('result');
  
  const celsius = (fahrenheit - 32) * 5 / 9;
  const message = isNaN(celsius)
    ? "Please enter a valid number."
    : `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
  
  resultElement.innerText = message;
}