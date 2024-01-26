import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/critic-score";
import DefinitionItem from "../components/definition-item";
import ExpandableText from "../components/expandable-text";
import GameAttributes from "../components/game-attributes";
import GameScreenshots from "../components/game-screenshots";
import GameTrailer from "../components/game-trailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
