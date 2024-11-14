"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const Product = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <ol type="1">
        {data.map((each) => (
          <li key={each.id}>{each.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Product;
