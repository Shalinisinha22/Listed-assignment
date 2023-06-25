import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Alert, CircularProgress } from "@mui/material";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);

  const handleClick = async () => {
    if (email == null && password == null ) {
      setErr("Please fill out all the required fields");

      setTimeout(() => {
        setErr("");
      }, 2000);

      return;
    }
    try {
      setErr("");
      setLoading(true);
      let userObj = await signup(email, password);
      console.log(userObj.uid);

      setLoading(false);
      navigate("/");

    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr("");
      }, 2000);
      setLoading(false);
    }

  
  };

  return (
    <div class="signup-cont">
      <div className="sidebar">
        <h1>Board.</h1>
      </div>

      {/* register */}
      <div className="signup-form">
        <div className="signin-cont">
          <Card
            className="signin-card"
            sx={{ marginTop: "8rem" }}
            variant="standard"
          >
            <CardContent>
              <Typography variant="h6" component="div">
                <label for="filled-basic outlined-size-small">
                  Email address
                </label>
                <input
                  type="email"
                  spellCheck="false"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                ></input>
              </Typography>

              <Typography variant="h6" component="div">
                <label for="filled-basic">Password</label>

                <input
                  type="password"
                  spellCheck="false"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                ></input>
              </Typography>

            

              <CardActions>
              {!loading? <Button
                  className="signin-button"
                  sx={{
                    background: "black",
                    color: "#d2dae2",
                    borderRadius: "2rem",
                  }}
                  fullWidth
                 
                  onClick={handleClick}
                >
                  Sign Up
                </Button>:<div style={{display:"flex",justifyContent:"center",width:"100%"}}> <CircularProgress ></CircularProgress></div>}
              </CardActions>

              {err != "" && <Alert severity="error">{err}</Alert>}
            </CardContent>
          </Card>

          <Card className="card-2" variant="standard">
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button size="small">sign in</Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Register;
