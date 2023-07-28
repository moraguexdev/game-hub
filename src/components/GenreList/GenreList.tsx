import { HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-urls';

const GenreList = () => {
	const { data } = useGenres();

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						{genre.name}
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
