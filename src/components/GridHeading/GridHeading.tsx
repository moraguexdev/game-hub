import { Heading } from '@chakra-ui/react';

import { GameQuery } from '../../App';

interface Props {
	gameQuery: GameQuery;
}

const GridHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.platform?.name || ''} ${
		gameQuery.genre?.name || ''
	} Games`;

	return (
		<Heading as='h1' marginBottom='20px' fontSize='32px'>
			{heading}
		</Heading>
	);
};

export default GridHeading;
