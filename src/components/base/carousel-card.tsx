import Image from "next/image"

const CarouselCard = ({
  index
}: {
  index: number
}) => {
  return (
    <div className="p-8 min-h-64 text-center">
      <Image 
        src={`/images/carousel/image-${index}.webp`}
        alt="Carousel Card Image"
        width={60}
        height={60}
        className="!h-[120px] !w-[120px] mx-auto"
      />
      <div>
        <h1 className="text-2xl font-semibold text-muted pt-3">
          Lorem ipsum
        </h1>
        <p className="text-sm text-muted pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default CarouselCard
