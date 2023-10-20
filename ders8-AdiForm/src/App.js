import { useEffect, useState } from "react";

function App() {
  // 1. ornek text input
  // const [text, setText] = useState('');
  // const textInput = (e) => {
  //   setText(e.target.value)
  // }


  // 2.ornek Email
  // const [email, setEmail] = useState('');

  // const emailInput = (e) => {

  //   setEmail(e.target.value)
  // }
  // const addemail = (e) => {
  //   const emailCode = "@gmail.com"
  //   if (!(email === "")) {
  //     if (!email.includes(emailCode)) {
  //       setEmail(email + emailCode)
  //     }
  //   }
  // }


  // 3. ornek Password
  // const [password, setPassword] = useState('');
  // const passwordInput = (e)=>{
  //   setPassword(e.target.value)
  // }


  // 4. ornek SelectBox
  // const [select, setSelect] = useState('');
  //multiple-a gore
  // const [categories, setCategories] = useState([2,4])
  // 3.1
  // const selectInput = (e)=>{
  //   setSelect(e.target.value)
  // }
  // ......................................
  // 3.2
  // const cinsiyyet = ["qadin", "kisi"];
  // ..............................................
  // 3.3
  // const cinsiyyet = [
  //   {key:0, value:"qadin"},
  //   {key:1, value:"kisi"},
  // ];
  // const findObj = cinsiyyet.find(cins=>cins.value === select)
  // const selectInput = (e) => {
  //   setSelect(e.target.value)
  // }
  // 3.4 multiple
  // const categoryList = [
  //   {key:1, value:"PHP"},
  //   {key:2, value:"CSS"},
  //   {key:3, value:"PJYTON"},
  //   {key:4, value:"Angular"},
  // ]
  // const multipleCat = categories && categoryList.filter(item=>item.key === categories.find(c=>item.key === c))
  // 5. ornek Checkbox
  // const [check, setCheck] = useState(false)
  // 5.1
  // const [rules, setRules] = useState([
  //   {key:1, value:"Ana", checked:true},
  //   {key:2, value:"Ata", checked:false},
  //   {key:3, value:"Qardasi", checked:true},
  //   ])
  //   const checkRule = (key,value)=>{
  //        setRules(rules=>rules.map((rule, index)=>{
  //         if(key === rule.key){
  //           rule.checked = value
  //         }
  //         return rule
  //        }))
  //   }
  // 6. ornek Radio
  // const [radio, setRadio] = useState("Ana")
  // const aile=[
  //     { key:"Ana", value:"Qadin"},
  //     { key:"Ata",value:"Kisi"},
  //     { key:"Qardasi",value:"Kisi"},
  //     ]
  //     const findObj = aile.find(cins=>cins.key === radio)

  // 7. ornek File
  // QEYD:::: 96. setirde ARROW function ile yazildigi zaman FileReader-i oxuya bilmiyecek. ancaq 106. benddeki kimi bind ile yazsaq alinacaq
  // const [img, setImg] = useState(false);
  // const [file, setFile] = useState(false);
  // useEffect(() => {
  //   if (img) {
  //     const fileReader = new FileReader();
  //     // fileReader.addEventListener("load", ()=>{
  //     //   setFile(this.result)
  //     // })
  //     fileReader.addEventListener("load", function () {
  //       setFile(this.result)
  //     })
  //     fileReader.readAsDataURL(img);
  //   }
  // }, [img])
  // ....................................................................0.............................................................00......
  // useEffect(() => {
  //   if (img) {
  //     const fileReader = new FileReader();
  //     const loadHandler = () => {
  //       setFile(fileReader.result);
  //     };

  //     // bind kullanarak loadHandler işlevini bağlamak
  //     fileReader.addEventListener("load", loadHandler.bind(fileReader));

  //     fileReader.readAsDataURL(img);
  //   }
  // }, [img]);
  return (
    <>
      <pre>{JSON.stringify( null, 2)}</pre>
      <form>
        {/* 1.ornek Text Input*/}
        {/* <input type="text" value={text} onChange={textInput} /> */}
        {/* 2.ornek Email*/}
        {/* <input type="email" value={email} onChange={emailInput} onBlur={addemail} /><br /> <hr /> */}
        {/* 3.ornek Password*/}
        {/* <input type="password"  pattern="[0-9a-fA-F]{4,8}" value={password} onChange={passwordInput} /><br /> <hr /> */}
        {/* 4.ornek Select*/}
        {/* <select value={select} onChange={selectInput}> */}
        {/* 3.1 */}
        {/* <option value={"qadin"}>qadin</option>
          <option value={"kisi"}>kisi</option> */}
        {/* 3.2 */}
        {/* {cinsiyyet.map((cins, index) => (
            <option key={index} value={cins}>{cins}</option>
          ))} */}
        {/* 3.3 */}
        {/* {cinsiyyet.map((cins) => (
            <option key={cins.key} value={cins.value}>{cins.value}</option>
          ))}  */}
        {/* 3.4 */}
        {/* {cinsiyyet.map((cins) => (
            <option key={cins.key} value={cins.value}>{cins.value}</option>
          ))}  */}
        {/* </select> */}
        {/* 3.4 Multiple */}
        {/* <select value={categories} multiple={true} onChange={(e)=>setCategories([...e.target.selectedOptions].map(option=>+option.value))}>
          {categoryList.map(item=>(
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select> */}
        {/*5. ornek  Checkbox*/}
        {/* <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)}/> */}
        {/*5.1 ornek  */}

        {/* {rules.map(rule=>(
          <input type="checkbox" key={rule.key} checked={rule.checked} onChange={e=>checkRule(rule.key,e.target.checked)}/>
        ))} */}
        {/* 6. ornek RAdio*/}
        {/* {aile.map(item=>(
        <>
          <input type="radio" key={item.key} value={item.key} checked={item.key === radio} onChange={(e)=>setRadio(e.target.value)}/>
        {item.value}
        </>
        ))} */}
        {/* 7. ornek File */}
        {/* <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <div>
          {img && <>img.name</>}
          {file && <img src={file} alt="sekil" />}
        </div> */}
        <br />
        <button>Gonder</button>
      </form>
    </>
  );
}

export default App;
