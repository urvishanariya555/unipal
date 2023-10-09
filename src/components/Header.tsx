import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import searchIcon from '../assets/img/Search.svg'
import userImg from '../assets/img/user_img.png'
import notificationsIcon from '../assets/img/notifications.svg'
import settingIcon from '../assets/img/settings.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div className='header sticky top-0 bg-[#fff] z-10 max-[991px]:hidden'>
        <div className='flex items-center justify-between px-[30px]'>
          <div className='relative py-[11px] px-[26px] w-[330px] max-[1200px]:w-[230px] cursor-pointer border border-[#B5B5B5] rounded-[50px] bg-[#D9D9D933] '>
            <input type="text" placeholder="Search" className="placeholder:font-bold placeholder:text-[#666666] bg-transparent border-none outline-none" />
            <img src={searchIcon} alt="searchIcon" className="absolute right-[22px] top-[12px]" />
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className='bg-[#E5E5E5] h-[50px] w-[50px] rounded-[12px] flex items-center justify-center cursor-pointer'>
              <img src={notificationsIcon} alt="notificationsIcon" />
            </div>
            <div className='bg-[#E5E5E5] h-[50px] w-[50px] rounded-[12px] flex items-center justify-center cursor-pointer ml-[15px]'>
              <img src={settingIcon} alt="settingIcon" />
            </div>
            <div className="w-[1px] h-[55px] bg-[#D9D9D9] ml-[20px] mr-[20px] my-[18px]"></div>
            <div className='cursor-pointer flex items-center' id="basic-button"
              onClick={handleClick}
              role="button"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              {/* <img src={userIcon} alt="searchIcon" className="" /> */}
              <div className="">
                <div className="text-[22px] text-[#000] font-bold">John Doe</div>
                <div className="text-[18px] text-[#666] font-semibold">Student</div>
              </div>
              <img src={userImg} alt="userImg" className="ml-[15px] h-[50px] w-[50px] rounded-[12px] object-cover" />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              disableAutoFocusItem
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
                  mt: 1.5,
                  borderRadius: 2,
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 11,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              <MenuItem disableRipple onClick={() => setAnchorEl(null)}>
                My Profile
              </MenuItem>
              <MenuItem disableRipple onClick={() => navigate("/login")}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
