type IIconProps = {
  path: string;
  className: string;
};

export default function Icon({ path, className }: IIconProps) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={className}
    ></img>
  );
}

// function Icon({ path = "options", className = "w-4 h-4" }) {
//     return /*#__PURE__*/ React.createElement("img", {
//       src: `https://assets.codepen.io/3685267/${path}.svg`,
//       alt: "",
//       className: clsx(className),
//     });
//   }
