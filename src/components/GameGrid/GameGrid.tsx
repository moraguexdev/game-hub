import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../../hooks/useGames';

import { GameQuery } from '../../App';

import GameCard from '../GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import GameCardContainer from '../GameCardContainer';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, xl: 3 }}
				spacing={5}
				marginTop='10px'
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}

				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
