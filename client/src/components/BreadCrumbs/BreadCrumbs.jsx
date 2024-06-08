import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumbs = ({ curPage }) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Ana Səhifə
    </Link>,
    <Typography key="2" color="text.primary">
      {curPage}
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
