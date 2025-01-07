import prisma from '@/app/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user || !user.id) {
    throw new Error('Något gick fel');
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  console.log(dbUser);
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? '',
        lastName: user.family_name ?? '',
        email: user.email ?? '',
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/rauchg${user.given_name}`,
      },
    });
  }
  console.log(dbUser);

  return NextResponse.redirect(new URL('/', request.url));
}
