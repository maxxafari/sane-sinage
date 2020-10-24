<script>
  import { goto } from '@sveltech/routify'
  let pollId = null
  const submit = (e) => {
    $goto(`/poll/${pollId}`)
  }
  function focus(el) {
    el.focus()
  }
</script>

<style>
</style>

<form on:submit|preventDefault={submit}>
  <input
    id="pollNumber"
    name="pollNumber"
    type="text"
    bind:value={pollId}
    use:focus
    placeholder="Enter poll number ex: 1234"
  />
  <button type="submit" disabled={!pollId}>Join poll</button>
</form>
