import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DashboardTwoTone,
  GroupAddTwoTone,
  TuneTwoTone,
  PostAddTwoTone,
  Groups2TwoTone,
  ListAltTwoTone,
  HomeRepairServiceTwoTone
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useMediaQuery } from "react-responsive";

function Sidebar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [mdExpanded, setMdExpanded] = useState(false);
  const [clicked, setClicked] = useState(true);
  const tabletBreakpointMin = useMediaQuery({ query: "(min-width: 992px)" });
  const tabletBreakpointMax = useMediaQuery({ query: "(max-width: 575px)" });
  const pcBreakpointMin = useMediaQuery({ query: "(min-width: 1440px)" });
  const themes = [
    { value: "", text: "Selecionar tema" },
    { value: "cerulean", text: "Cerulean" },
    { value: "cosmo", text: "Cosmo" },
    { value: "cyborg", text: "Cyborg" },
    { value: "darkly", text: "Darkly" },
    { value: "flatly", text: "Flatly" },
    { value: "journal", text: "Journal" },
    { value: "litera", text: "Litera" },
    { value: "lumen", text: "Lumen" },
    { value: "lux", text: "Lux" },
    { value: "materia", text: "Materia" },
    { value: "minty", text: "Minty" },
    { value: "morph", text: "Morph" },
    { value: "pulse", text: "Pulse" },
    { value: "quartz", text: "Quartz" },
    { value: "sandstone", text: "Sandstone" },
    { value: "simplex", text: "Simplex" },
    { value: "sketchy", text: "Sketchy" },
    { value: "slate", text: "Slate" },
    { value: "solar", text: "Solar" },
    { value: "spacelab", text: "Spacelab" },
    { value: "superhero", text: "Superhero" },
    { value: "united", text: "United" },
    { value: "vapor", text: "Vapor" },
    { value: "yeti", text: "Yeti" },
    { value: "zephyr", text: "Zephyr" }
  ];

  //{value: "morph", text: "Morph"},

  const { user } = useContext(AuthGoogleContext);

  useEffect(() => {
    if (clicked) setClicked(false);
    const style = document.getElementById("style");
    if (theme !== "") {
      localStorage.setItem("theme", theme); /* armazena no localstorage */
      var t = localStorage.getItem("theme");
      /* armazena se o fundo selecionado ?? dark ou n??o */
      localStorage.setItem(
        "dark",
        t === "darkly" ||
          t === "vapor" ||
          t === "solar" ||
          t === "slate" ||
          t === "cyborg"
          ? "true"
          : "false"
      );
    }
    /* se n??o houver o item theme no localStorage (usuario n??o setou tema): o default ?? 'sandstone' */
    style.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.2/" +
      (localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : "lux") +
      "/bootstrap.min.css";
  }, [
    theme,
    clicked
  ]); /* fun????o chamada toda vez que theme sofrer altera????o e quando abre o app */

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    navigate(0);
  };
  function handleMdExpand(bool) {
    const isOnMdBreakpoint = !(tabletBreakpointMax || tabletBreakpointMin);
    if (isOnMdBreakpoint) {
      setMdExpanded(bool);
    }
  }

  return (
    user && (
      <nav
        id="sidebarMenu"
        className={
          "d-sm-block bg-primary sidebar collapse-horizontal col-lg-3 col-xl-3 collapse " +
          (clicked && " collapse ") +
          (mdExpanded ? " col-sm-5 col-md-4" : " col-sm-1")
        }
        onMouseEnter={() => handleMdExpand(true)}
        onMouseLeave={() => handleMdExpand(false)}
        style={{ backdropFilter: "blur(50px)" }}
      >
        <div className="position-sticky pt-1 sidebar-sticky">
          <ul className="nav flex-column">
            <li
              className={
                "mt-3 nav-item my-1 mx-0 mx-lg-0" +
                (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="/"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <DashboardTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="groups/new"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <GroupAddTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Cadastrar Gp. Solucion.
                </span>
              </NavLink>
            </li>
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="issues/new"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <PostAddTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Cadastrar Problema
                </span>
              </NavLink>
            </li>
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="groups"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <Groups2TwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Listar G. Solucionadores
                </span>
              </NavLink>
            </li>
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="issues"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <ListAltTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Listar Problemas
                </span>
              </NavLink>
            </li>
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="solutions"
                end
                className="feather-props nav-link  disabled"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <HomeRepairServiceTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Solu????es Anteriores
                </span>
              </NavLink>
            </li>
          </ul>

          <span className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase" />
          <ul className="nav flex-column mb-2">
            <li
              className={
                "nav-item my-1 mx-0 mx-lg-0" + (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <NavLink
                to="settings"
                end
                className="feather-props nav-link"
                onClick={() => {
                  setClicked(true);
                }}
              >
                <TuneTwoTone />
                <span
                  className={
                    "px-2 d-lg-inline" + (mdExpanded ? "" : " d-sm-none")
                  }
                >
                  Configura????es
                </span>
              </NavLink>
            </li>
          </ul>
          <ul
            className={
              "nav flex-column mb-2 " +
              (!(mdExpanded || tabletBreakpointMax || tabletBreakpointMin)
                ? "mx-5 px-5"
                : "")
            }
          >
            <li
              className={
                "nav-item my-1 mx-0 px-2 mx-lg-0 d-sm-inline" +
                (mdExpanded ? "" : " mx-sm-auto")
              }
            >
              <select
                className="form-select"
                aria-label="Theme select"
                value={theme}
                onChange={handleThemeChange}
              >
                {themes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </nav>
    )
  );
}

export default Sidebar;
