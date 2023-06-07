import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};
const useShow = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

const CustomHooks = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [users] = useFetch("https://jsonplaceholder.ir/users");
  console.log(users);
  useShow(showUsers);
  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-danger text-center">
        آشنایی با هوک های شخصی سازی شده
      </h5>

      <hr className="bg-dark" />
      <button
        className="btn btn-block btn-success"
        onClick={() => setShowUsers((prevShowUsers) => !prevShowUsers)}
      >
        نمایش کاربران عزیز 😇
      </button>

      {showUsers
        ? users.map((user, index) => (
            <div key={index}>
              <p className="alert alert-light">{`نام : ${user.name}`}</p>
              <img className="w-25" src={user.avatar} />
            </div>
          ))
        : null}
    </div>
  );
};

export default CustomHooks;
