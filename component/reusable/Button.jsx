import { Button } from "@mui/material";

const SimpleButton = ({ value, variant, className, ...props }) => {
  return (
    <Button variant={variant} className={className} {...props}>
      {value}
    </Button>
  );
};

export default SimpleButton;
