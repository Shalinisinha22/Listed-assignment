import React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import "./Signup.css";
import { Link, json, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { Alert, CircularProgress } from "@mui/material";

function Login() {
  const { login } = useContext(AuthContext);
  const {googleSignIn}=useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

 

  const navigate = useNavigate();

  const handleClick = async () => {
    if (email == null && password == null) {
      setErr("Please fill out all the required fields");

      setTimeout(() => {
        setErr("");
      }, 2000);

      setLoading(false);
      return;
    }

    try {
      setErr("");
      setLoading(true);
      let userObj = await login(email, password);
     
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

  const handleGoogleSignin=async()=>{

    try{
      const userObj=await googleSignIn();
    
       
      navigate("/")

    }
    catch(err){
      setErr(err.message);

      setTimeout(() => {
        setErr("");
      }, 2000);
      setLoading(false);
    }
    
    

  }
  return (
    <div class="signup-cont">
      <div className="sidebar">
        <h1>Board.</h1>
      </div>

      {/* login */}

      <div className="signup-form">
        <div className="text-cont">
          <h1>Sign In</h1>
          <h5>Sign in to your account</h5>
        </div>
        <div className="signin-opt">
          <Card className="opt-card" variant="standard">
            <Button className="btn" size="medium" onClick={handleGoogleSignin}>
              <FcGoogle style={{ fontSize: "1.5rem" }}></FcGoogle> &nbsp; Sign
              in with google
            </Button>
          </Card>
          <Card className="opt-card" variant="standard">
            <Button className="btn" size="medium">
              <BiLogoApple
                style={{ fontSize: "1rem", color: "gray" }}
              ></BiLogoApple>{" "}
              &nbsp; Sign in with apple
            </Button>
          </Card>
        </div>
        <div className="signin-cont">
          <Card className="signin-card" variant="standard">
            <CardContent>
              <Typography variant="h6" component="div">
                <label for="filled-basic outlined-size-small">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                ></input>
              </Typography>

              <Typography variant="h6" component="div">
                <label for="filled-basic">Password</label>

                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                ></input>
              </Typography>

              <CardActions>
              <Link to="/reset"> <Button size="small">Forgot Password?</Button></Link> 
              </CardActions>
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
                  Sign in
                </Button>:<div style={{display:"flex",justifyContent:"center",width:"100%"}}> <CircularProgress ></CircularProgress></div>}
               
              </CardActions>

              {err && <Alert severity="error">{err}</Alert>}
            </CardContent>
          </Card>

          <Card className="card-2" variant="standard">
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Don't have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button size="small">Register here</Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
