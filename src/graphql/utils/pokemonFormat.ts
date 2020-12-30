import camelCase from 'camelcase-keys'

export default async (pokemon) => {
  return {
    ...pokemon,
    abilities: [...pokemon.abilities.map(({ ability }) => ability.name)],
    artworkUrl: pokemon.sprites.other['official-artwork'].front_default,
    stats: pokemon.stats.reduce(
      (prev, curr) =>
        camelCase({
          ...prev,
          [curr.stat.name]: curr.base_stat,
        }),
      {}
    ),
  }
}
