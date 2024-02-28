import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "./authSlice";

export default function AuthForm() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? "Login" : "Register";
  const altCopy = isLogin
    ? "Need an Account? Register here."
    : "Already have an account? Login here.";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  const [register, { isLoading: registerLoading, error: registerError }] =
    useRegisterMutation();

  const attemptAuth = async (evt) => {
    evt.preventDefault();
    const authMethod = isLogin ? login : register;
    const credentials = { userName, password };

    try {
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>{authAction}</h1>
      <form onSubmit={attemptAuth}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <button>{authAction}</button>
      </form>
      <a onClick={() => setIsLogin(!isLogin)}>{altCopy}</a>

      {(loginLoading || registerLoading) && <p>Please wait...</p>}
      {loginError && <p role="alert">{loginError}</p>}
      {registerError && <p role="alert">{registerError}</p>}
    </>
  );
}
