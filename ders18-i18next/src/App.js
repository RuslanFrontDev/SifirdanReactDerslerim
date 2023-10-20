// 1. ornek adi halda
// import { useTranslation, Trans } from 'react-i18next';

// function App() {
//   const { t, i18n } = useTranslation();
//   const clickHandle = async (lng) => {
//     await i18n.changeLanguage(lng)
//   }
//   return (
//     <div className="App">
//       Aktiv dil:{i18n.language}<br />
//       <nav>
//         <button onClick={() => clickHandle('tr')}>Turkce</button>
//         <button onClick={() => clickHandle('en')}>Ingilisce</button>
//       </nav>
//       <h3>{t('key')}</h3>
//     </div>
//   );
// }

// export default App;
// ..........................................................
// 2. ornek Backend ile
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const clickHandle = async (lng) => {
    await i18n.changeLanguage(lng)
  }
  return (
    <div className="App">
      Aktiv dil:{i18n.language}<br />
      <nav>
        <button onClick={() => clickHandle('tr')}>Turkce</button>
        <button onClick={() => clickHandle('en')}>Ingilisce</button>
      </nav>
      <h3>{t('key')}</h3>
    </div>
  );
}

export default App;