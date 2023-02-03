export default class Validator {
  static Validate(inputClassName) {
    const input = document.querySelector(`.${inputClassName}`);
    const form = input.closest('form');
    const button = form.querySelector('button');
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (!parseInt(input.value, 10)) {
        document.querySelector('.widget-hint').textContent = 'Введите ВАЛИДНЫЙ НОМЕР карты.';
        document.querySelector('.widget-hint').classList.remove('hidden');
      } else {
        document.querySelector('.widget-hint').classList.add('hidden');
        const cardNumber = Array.from(input.value);
        if (cardNumber.length > 19) {
          document.querySelector('.widget-hint').classList.remove('hidden');
        } else {
          const controlDigit = cardNumber.pop();
          console.log(controlDigit);
          cardNumber.reverse();

          const newCardNumber = [];
          cardNumber.forEach((item, index) => {
            if (index % 2 === 0) {
              const newItem = item * 2;
              newCardNumber.push(newItem);
            } else {
              newCardNumber.push(parseInt(item, 10));
            }
          });
          console.log(newCardNumber);

          const endCardNumber = [];
          newCardNumber.forEach((item) => {
            if (item > 9) {
              const newItem = item - 9;
              endCardNumber.push(newItem);
            } else {
              endCardNumber.push(item);
            }
          });

          const initialValue = 0;
          const sumWithInitial = endCardNumber.reduce(
            (previousValue, currentValue) => previousValue + parseInt(currentValue, 10),
            initialValue,
          );
          const summ = 10 - (sumWithInitial % 10);
          const hint = document.querySelector('.widget-hint');
          if (summ === parseInt(controlDigit, 10)) {
            hint.textContent = 'This card is Valid';
            hint.classList.remove('denied');
            hint.classList.add('accept');
            hint.classList.remove('hidden');
          } else {
            hint.textContent = 'This card is invalid';
            hint.classList.remove('accept');
            hint.classList.add('denied');
            hint.classList.remove('hidden');
          }
        }
      }
    });

    input.addEventListener('focus', () => {
      const hint = document.querySelector('.widget-hint');
      if (!hint.classList.contains('hidden')) {
        hint.classList.add('hidden');
      }
    });
  }
}
