import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getSession } from "next-auth/client";

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession({ req: ctx.req });

    if (session) {
      return {
        redirect: {
          permanent: false,
          destination: '/dashboard'
        }
      }
    }

    return await fn(ctx);
  }
}