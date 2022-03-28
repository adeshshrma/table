import AddModel from '../components/AddModel'
import Buttons from '../components/Buttons'
import DeleteModel from '../components/DeleteModel'
import DataTable from '../components/Table'
import UpdateModel from '../components/UpdateModel'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-purple-400 pt-[6rem]'>
      <AddModel />
      <DeleteModel />
      <UpdateModel />
      <Buttons />
      <DataTable />
    </div>
  )
}

export default Home
