interface Props {
  isBurgerOpen: boolean;
  className: string;
  onClick?: () => void;
}
export function Burger({ isBurgerOpen, className, onClick }: Props) {
  if (isBurgerOpen) {
    return (
      <svg
        className={className}
        onClick={onClick}
        width="43"
        height="20"
        viewBox="0 0 53 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="53" height="6" fill="white" />
        <rect width="53" height="6" fill="white" />
        <rect width="53" height="6" fill="white" />
        <rect y="15" width="53" height="6" fill="white" />
        <rect y="15" width="53" height="6" fill="white" />
        <rect y="15" width="53" height="6" fill="white" />
        <rect y="29" width="53" height="6" fill="white" />
        <rect y="29" width="53" height="6" fill="white" />
        <rect y="29" width="53" height="6" fill="white" />
      </svg>
    );
  } else {
    return (
      <svg
        className={className}
        onClick={onClick}
        width="43"
        height="20"
        viewBox="0 0 53 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="53" height="6" fill="black" />
        <rect width="53" height="6" fill="black" />
        <rect width="53" height="6" fill="black" />
        <rect y="15" width="53" height="6" fill="black" />
        <rect y="15" width="53" height="6" fill="black" />
        <rect y="15" width="53" height="6" fill="black" />
        <rect y="29" width="53" height="6" fill="black" />
        <rect y="29" width="53" height="6" fill="black" />
        <rect y="29" width="53" height="6" fill="black" />
      </svg>
    );
  }
}
