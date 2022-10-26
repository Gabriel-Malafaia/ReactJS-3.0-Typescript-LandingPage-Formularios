import { Backdrop, CircularProgress } from "@mui/material";
// import { useContextUser } from "../../../context/UserContext";

export const Loading = () => {
  // const { loading } = useContextUser();

  return (
    <Backdrop
      className="filterBackdrop"
      sx={{ color: "#ff577f", zIndex: 2 }}
      open={false}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
