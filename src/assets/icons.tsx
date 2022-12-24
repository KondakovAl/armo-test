import { FC } from 'react';

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const CorrectIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width='19'
      height='19'
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M8.5 3H2.66667C2.22464 3 1.80072 3.17559 1.48816 3.48816C1.17559 3.80072 1 4.22464 1 4.66667V16.3333C1 16.7754 1.17559 17.1993 1.48816 17.5118C1.80072 17.8244 2.22464 18 2.66667 18H14.3333C14.7754 18 15.1993 17.8244 15.5118 17.5118C15.8244 17.1993 16 16.7754 16 16.3333V10.5'
        stroke='black'
        strokeOpacity='0.25'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.9227 1.52798C15.2607 1.18992 15.7193 1 16.1973 1C16.6754 1 17.134 1.18992 17.472 1.52798C17.8101 1.86605 18 2.32456 18 2.80265C18 3.28075 17.8101 3.73926 17.472 4.07732L9.39912 12.1502L6 13L6.84978 9.60088L14.9227 1.52798Z'
        stroke='black'
        strokeOpacity='0.25'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const DeleteIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width='17'
      height='19'
      viewBox='0 0 17 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M1 4.33325H2.66667H16'
        stroke='#F76363'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.16675 4.33333V2.66667C5.16675 2.22464 5.34234 1.80072 5.6549 1.48816C5.96746 1.17559 6.39139 1 6.83342 1H10.1667C10.6088 1 11.0327 1.17559 11.3453 1.48816C11.6578 1.80072 11.8334 2.22464 11.8334 2.66667V4.33333M14.3334 4.33333V16C14.3334 16.442 14.1578 16.866 13.8453 17.1785C13.5327 17.4911 13.1088 17.6667 12.6667 17.6667H4.33341C3.89139 17.6667 3.46746 17.4911 3.1549 17.1785C2.84234 16.866 2.66675 16.442 2.66675 16V4.33333H14.3334Z'
        stroke='#F76363'
        strokeOpacity='0.76'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.83325 8.5V13.5'
        stroke='#FF6A6A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.1667 8.5V13.5'
        stroke='#FF6A6A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const PrevIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M8.22 12.72C8.07931 12.5795 8.00018 12.3888 8 12.19V11.81C8.0023 11.6116 8.08112 11.4217 8.22 11.28L13.36 6.14997C13.4539 6.05532 13.5817 6.00208 13.715 6.00208C13.8483 6.00208 13.9761 6.05532 14.07 6.14997L14.78 6.85997C14.8741 6.95214 14.9271 7.07828 14.9271 7.20997C14.9271 7.34166 14.8741 7.46781 14.78 7.55997L10.33 12L14.78 16.44C14.8747 16.5339 14.9279 16.6617 14.9279 16.795C14.9279 16.9283 14.8747 17.0561 14.78 17.15L14.07 17.85C13.9761 17.9446 13.8483 17.9979 13.715 17.9979C13.5817 17.9979 13.4539 17.9446 13.36 17.85L8.22 12.72Z'
        fill='#BCBCBC'
      />
    </svg>
  );
};

export const NextIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M15.78 12.72C15.9207 12.5795 15.9998 12.3888 16 12.19V11.81C15.9977 11.6116 15.9189 11.4217 15.78 11.28L10.64 6.14997C10.5461 6.05532 10.4183 6.00208 10.285 6.00208C10.1517 6.00208 10.0239 6.05532 9.93 6.14997L9.22 6.85997C9.12594 6.95214 9.07293 7.07828 9.07293 7.20997C9.07293 7.34166 9.12594 7.46781 9.22 7.55997L13.67 12L9.22 16.44C9.12534 16.5339 9.0721 16.6617 9.0721 16.795C9.0721 16.9283 9.12534 17.0561 9.22 17.15L9.93 17.85C10.0239 17.9446 10.1517 17.9979 10.285 17.9979C10.4183 17.9979 10.5461 17.9446 10.64 17.85L15.78 12.72Z'
        fill='#BCBCBC'
      />
    </svg>
  );
};

export const FilterIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width='15'
      height='10'
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M4 3.5L3.64645 3.85355L4 4.20711L4.35355 3.85355L4 3.5ZM0.646447 0.853553L3.64645 3.85355L4.35355 3.14645L1.35355 0.146447L0.646447 0.853553ZM4.35355 3.85355L7.35355 0.853553L6.64645 0.146447L3.64645 3.14645L4.35355 3.85355Z'
        fill='#9a9ca0'
      />
    </svg>
  );
};

export const SearchIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.0004 15.7504C12.5379 16.849 10.72 17.5 8.75002 17.5C3.91752 17.5 0 13.5825 0 8.74999C0 3.9175 3.91752 0 8.75002 0C13.5825 0 17.5 3.9175 17.5 8.74999C17.5 10.72 16.849 12.5379 15.7504 14.0004L21 19.25L19.25 21L14.0004 15.7504ZM15.75 8.74999C15.75 12.616 12.616 15.75 8.75002 15.75C4.88402 15.75 1.75 12.616 1.75 8.74999C1.75 4.884 4.88402 1.75 8.75002 1.75C12.616 1.75 15.75 4.884 15.75 8.74999Z'
        fill='#4C505B'
      />
    </svg>
  );
};
