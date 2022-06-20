import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}> 
		<Group header={<Header mode="secondary">Локации</Header>}>
			<Div>
				<p>База террористов</p> 
				<p>Банк</p> 
				<p>Больница</p> 
				<p>Киностудия</p> 
				<p>Кооперативная вечеринка</p> 
				<p>Овощебаза</p> 
				<p>Партизанский отряд</p> 
				<p>Пассажирский поезд</p> 
				<p>Пиратский корабль</p> 
				<p>Полярная станция</p> 
				<p>Посольство</p> 
				<p>Ресторан</p> 
				<p>Супермаркет</p> 
				<p>Театр</p> 
				<p>Университет</p> 
				<p>Воинская часть</p> 
				<p>Войско крестоносцев</p> 
				<p>Казино</p> 
				<p>Океанский лайнер</p> 
				<p>Орбитальная станция</p> 
				<p>Отель</p> 
				<p>Пляж</p> 
				<p>Подводная лодка</p> 
				<p>Полицеский участок</p> 
				<p>Самолёт</p> 
				<p>Спа-салон</p> 
				<p>Станция техобслуживания</p> 
				<p>Церковь</p> 
				<p>Цирк-шапито</p> 
				<p>Школа</p>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
