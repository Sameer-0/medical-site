import Image from "next/image"

const CarouselCard = ({
  image, headerText, bodyText
}: {
  image: string,
  headerText: string,
  bodyText: string
}) => {
  return (
    <div className="p-8 min-h-64 text-center">
      <Image 
        src={`/images/${image}.webp`}
        alt="Carousel Card Image"
        width={60}
        height={60}
        className="!h-[120px] !w-[120px] mx-auto"
      />
      <div>
        <h1 className="text-2xl font-semibold text-muted pt-3">
          {headerText}
        </h1>
        <p className="text-sm text-muted pt-3">
          {bodyText}
        </p>
      </div>
    </div>
  )
}

export default CarouselCard
