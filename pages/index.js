import { ApolloClient, gql, InMemoryCache} from '@apollo/client'
import NextLink from 'next/link'
import CardGallery from '../components/CardGallery'

export default function Home({ galleries }) {
  return (
    <div className="md:gap-30 mx-auto grid gap-20 py-24">
      <div className="pb-8">
        <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text pb-8 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
          Lorem Ipsum
          <br />
          Lorem Ipsum
        </h1>
        <div className="prose prose-2xl mx-auto py-8 text-center text-white-50">
          <p>
            Welcome to my photography page.
            <br />
            Learn more <NextLink href="/biography">about me</NextLink> or{' '}
            <a href="/contact">get in touch</a>.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center justify-items-center gap-12 md:gap-48">
        {galleries.map((gallery) => {
          return (
            <CardGallery
              key={gallery.slug}
              name={gallery.name}
              slug={gallery.slug}
              photoUrl={gallery.photosCollection.items[0]?.url}
            />

          )
        })}
      </div>
    </div>
  )
}

// We use getStaticProps to get the content at build time
    export async function getStaticProps() {
      const client = new ApolloClient({
        uri: 'https://graphql.contentful.com/content/v1/spaces/m3eo7rpvd70v/?access_token=EFuiK-tmQKdMOxfQlc8f4xmHCXE8BZ0kenm10W9j17E',
        credentials: 'same-origin',
        error: console.error(),
        cache: new InMemoryCache()
      });

      

      const GET_ALBUMS= gql`
          query AlbumCollection {
            albumCollection {
              items {
                name
                slug
                photosCollection {
                  items {
                    url
                  }
                }
              }
            }
          }
        `;

      const {data} = await client.query({query: GET_ALBUMS})

      

      return {
        props: {
          galleries: data.albumCollection.items,
        },
      };

}
