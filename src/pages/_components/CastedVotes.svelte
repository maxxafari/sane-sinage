<script>
  export let votes = []
  const sortByTime = (a, b) => a.timeStamp < b.timeStamp
  console.log(votes)
</script>

<ul>
  {#each votes.sort(sortByTime) as vote (vote.name)}
    <li>{vote.name}: {vote.voredFor}</li>
  {/each}
</ul>
