import Lottie from 'react-lottie'
import pikachuLoading from './pikachu-loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pikachuLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMin meet',
  },
}

const Loading = () => {
  return <Lottie options={defaultOptions} height={250} width={400} />
}

export default Loading
