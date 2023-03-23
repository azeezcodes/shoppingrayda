import React from 'react'
import "./comp.css"
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Typography } from '@mui/material';

const Header = () => {
  return (
     <div className="head">
        <div className="texthead">
           <Typography sx={{ fontWeight: "600" }} variant="h4" >Welcome</Typography>
           <Typography>Your current sales auction and activity.</Typography>
        </div>
        <div>
           <Badge
              badgeContent={2}
              color="warning"
              anchorOrigin={{
                 vertical: "bottom",
                 horizontal: "right",
              }}
           >
              <NotificationsOutlinedIcon  />
           </Badge>
        </div>
     </div>
  );
}

export default Header
