import Image from 'next/image';
import NextLink from 'next/link';

const CardGallery = ({ name, slug, photoUrl }) => {
  return (
    <div className="group flex items-center justify-center">
      {/* Main picture frame */}
      <div className="z-20 max-w-2xl transform rounded-xs bg-gray-200 p-2 shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
        <NextLink href={`/${slug}/`}>
          <div className="relative max-w-max cursor-pointer">
            <div className="relative flex">
              <Image
                src={photoUrl}
                alt={name}
                width={800}
                height={600}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                unoptimized
              />
            </div>

            <div className="absolute bottom-0 h-full w-full">
              <div className="z-20 grid h-full grid-flow-row items-end bg-linear-to-t from-overlayg1 to-overlayg2 p-4">
                <div>
                  <h2 className="text-xl font-extrabold uppercase">{name}</h2>
                </div>
              </div>
            </div>
          </div>
        </NextLink>
      </div>

      {/* 2nd frame */}
      <div className="group-hover:rotate-4 absolute z-10 rotate-2 scale-100 transform rounded-xs border-8 border-gray-300 shadow-xl transition-all duration-500 ease-in-out group-hover:scale-115 sm:scale-110">
        <div className="hidden bg-yellow-900 opacity-90 md:h-max2 md:w-max3 sm:block"></div>
      </div>

      {/* 3rd frame */}
      <div className="group-hover:-rotate-4 absolute z-0 -rotate-3 scale-100 transform rounded-xs border-8 border-gray-300 shadow-xl transition-all duration-500 ease-in-out group-hover:scale-115 sm:scale-110">
        <div className="hidden bg-yellow-900 opacity-90 md:block md:h-max2 md:w-max3"></div>
      </div>
    </div>
  );
};

export default CardGallery;
