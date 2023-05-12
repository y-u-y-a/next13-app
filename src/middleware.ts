import { NextResponse } from 'next/server'

export const middleware = async () => {
  console.log('middleware!!!!!!!!!!!!!')
  return NextResponse.next()
  // const res = NextResponse.next()
  // const supabase = createMiddlewareSupabaseClient({ req, res })
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()
  // if (!session && req.nextUrl.pathname.startsWith('/auth/todo-crud')) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/auth'
  //   return NextResponse.redirect(redirectUrl)
  // }
  // return res
}
