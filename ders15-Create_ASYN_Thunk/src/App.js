import { useDispatch, useSelector } from "react-redux";
import { fetchDatas } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.datas.data);

  const dataShow = () => {
    dispatch(fetchDatas());
  }

  return (
    <>
      <button onClick={dataShow}>Dataları Göster</button>
      {datas.loading && <div>Loading</div>}
      {datas.error && <div>{datas.error}</div>}
      {datas.length > 0 && datas.map((data) => (
        <div key={data.id}>
          <p>User ID: {data.userId}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
