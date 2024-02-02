import './App.css';
import HigherOrderComponent from './components/HigherOrderComponent/HigherOrderComponent';
import LikePostHOC from './components/HigherOrderComponent/LikePostHOC';
import LikeimageHOC from './components/HigherOrderComponent/LikeimageHOC';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponent';

const LikeimageH = HigherOrderComponent(LikeimageHOC)
const LikePostH = HigherOrderComponent(LikePostHOC)

function App() {
  return (
    <div className='buttons'>
      <h3>My Blog</h3>
      <div className='normal'>
        <LikePost/>
        <LikeImage/>
      </div>

      <div className='hoc'>
        <LikeimageH/>
        <LikePostH/>
      </div>

      <div className='render'>
        <RenderPropsComponent render={(count,increaseCount)=>(
          <LikeImageRender count={count} increaseCount={increaseCount}/>
        )}/>

        <RenderPropsComponent render={(count,increaseCount)=>(
          <LikePostRender count={count} increaseCount={increaseCount}/>
        )}/>

      </div>
    </div>
  );
}

export default App;