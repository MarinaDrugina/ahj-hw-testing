export default class Identificator {
  static Identificate(inputClassName) {
    const input = document.querySelector(`.${inputClassName}`);
    const visa = document.querySelector('.visa');
    const masterCard = document.querySelector('.master-card');
    const americanExpress = document.querySelector('.american-exrpess');
    const discover = document.querySelector('.discover');
    const jcb = document.querySelector('.jcb');
    const diners = document.querySelector('.diners');
    const mir = document.querySelector('.mir');

    input.addEventListener('keyup', () => {
      if (Identificator.checkForVisa(input.value)) {
        visa.classList.remove('no-active');
      } else {
        visa.classList.add('no-active');
      }

      if (Identificator.checkForMasterCard(input.value)) {
        masterCard.classList.remove('no-active');
      } else {
        masterCard.classList.add('no-active');
      }

      if (Identificator.checkForAmericanExpress(input.value)) {
        americanExpress.classList.remove('no-active');
      } else {
        americanExpress.classList.add('no-active');
      }

      if (Identificator.checkForDiscover(input.value)) {
        discover.classList.remove('no-active');
      } else {
        discover.classList.add('no-active');
      }

      if (Identificator.checkForJCB(input.value)) {
        jcb.classList.remove('no-active');
      } else {
        jcb.classList.add('no-active');
      }

      if (Identificator.checkForDiners(input.value)) {
        diners.classList.remove('no-active');
      } else {
        diners.classList.add('no-active');
      }

      if (Identificator.checkForMIR(input.value)) {
        mir.classList.remove('no-active');
      } else {
        mir.classList.add('no-active');
      }
    });
  }

  static checkForVisa(value) {
    const pattern = /^4/;
    if (pattern.test(value)) {
      return true;
    }
    return false;
  }

  static checkForMasterCard(value) {
    const patternArr = [/^51/, /^52/, /^53/, /^54/, /^55/];
    let status = false;
    for (let i = 0; i < patternArr.length - 1; i += 1) {
      const pattern = patternArr[i];
      if (pattern.test(value)) {
        status = true;
      }
    }
    return status;
  }

  static checkForAmericanExpress(value) {
    const patternArr = [/^34/, /^37/];
    let status = false;
    for (let i = 0; i < patternArr.length - 1; i += 1) {
      const pattern = patternArr[i];
      if (pattern.test(value)) {
        status = true;
      }
    }
    return status;
  }

  static checkForDiscover(value) {
    const patternStart = '/^';
    const patternEnd = '/';
    let status = false;
    for (let i = 622126; i < 622925; i += 1) {
      const pattern = new RegExp(`^${i}`);
      if (pattern.test(value)) {
        status = true;
        break;
      }
    }
    const patternArr = [/^6011/, /^644/, /^645/, /^646/, /^647/, /^648/, /^649/, /^65/];
    for (let i = 0; i < patternArr.length - 1; i += 1) {
      const pattern = patternArr[i];
      if (pattern.test(value)) {
        status = true;
      }
    }
    return status;
  }

  static checkForJCB(value) {
    const patternStart = '/^';
    const patternEnd = '/';
    let status = false;
    for (let i = 3528; i < 3589; i += 1) {
      const pattern = new RegExp(`^${i}`);
      if (pattern.test(value)) {
        status = true;
        break;
      }
    }
    return status;
  }

  static checkForDiners(value) {
    const patternArr = [/^300/, /^301/, /^302/, /^303/, /^304/, /^305/, /^36/];
    let status = false;
    for (let i = 0; i < patternArr.length - 1; i += 1) {
      const pattern = patternArr[i];
      if (pattern.test(value)) {
        status = true;
      }
    }
    return status;
  }

  static checkForMIR(value) {
    const pattern = /^2/;
    if (pattern.test(value)) {
      return true;
    }
    return false;
  }
}
