import { select } from '@storybook/addon-knobs';

export default () => {
  const buttonClasses = select('Button Classes', {}, '');

  return `<button class="n-button ${buttonClasses}">Button</button>`;
};
