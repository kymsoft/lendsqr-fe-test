interface HeaderProps{
    label: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
};

export const Header = ({
    label,
    fontSize,
    fontFamily,
    fontWeight
}: HeaderProps) => {
  return (
    <p className="header" style={{fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight}}>{label}</p>
  )
}