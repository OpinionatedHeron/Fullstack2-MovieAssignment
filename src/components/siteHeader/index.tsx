import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { set } from "lodash";

const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

// Adjusting menu to create submenus
const menuOptions = [
    {
      label: "Movies",
      items: [
        { label: "Discover Movies", path: "/" },
        { label: "Favorite Movies", path: "/movies/favourites" },
        { label: "Upcoming", path: "/movies/upcoming" },
      ],
    },
    {
      label: "TV Shows",
      items: [
        { label: "Discover TV", path: "/tv/discover" },
        { label: "Top Rated", path: "/tv/top-rated" },
        { label: "Favorite TV", path: "/tv/favourites" },
      ],
    },
  ];

const SiteHeader: React.FC = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Adding anchors for submenus
  const [anchorElMovies, setAnchorElMovies] = useState<HTMLButtonElement | null>(null);
  const openMovies = Boolean(anchorElMovies);
  const [anchorElTv, setAnchorElTv] = useState<HTMLButtonElement | null>(null);
  const openTv = Boolean(anchorElTv);

  const openMoviesMenu = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorElMovies(event.currentTarget);
  const closeMoviesMenu = () => setAnchorElMovies(null);

  const openTvMenu = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorElTv(event.currentTarget);
  const closeTvMenu = () => setAnchorElTv(null);

  const handleMenuSelect = (pageURL: string) => {
    navigate(pageURL);
  };

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            MediaQuest
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            Start your viewing adventure here!
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <React.Fragment key={opt.label}>
                    <MenuItem disabled>{opt.label}</MenuItem>
                    {opt.items.map((item) => (
                      <MenuItem
                        key={item.path}
                        onClick={() => {
                          handleMenuSelect(item.path);
                          setAnchorEl(null);
                        }}
                        sx={{ pl: 4 }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </React.Fragment>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={openMoviesMenu}
                aria-controls={openMovies ? "movies-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMovies ? "true" : undefined}
              >
                Movies
              </Button>
              <Menu
                id="movies-menu"
                anchorEl={anchorElMovies}
                open={openMovies}
                onClose={closeMoviesMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {menuOptions[0].items.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={() => {
                      handleMenuSelect(item.path);
                      closeMoviesMenu();
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
              
              <Button
                color="inherit"
                onClick={openTvMenu}
                aria-controls={openTv ? "tv-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openTv ? "true" : undefined}
              >
                TV Shows
              </Button>
              <Menu
              id="tv-menu"
              anchorEl={anchorElTv}
              open={openTv}
              onClose={closeTvMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {menuOptions[1].items.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => {
                    handleMenuSelect(item.path);
                    closeTvMenu();
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
    <Offset />
    </>
  );
};

export default SiteHeader;
