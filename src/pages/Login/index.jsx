import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '../../components/Typography'
import Button from '../../components/Button'
import { getMeAction, loginAction } from '../../store/actions/auth'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { login } = useSelector((state) => state.auth)
  const [form, setForm] = useState({ username: '', password: '' })

  useEffect(() => {
    dispatch(getMeAction())
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAction(form))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography mode="h2">Login</Typography>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      {login.failed && <div>Error: {login.error}</div>}
      <Button
        type="submit"
        disabled={login.loading}
      >
        {login.loading ? 'Loading...' : 'Log in'}
      </Button>
    </form>
  )
}

export default LoginPage
