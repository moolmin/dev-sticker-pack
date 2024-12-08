import './app.scss'
import SideBar from './components/SideBar/SideBar';
import StickerPack from './components/StickerPack/StickerPack';


function App() {
  return(
    <div className='container'>
      <SideBar />
      <StickerPack />
    </div>
  );
}

export default App
