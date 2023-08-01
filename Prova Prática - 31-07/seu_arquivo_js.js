const checkButton = document.getElementById('checkButton');
    const resultMessage = document.getElementById('resultMessage');
    const resetButton = document.getElementById('resetButton');

    function calculateAge(userName) {
      const day = parseInt(document.getElementById('dayInput').value);
      const month = parseInt(document.getElementById('monthInput').value);
      const year = parseInt(document.getElementById('yearInput').value);

      const today = new Date();
      const birthDate = new Date(year, month - 1, day);

      const ageInMilliseconds = today - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

      if (isNaN(ageInYears)) {
        resultMessage.textContent = 'Por favor, insira uma data válida.';
      } else {
        const age = Math.floor(ageInYears);
        if (age >= 18) {
          resultMessage.textContent = `${userName}, você tem ${age} anos e é maior de idade!`;
        } else {
          resultMessage.textContent = `${userName}, você tem ${age} anos e é menor de idade.`;
        }
      }
    }

    function resetPage() {
      location.reload();
    }

    resetButton.addEventListener('click', resetPage);

    document.addEventListener('DOMContentLoaded', () => {
      const userName = prompt('Digite o seu nome: ');
      checkButton.addEventListener('click', () => calculateAge(userName));
    });