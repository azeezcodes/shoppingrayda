import React from "react";
import Chip from "@mui/material/Chip";
import CircleIcon from "@mui/icons-material/Circle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "./comp.css";

const Logo = () => {
   return (
      <div className="biglogobox">
         <div className="gradient"></div>
         <img src="/content.png" alt="logocir" className="logocir" />
         <div className="txblock">
            <div>
               <div className="leftlogo">
                  <p className="logotxt">
                     Starts in: 3 days : 2 hours : 24 minutes{" "}
                  </p>
                  <div className="innerlogo">
                     <Chip
                        size="medium"
                        sx={{ backgroundColor: "#FFFAEB" }}
                        icon={
                           <CircleIcon
                              sx={{ fontSize: "10px" }}
                              style={{ color: "#F79009" }}
                           />
                        }
                        label="Not Live"
                     />
                     <p className="layertxt ">Layers Auction </p>
                  </div>
               </div>
            </div>
            <div>
               <Chip
                  size="large"
                  variant="outlined"
                  icon={<ThumbUpAltOutlinedIcon />}
                  label="Accept Invite"
               />
            </div>
         </div>
      </div>
   );
};

export default Logo;
