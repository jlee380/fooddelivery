import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
	return (
		<TouchableOpacity className="relative mr-2">
			<Image
				className="h-20 w-20 rounded"
				// source={{ uri: imgUrl }}
				source={{
					uri: "https://links.papareact.com/gn7",
				}}
			/>

			<Text className="absolute bottom-1 left-1 text-white font-bold">
				Image's here
			</Text>
		</TouchableOpacity>
	);
};

export default CategoryCard;