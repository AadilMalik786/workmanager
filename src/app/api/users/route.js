import connectDb from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb();
export async function GET(request) {
    let users = [];
    try {
      users = await User.find().select("-password");
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "failed to get users",
        success: false,
      });
    }

  return NextResponse.json(users);
}
export async function POST(request) {
  // const body =request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);
  // const jsonData= await request.json()
  // console.log(jsonData);
  // const textData = await request.text()
  // console.log(textData);
  // return NextResponse.json({
  // message:"posting user data",
  // })

  //fetch user details from request

  const { name, email, password, about, profileURL } = await request.json();


  // create user object with user model

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    //save the object to the database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"failed to create user",
        status:false
    })
  }
}

