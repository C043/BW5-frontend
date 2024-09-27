import { useEffect } from "react";

const Fetch = () => {
  const testFetch = async () => {
    try {
      const resp = await fetch("http://localhost:3001/clienti", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MjczNjI0NjEsImV4cCI6MTcyNzk2NzI2MSwic3ViIjoiZGI5ZWE4YzEtMjM5Yy00M2IwLTg4NmUtZjM4YTAxZWMwN2Y5In0.A-BTjuUkKXNgnJ__JwafungThP24wjTpemOBXNMkyzNqfgPPXhcSjTd9VTp0YjU6",
        },
        method: "GET",
      });
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    testFetch();
  }, []);
  return;
};

export default Fetch;
