import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

export const StyledAvatar: React.FC<{
  src: string;
  sxPlus?: any;
}> = ({ src, sxPlus }) => {
  return (
    <Avatar
      src={src}
      sx={{
        width: "50px",
        height: "50px",
        ...sxPlus,
      }}
    />
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

export const CircleLoading = styled(CircularProgress)({
  width: "1em !important",
  height: "1em !important",
  color: "currentColor !important",
});
