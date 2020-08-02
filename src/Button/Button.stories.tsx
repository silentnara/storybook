/** @jsx jsx */
import Button from './Button';
import { jsx, css } from '@emotion/core';
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = (): JSX.Element => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary');
  const disabled = boolean('disabled', false);
  const width = text('width', '');
  return (
    <Button size={size} theme={theme} disabled={disabled} width={width} onClick={action('onClick')}>
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};

export const primaryButton = (): JSX.Element => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = (): JSX.Element => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = (): JSX.Element => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = (): JSX.Element => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = (): JSX.Element => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = (): JSX.Element => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};
