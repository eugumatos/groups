import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getSession } from "next-auth/client";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession({ req: ctx.req });

    console.log(session)

    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: '/'
        }
      }
    }

    return await fn(ctx);
  }
}

