import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <Head>
        <title>Vuda AI - AI Image Manipulation</title>
        <meta property="og:title" content="Vuda AI - AI Image Manipulation" />
        <meta property="og:description" content="Transform, remove backgrounds, apply generative refill, and recolor objects in your images with AI." />
        <meta property="og:image" content="https://vuda-ai.vercel.app/assets/images/og-image.png" />
        <meta property="og:url" content="https://vuda-ai.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Vuda AI
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home