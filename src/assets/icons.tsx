import { FC } from 'react';

interface IconProps {
  className: string;
  onClick: () => void;
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
