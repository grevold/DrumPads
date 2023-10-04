interface Props {
  isOpened: boolean;
}

export function Burger({ isOpened }: Props) {
  if (isOpened) {
    return (
      <svg
        width="50"
        height="20"
        viewBox="0 0 53 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="53" height="6" fill="green" />
        <rect width="53" height="6" fill="green" />
        <rect width="53" height="6" fill="green" />
        <rect y="15" width="53" height="6" fill="green" />
        <rect y="15" width="53" height="6" fill="green" />
        <rect y="15" width="53" height="6" fill="green" />
        <rect y="29" width="53" height="6" fill="green" />
        <rect y="29" width="53" height="6" fill="green" />
        <rect y="29" width="53" height="6" fill="green" />
      </svg>
    );
  } else {
    return (
      <svg
        width="50"
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
