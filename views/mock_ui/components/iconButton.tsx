type IIconButtonProps = {
  onClick: Function;
  icon: string;
  className: string;
};

export function NetworkIconButton({
  onClick = () => {},
  icon = "options",
  className = "w-4 h-4",
}: IIconButtonProps) {
  return (
    <button onClick={(e) => onClick} type="button" className={className}>
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

export default function IconButton({
  onClick = () => {},
  icon = "options",
  className = "w-4 h-4",
}: IIconButtonProps) {
  return (
    <button onClick={(e) => onClick} type="button" className={className}>
      <img src={`/${icon}.svg`} alt="" className="w-full h-full" />
    </button>
  );
}
