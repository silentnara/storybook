/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Icon, { IconType, iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'components|Icon',
};

export const icon = (): JSX.Element => <Icon icon="heart" />;
icon.story = {
  name: 'Default',
};

export const customSize = (): JSX.Element => <Icon icon="heart" size="4rem" />;

export const customColor = (): JSX.Element => <Icon icon="heart" color="red" />;

export const customizedWithStyle = (): JSX.Element => (
  <Icon icon="heart" css={{ color: 'red', width: '4rem' }} />
);

export const listOfIcons = (): JSX.Element => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map((icon: IconType) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
