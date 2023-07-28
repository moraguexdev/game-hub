import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';

import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr',
				}}
				paddingX={5}
			>
				<GridItem area='nav'>
					<NavBar />
				</GridItem>
				<Show above='lg'>
					<GridItem area='aside' marginRight='20px'>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectGenre={(genre) =>
								setGameQuery({ ...gameQuery, genre })
							}
						/>
					</GridItem>
				</Show>
				<GridItem area='main'>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
