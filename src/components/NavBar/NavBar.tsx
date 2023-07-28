import { HStack, Image } from '@chakra-ui/react';

import ColorModeSwitch from '../ColorModeSwitch';
import Search from '../Search';

import logo from '../../assets/logo.webp';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack paddingY='10px'>
			<Image src={logo} boxSize='60px' />

			<Search onSearch={onSearch} />

			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
