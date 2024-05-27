const takeTime=async ()=>{
    await new Promise((resolve)=>{
        setTimeout(resolve,3000)
    })
}

const about=async ()=>{
await takeTime();
return(<>
<h1>This is about page.</h1>
</>)
}
export default about;