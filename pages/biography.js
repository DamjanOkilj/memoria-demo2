import { NextSeo } from 'next-seo';

export default function Biography() {
  return (
    <>
      <NextSeo
        title="About"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        openGraph={{
          title: 'About',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          images: [
            {
              url: '',
              width: 1531,
              height: 875,
              alt: 'Open Graph Image',
            },
          ],
        }}
      />
      <main>
        <div className="grid justify-items-center gap-8">
          <img
            className="h-48 w-48 rounded-full"
            src="/static/jp-valery-avatar.webp"
            alt=""
          />
          <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text pb-8 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
            About me
          </h1>
        </div>

        <div className="mx-auto grid w-10/12 grid-flow-row gap-12">
          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">About me</h2>

            <div className="prose prose-lg max-w-full text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">
              My artist statement
            </h2>

            <div className="prose prose-lg max-w-full text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <p className="py-2 text-lg font-semibold italic text-accent">
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
