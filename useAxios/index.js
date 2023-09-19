export const App = () => {
  const { loading, data, error } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });
  console.log(
    `loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
