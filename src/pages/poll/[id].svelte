<script>
  import CastedVotes from '../_components/CastedVotes.svelte'
  import PollCard from '../_components/PollCard.svelte'
  import { poll_123 as poll } from './_data.js'
  let { votes } = poll
</script>

<div>
  <PollCard {...poll} />
  <CastedVotes {votes} />
</div>
