import { useCallData } from '../../providers/CallProvider/CallProvider'
import { Loader } from '../Loader/Loader.jsx'

export const withLoader = (Component) => {
  return (props) => {
    const {
      state: { isLoading },
    } = useCallData()

    return isLoading ? <Loader /> : <Component {...props} />
  }
}
