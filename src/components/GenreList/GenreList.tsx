import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-urls';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY='8px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							variant='link'
							fontSize='lg'
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
