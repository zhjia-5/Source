function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}



//登录
export async function login(loginId, loginPwd) {
  await delay(3000);
  if (loginId === "admin" && loginPwd === "111111") {
    const user = {
      loginId,
      name: "管理员",
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
}


// 注销
export async function loginOut() {
  await delay(1000);
  localStorage.removeItem("user");
}



// 使用缓存登录
export async function whoAmI() {
  await delay(1000);
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}
