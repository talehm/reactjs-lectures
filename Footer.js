import { mainstyle } from "../assets/js/main";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  bckground: {
    backgroundColor: "#14161A",
    color: "#898A8E",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.bckground}>
      <div style={mainstyle.container} className={classes.flex}>
        <div className={classes.title} style={mainstyle.p}>
          <p> Copyright © 2021 Gallery.az</p>
        </div>
        <div>
            <ul className={classes.flex} style={mainstyle.ul}>
              <li>
                <a style={mainstyle.a}>İstifadə Qaydaları</a>
              </li>
              <li>
                <a style={mainstyle.a}>Müəllif Hüquqları</a>
              </li>
              <li>
                <a style={mainstyle.a}>Haqqımızda</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Footer;
