import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import loginAction from "../store/actions/loginAction";
function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const dispatch = useDispatch();
  const resData = useSelector((state) => {
    // console.log(state)
    return state.loginReducer;
  });
  useEffect(() => {
    console.log(resData)
  }, [resData]);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassWord(e.target.value);
  };
  const handleLogin = () => {
    console.log(username);
    console.log(password);
    const action = loginAction({ username, password });
    console.log(action);
    dispatch(action);
  };
  return (
    <>
      <Input onChange={handleUserNameChange} />
      <Input onChange={handlePassWordChange} />
      <Button onClick={handleLogin}>登录</Button>
    </>
  );
}

export default React.memo(Login);
