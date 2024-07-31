function calculateSum() {
    let totalSum = 0;
    for (let i = 1; i <= 10; i++) {
      const radios = document.getElementsByName(`rad${i}`);
      for (const radio of radios) {
        if (radio.checked) {
          totalSum += parseInt(radio.value);
        }
      }
    }
    document.getElementById('suma').value = totalSum;
  }

  function calculateSum2() {
    let totalSum2 = 0;
    for (let i = 1; i <= 10; i++) {
      const radios2 = document.getElementsByName(`rad2${i}`);
      for (const radio2 of radios2) {
        if (radio2.checked) {
          totalSum2 += parseInt(radio2.value);
        }
      }
    }
    document.getElementById('suma2').value = totalSum2;
  }






/*
  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("wantedNikko").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

*/