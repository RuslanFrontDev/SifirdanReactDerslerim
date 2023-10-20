import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams, setSeaarchParams] = useSearchParams();
  const [search, setSearch] = useState('')
  const food = searchParams.get('food')
  const dog = searchParams.get('dog')
  // 2.ornek niye useEffect verdik, useEffect-i silib yerine console.log('render'); yazsaq button-a hər dəfə basıldığında dəfələrlə render olacaq. Bunun qarşısını almaq üçün useffect-den istifade edirik və buttona neçə dəfə bassaq belə sadəcə bir dəfə render olunur
  // useEffect(() => {
  //   console.log('render');
  // }, [food, dog])
  useEffect(() => {
    console.log('render');
    searchParams.set('dog', search)
    if(!search){
      searchParams.delete('dog')
    }
    setSeaarchParams(Object.fromEntries([...searchParams]))
  }, [search])
  return (
    <div>Home
      {/* 11. ve 12. setirleri yazdiqdan sonra chroma-a gedib http://localhost:3000/?food=dolma&&dog=it bu seklde yaziriq */}
      {food && <p>Menim sevdiyim erzaq: {food}</p>}
      {dog && <p>Menim sevdiyim heyvan: {dog}</p>}
      {/*2. ornek birdefelik linke gelmesi ucun ise button-a basaraaq edirik */}
      <button onClick={() => setSeaarchParams({ food: 'dolma', dog: 'it' })}>Paramslar gelsin</button><br/>
      {/*3. ornek son olaraq input ile axtarmaq isteyende */}
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Home