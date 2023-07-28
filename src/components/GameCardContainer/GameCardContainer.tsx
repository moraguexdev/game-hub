import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box borderRadius={10} overflow='hidden' boxShadow='base'>
			{children}
		</Box>
	);
};

export default GameCardContainer;
