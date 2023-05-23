import InstagramProfileView from "./InstagramProfileView";
import Text from "./Text";
import Post from "./Post";
import "./index.css";

function App() {
  return (
    <div className=" bg-slate-950  h-screen">
      <div className=" md:flex">
        <div className=" w-1/3">
          <InstagramProfileView />
        </div>
        <div className=" w-2/3">
          <Text />
        </div>
      </div>
      <div className="text-center">
        <Post />
      </div>
    </div>
  );
}

export default App;
