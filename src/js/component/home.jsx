import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Header } from "./Header.jsx";
import { CardList } from "./CardList.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Header></Header>
			<CardList></CardList>
			<footer></footer>
			<Card></Card>
		</div>
	);
}

export default Home;
