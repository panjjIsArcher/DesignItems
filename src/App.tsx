
import AppStyle from "./assets/App.module.scss"
import IndexPage from "./view/index/index"
function App() {
  return (
    <div className={AppStyle.index}>
			<IndexPage/>
		</div>
  )
}

export default App
