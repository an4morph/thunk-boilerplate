import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Typography from '../../components/Typography'
import { getCrudAction } from '../../store/actions/crud'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCrudAction())
  }, [dispatch])

  return (
    <div>
      <Typography mode="h1">Redux Thunk Starter</Typography>
      <Typography mode="h4">Redux Thunk Starter</Typography>
    </div>
  )
}

export default HomePage
