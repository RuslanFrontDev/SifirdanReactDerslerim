import { createModal, useModals } from "./utils/modal";
import Modal from "./modals";
function App() {
  const modals = useModals();
  console.log(modals);
  return (
    <div>
      {modals.length > 0 && <Modal />}
      <button onClick={() => {
        createModal('login')
      }}>Modal ac</button>
    </div>
  );
}

export default App;
