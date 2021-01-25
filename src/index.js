import { CSSTransition } from 'react-transition-group';
import './style';

export default function App() {
  return (
    <CSSTransition in appear timeout={5000} classNames="fade">
      <div>
        <h1>Hello, World!</h1>
      </div>
    </CSSTransition>
  );
}
