import Image from "next/image";

export const Avatar = ({ src }: { src: string }) => {
	return (
		<Image
			className='w-10 h-10 rounded-full shadow-lg object-cover'
			src={src}
			width={64}
			height={64}
			loading='lazy'
			alt='Bonnie image'
		/>
	);
};
