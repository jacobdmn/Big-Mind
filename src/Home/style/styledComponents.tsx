import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export const StyledAvatar: React.FC<{ src?: string; fullName?: string }> = ({
  src = "",
  fullName = "",
}) => {
  return src ? (
    <Avatar
      src={src}
      sx={{
        width: "50px",
        height: "50px",
      }}
    />
  ) : (
    <Avatar
      sx={{ backgroundColor: "#539b27", width: "50px", height: "50px" }}
      aria-label='recipe'>
      {fullName.split("")[0].toUpperCase()}
    </Avatar>
  );
};

export const StyledButton: React.FC<{
  variant?: "contained" | "text" | "outlined" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  endIcon?: JSX.Element;
  disabled?: boolean;
  sxPlus?: {};
}> = ({
  variant = "contained",
  children,
  onClick,
  endIcon,
  sxPlus = {},
  disabled = false,
}) => {
  return (
    <Button
      sx={{
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
        ...sxPlus,
      }}
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </Button>
  );
};
