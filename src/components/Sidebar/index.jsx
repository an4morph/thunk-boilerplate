import { string } from 'prop-types'

const Sidebar = ({ className }) => (
  <div className={className}>
    Sidebar
  </div>
)

Sidebar.propTypes = {
  className: string,
}

export default Sidebar
