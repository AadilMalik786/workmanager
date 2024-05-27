const { NextResponse } = require("next/server");

const GET=(request,{params})=>{
const {userId,postId} = params;
console.log("userId",userId);
console.log("postId",postId);
return NextResponse.json(params);
}
export  {GET};