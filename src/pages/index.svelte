<script>
  import { metatags, goto } from '@sveltech/routify'
  import GoToPollForm from './_components/GoToPollForm.svelte'
  metatags.title = 'My Routify app'
  metatags.description = 'Description coming soon...'

  let join = false
</script>

<style lang="less">
  div {
    max-width: 400px;
    margin: 0 auto;
  }
</style>

<div>
  <h1>What do you want to do?</h1>

  <a href="/poll/new/">Start new poll</a>
  {#if join}
    <GoToPollForm />
  {:else}<button on:click={() => (join = true)}>Join poll</button>{/if}
</div>
