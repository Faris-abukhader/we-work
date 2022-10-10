import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials";
import('next').NextConfig
export default NextAuth({
  secret: process.env.JWT_SECRET,
  
  pages: {
    signIn: "/auth/signIn",
    // signOut: "/auth/logout",
    // error: "/auth/signIn", // Error code passed in query string as ?error=
  },
  providers: [
    CredentialsProvider({
      credentials: {
        id: 'credentials',
        name: 'Credentials',  
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your super secure password",
        },
        rememberMe:{
          type:'text'
        }
      },
      async authorize(credentials) {

        try{
          const res = await axios.post(`${process.env.API_URL}/auth/signIn`,{email:credentials.email,password:credentials.password},{
            headers: {
              'Content-Type': 'application/json',
              // 'token': process.env.WEBSITE_TOKEN
           }
          })
  

          const user = res.data

          console.log("***********************")
          console.log(res)
          console.log("***********************")


          if (!user.id) {
            throw new Error('something wrong');
          }

          // If no error and we have user data, return it
          if (user.id) {
            
            // return user.user
            return{
              id:user.id,
              email:user.email,
              name:user.firstName+' '+user.lastName,
              image:user.avatar,
              token:user.token,
              accountType:user.accountType,
            }
          }

          // thorw err if user data could not be retrieved
          throw new Error('something went wrong');
  

          
        }catch(err){
          console.log('here is the error')
          console.log(err.message)
        }

      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks:{
       
    redirect:async({baseUrl})=>{
      return baseUrl
    },
    jwt:async({token,user})=>{
      user && (token.user = user)
      return token
    },
    session:async({session,token,user})=>{

      session.user = token.user
      return session

    },
      },
      secret:process.env.JWT_SECRET,
      jwt:{
        secret:process.env.JWT_SECRET,
        encryption:true
      },
      debug:true
});
