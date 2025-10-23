import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import SubGallery from '../components/SubGallery';
import { NextSeo } from 'next-seo';

export default function AlbumPage({ album }) {
  return (
    <>
      <NextSeo
        title={album.name}
        description={`Photo collection: ${album.name}`}
        openGraph={{
          title: album.name,
          description: `Photo collection: ${album.name}`,
        }}
      />
      <main>
        <div className="mx-auto grid py-12">
          <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text py-4 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
            {album.name}
          </h1>
        </div>

        <div className="grid grid-flow-row grid-cols-1 items-center justify-items-center gap-32 p-8 md:p-32">
          <SubGallery images={album.photosCollection.items} />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql.contentful.com/content/v1/spaces/m3eo7rpvd70v',
      fetch: global.fetch,
      headers: {
        Authorization: `Bearer EFuiK-tmQKdMOxfQlc8f4xmHCXE8BZ0kenm10W9j17E`,
      },
    }),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query SlugsIndex {
        albumCollection {
          items {
            slug
          }
        }
      }
    `,
  });

  const paths = data.albumCollection.items.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql.contentful.com/content/v1/spaces/m3eo7rpvd70v',
      fetch: global.fetch,
      headers: {
        Authorization: `Bearer EFuiK-tmQKdMOxfQlc8f4xmHCXE8BZ0kenm10W9j17E`,
      },
    }),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Album($slug: String) {
        albumCollection(where: { slug: $slug }, limit: 1) {
          items {
            name
            photosCollection {
              items {
                url
              }
            }
          }
        }
      }
    `,
    variables: { slug: params.slug },
  });

  return {
    props: {
      album: data.albumCollection.items[0],
    },
  };
}